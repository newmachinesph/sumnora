// TEMPORARY: Hostinger's process limit counts every thread of the account's user across all its sites. Thirty seconds
// after start this logs each process of that user with its thread count, once, to the runtime log. Remove when read.
export async function register() {
  if (process.env.NEXT_RUNTIME !== "nodejs" || process.platform !== "linux") return;
  const { readdirSync, readFileSync } = await import("node:fs");
  const timer = setTimeout(() => {
    const uid = process.getuid?.();
    const rows: { pid: string; threads: number; cmd: string }[] = [];
    for (const pid of readdirSync("/proc").filter((d) => /^\d+$/.test(d))) {
      try {
        const status = readFileSync(`/proc/${pid}/status`, "utf8");
        if (!new RegExp(`^Uid:\\s+${uid}\\b`, "m").test(status)) continue;
        const threads = Number(/^Threads:\s+(\d+)/m.exec(status)?.[1] ?? 0);
        const cmd = readFileSync(`/proc/${pid}/cmdline`, "utf8").replace(/\0/g, " ").trim().slice(0, 140);
        rows.push({ pid, threads, cmd });
      } catch {
        // the process exited while being read
      }
    }
    const total = rows.reduce((n, r) => n + r.threads, 0);
    console.log(`proc-audit self=${process.pid} processes=${rows.length} threads=${total} ${JSON.stringify(rows)}`);
  }, 30_000);
  timer.unref();
}
