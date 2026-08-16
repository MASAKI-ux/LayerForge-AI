export default function Hero() {
  return (
    <section className="mx-auto flex max-w-5xl flex-col items-center justify-center px-6 pt-24 text-center">
      <p className="mb-4 text-sm font-semibold tracking-[0.3em] text-cyan-400">
        PUBLIC PORTFOLIO DEMO
      </p>

      <h1 className="mb-6 text-5xl font-bold tracking-tight md:text-7xl">
        LayerForge AI（開発中）
      </h1>

      <p className="mb-10 max-w-2xl text-lg text-neutral-400 md:text-xl">
        A mock-only interface demonstrating a proposed AI-assisted drawing review workflow.
        No AI model or CAD parser runs in this repository.
      </p>
    </section>
  );
}
