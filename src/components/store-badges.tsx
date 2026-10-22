/* eslint-disable @next/next/no-img-element -- official store artwork is served as-is, not re-encoded by next/image. */

/** Official "Download on the App Store" and "Get it on Google Play" badges, shown only for the stores a project is in. */
export function StoreBadges({ appStore, googlePlay, name }: { appStore: string | null; googlePlay: string | null; name: string }) {
  if (!appStore && !googlePlay) return null;
  return (
    <div className="store-badges">
      {appStore && (
        <a href={appStore} rel="noopener" target="_blank">
          <img alt={`Download ${name} on the App Store`} height={44} src="/badges/app-store.svg" width={132} />
        </a>
      )}
      {googlePlay && (
        <a href={googlePlay} rel="noopener" target="_blank">
          <img alt={`Get ${name} on Google Play`} height={44} src="/badges/google-play.png" width={148} />
        </a>
      )}
    </div>
  );
}
