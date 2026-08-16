const checks = [
  "Local file selection",
  "Font analysis",
  "Layer inspection",
  "Dimension check",
  "Line type check",
];

export default function QualityCheck() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-16">
      <div className="mx-auto max-w-xl rounded-2xl border border-neutral-800 bg-neutral-900/70 p-6">
        <p className="mb-2 text-sm font-semibold tracking-[0.25em] text-cyan-400">
          MOCK QUALITY PREVIEW
        </p>

        <h2 className="mb-6 text-2xl font-bold">
          Mock Drawing Inspection
        </h2>

        <div className="space-y-3">
          {checks.map((check, index) => (
            <div
              key={check}
              className="flex items-center justify-between rounded-xl border border-neutral-800 bg-neutral-950 px-4 py-3"
            >
              <span className="text-sm text-neutral-300">{check}</span>

              <span
                className={
                  index === 0
                    ? "text-sm text-emerald-400"
                    : "text-sm text-neutral-500"
                }
              >
                {index === 0 ? "Ready" : "Pending"}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
