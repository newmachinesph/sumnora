Add-Type -AssemblyName System.Drawing

# Regenerates every raster brand asset from public/brand/sumnora-logo.png.
# The source is trimmed to its opaque bounds first so the mark fills each output.

$projectRoot = Split-Path -Parent $PSScriptRoot
$sourcePath = Join-Path $projectRoot "public/brand/sumnora-logo.png"
$ivory = [System.Drawing.ColorTranslator]::FromHtml("#FBF7F2")

function Get-OpaqueBounds([System.Drawing.Bitmap]$Bitmap) {
  $rect = [System.Drawing.Rectangle]::new(0, 0, $Bitmap.Width, $Bitmap.Height)
  $data = $Bitmap.LockBits($rect, [System.Drawing.Imaging.ImageLockMode]::ReadOnly, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)
  $bytes = [byte[]]::new($data.Stride * $Bitmap.Height)
  [System.Runtime.InteropServices.Marshal]::Copy($data.Scan0, $bytes, 0, $bytes.Length)
  $Bitmap.UnlockBits($data)

  $minX = $Bitmap.Width; $minY = $Bitmap.Height; $maxX = -1; $maxY = -1
  for ($y = 0; $y -lt $Bitmap.Height; $y++) {
    $row = $y * $data.Stride
    for ($x = 0; $x -lt $Bitmap.Width; $x++) {
      if ($bytes[$row + ($x * 4) + 3] -gt 8) {
        if ($x -lt $minX) { $minX = $x }
        if ($x -gt $maxX) { $maxX = $x }
        if ($y -lt $minY) { $minY = $y }
        if ($y -gt $maxY) { $maxY = $y }
      }
    }
  }
  return [System.Drawing.Rectangle]::new($minX, $minY, $maxX - $minX + 1, $maxY - $minY + 1)
}

function New-Canvas([int]$Width, [int]$Height, [System.Drawing.Color]$Background) {
  $bitmap = [System.Drawing.Bitmap]::new($Width, $Height, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)
  $graphics = [System.Drawing.Graphics]::FromImage($bitmap)
  $graphics.Clear($Background)
  $graphics.CompositingQuality = [System.Drawing.Drawing2D.CompositingQuality]::HighQuality
  $graphics.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
  $graphics.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
  $graphics.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
  return $bitmap, $graphics
}

# Draws the trimmed mark centered in a square, scaled so its height is $Fill of the box.
function New-SquareIcon([int]$Size, [double]$Fill, [System.Drawing.Color]$Background) {
  $bitmap, $graphics = New-Canvas $Size $Size $Background
  $height = [Math]::Round($Size * $Fill)
  $width = [Math]::Round($height * $mark.Width / $mark.Height)
  $dest = [System.Drawing.Rectangle]::new([int](($Size - $width) / 2), [int](($Size - $height) / 2), $width, $height)
  $graphics.DrawImage($mark, $dest, 0, 0, $mark.Width, $mark.Height, [System.Drawing.GraphicsUnit]::Pixel)
  $graphics.Dispose()
  return $bitmap
}

function Get-PngBytes([System.Drawing.Bitmap]$Bitmap) {
  $stream = [System.IO.MemoryStream]::new()
  $Bitmap.Save($stream, [System.Drawing.Imaging.ImageFormat]::Png)
  $bytes = $stream.ToArray()
  $stream.Dispose()
  return ,$bytes
}

function Save-Png([System.Drawing.Bitmap]$Bitmap, [string]$Path) {
  $Bitmap.Save($Path, [System.Drawing.Imaging.ImageFormat]::Png)
  $Bitmap.Dispose()
}

# 1. Trim the source to its opaque bounds and write it back as the canonical logo.
$raw = [System.Drawing.Bitmap]::new($sourcePath)
$bounds = Get-OpaqueBounds $raw
$mark = $raw.Clone($bounds, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)
$raw.Dispose()
if ($bounds.Width -ne $mark.Width -or $bounds.X -ne 0 -or $bounds.Y -ne 0) {
  $mark.Save($sourcePath, [System.Drawing.Imaging.ImageFormat]::Png)
}
Write-Output "Trimmed mark: $($mark.Width)x$($mark.Height)"

# 2. Header / UI mark: transparent, 256px tall.
$uiHeight = 256
$uiWidth = [Math]::Round($uiHeight * $mark.Width / $mark.Height)
$ui, $uiGraphics = New-Canvas $uiWidth $uiHeight ([System.Drawing.Color]::Transparent)
$uiGraphics.DrawImage($mark, [System.Drawing.Rectangle]::new(0, 0, $uiWidth, $uiHeight), 0, 0, $mark.Width, $mark.Height, [System.Drawing.GraphicsUnit]::Pixel)
$uiGraphics.Dispose()
Save-Png $ui (Join-Path $projectRoot "public/brand/sumnora-mark.png")

# 3. favicon.ico: transparent, mark fills 94% of the box.
$iconImages = foreach ($size in @(16, 32, 48, 256)) {
  $bitmap = New-SquareIcon $size 0.94 ([System.Drawing.Color]::Transparent)
  $bytes = Get-PngBytes $bitmap
  $bitmap.Dispose()
  [PSCustomObject]@{ Size = $size; Bytes = [byte[]]$bytes }
}

$faviconStream = [System.IO.File]::Open((Join-Path $projectRoot "src/app/favicon.ico"), [System.IO.FileMode]::Create)
$writer = [System.IO.BinaryWriter]::new($faviconStream)
$writer.Write([uint16]0)
$writer.Write([uint16]1)
$writer.Write([uint16]$iconImages.Count)
$offset = 6 + (16 * $iconImages.Count)
foreach ($image in $iconImages) {
  $dimension = if ($image.Size -eq 256) { 0 } else { $image.Size }
  $writer.Write([byte]$dimension)
  $writer.Write([byte]$dimension)
  $writer.Write([byte]0)
  $writer.Write([byte]0)
  $writer.Write([uint16]1)
  $writer.Write([uint16]32)
  $writer.Write([uint32]$image.Bytes.Length)
  $writer.Write([uint32]$offset)
  $offset += $image.Bytes.Length
}
foreach ($image in $iconImages) { $writer.Write([byte[]]$image.Bytes) }
$writer.Dispose()
$faviconStream.Dispose()

# 4. Apple touch + PWA icons: ivory tile (iOS renders transparency as black), mark at 76%.
Save-Png (New-SquareIcon 180 0.76 $ivory) (Join-Path $projectRoot "src/app/apple-icon.png")
Save-Png (New-SquareIcon 192 0.76 $ivory) (Join-Path $projectRoot "public/brand/sumnora-icon-192.png")
Save-Png (New-SquareIcon 512 0.76 $ivory) (Join-Path $projectRoot "public/brand/sumnora-icon-512.png")

$mark.Dispose()
Write-Output "Generated sumnora-mark.png, favicon.ico, apple-icon.png, and PWA icons."
