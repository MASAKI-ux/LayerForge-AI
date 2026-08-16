const formats = [
  {
    name: "VWX",
    description: "Vectorworks",
  },
  {
    name: "DWG",
    description: "AutoCAD Drawing",
  },
  {
    name: "DXF",
    description: "Drawing Exchange",
  },
  {
    name: "PDF",
    description: "Portable Document",
  },
  {
    name: "JWW",
    description: "Jw_cad",
  },
];

export default function SupportedFormats() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <h2 className="mb-10 text-center text-3xl font-bold">
        Demo Input Extensions
      </h2>

      <div className="grid gap-6 md:grid-cols-5">
        {formats.map((format) => (
          <div
            key={format.name}
            className="rounded-2xl border border-neutral-800 bg-neutral-900 p-6 transition hover:border-cyan-400"
          >
            <h3 className="text-xl font-bold">{format.name}</h3>

            <p className="mt-2 text-sm text-neutral-400">
              {format.description}
            </p>
          </div>
        ))}
      </div>
      <p className="mt-6 text-center text-sm text-neutral-500">File extensions accepted by the mock UI only. No file parsing, conversion, or validation is performed.</p>
    </section>
  );
}
