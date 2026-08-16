"use client";

import { useState } from "react";

type UploadStatus = "idle" | "ready" | "uploading" | "success" | "error";

type AnalyzeDetails = {
  file_type: string;
  layers: number;
  dimensions: number;
  texts: number;
  blocks: number;
  scale: string;
};

type AnalyzeResponse = {
  filename: string;
  size: number;
  analysis: AnalyzeDetails;
};

export default function UploadBox() {
  const [file, setFile] = useState<File | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [status, setStatus] = useState<UploadStatus>("idle");
  const [message, setMessage] = useState("");
  const [analyzeResult, setAnalyzeResult] = useState<AnalyzeResponse | null>(
    null,
  );

  const allowedExtensions = [".vwx", ".dwg", ".dxf", ".pdf", ".jww"];

  function validateAndSetFile(selectedFile: File) {
    const fileName = selectedFile.name.toLowerCase();
    const isAllowed = allowedExtensions.some((ext) => fileName.endsWith(ext));

    if (!isAllowed) {
      setStatus("error");
      setMessage(
        "This mock UI accepts filenames ending in VWX, DWG, DXF, PDF, or JWW for demonstration only.",
      );
      return;
    }

    setFile(selectedFile);
    setStatus("ready");
    setMessage("Mock file ready for local demonstration.");
  }

  function handleFileChange(event: React.ChangeEvent<HTMLInputElement>) {
    const selectedFile = event.target.files?.[0];

    if (!selectedFile) return;

    validateAndSetFile(selectedFile);
  }

  function handleDragOver(event: React.DragEvent<HTMLLabelElement>) {
    event.preventDefault();
    setIsDragging(true);
  }

  function handleDragLeave() {
    setIsDragging(false);
  }

  function handleDrop(event: React.DragEvent<HTMLLabelElement>) {
    event.preventDefault();
    setIsDragging(false);

    const droppedFile = event.dataTransfer.files?.[0];

    if (!droppedFile) return;

    validateAndSetFile(droppedFile);
  }

  async function handleUpload() {
    if (!file) return;

    setStatus("uploading");
    setMessage("Running local mock analysis. No file is uploaded or stored.");
    setAnalyzeResult(null);

    try {
      await new Promise((resolve) => window.setTimeout(resolve, 450));
      setAnalyzeResult({
        filename: file.name,
        size: file.size,
        analysis: {
          file_type: `.${file.name.split(".").pop() ?? "file"}`,
          layers: 12,
          dimensions: 8,
          texts: 24,
          blocks: 6,
          scale: "1:100",
        },
      });
      setStatus("success");
      setMessage(`Mock analysis complete: ${file.name}`);
    } catch {
      setStatus("error");
      setMessage("The local mock analysis could not be completed.");
    }
  }

  return (
    <section className="mx-auto max-w-5xl px-6">
      <label
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        className={`mx-auto mb-6 flex w-full max-w-xl cursor-pointer flex-col items-center justify-center rounded-2xl border border-dashed px-8 py-12 text-center transition ${
          isDragging
            ? "border-cyan-400 bg-cyan-500/10"
            : "border-neutral-700 bg-neutral-900/60 hover:border-cyan-400 hover:bg-neutral-900"
        }`}
      >
        <span className="mb-3 text-4xl">{isDragging ? "📂" : "📄"}</span>

        <span className="text-xl font-semibold">
          {isDragging ? "Drop a Demo File Here" : "Select a Local Demo File"}
        </span>

        <span className="mt-2 text-sm text-neutral-400">
          Drag & drop or click to browse
        </span>

        <span className="mt-1 text-xs text-neutral-500">
          VWX, DWG, DXF, PDF, JWW supported
        </span>

        <input
          type="file"
          className="hidden"
          accept=".vwx,.dwg,.dxf,.pdf,.jww"
          onChange={handleFileChange}
        />
      </label>

      {file && (
        <div className="mx-auto mb-8 w-full max-w-xl rounded-xl border border-neutral-800 bg-neutral-900 p-5 text-left">
          <p className="text-sm text-neutral-400">Selected file</p>

          <p className="mt-1 font-semibold text-white">{file.name}</p>

          <p className="mt-1 text-sm text-neutral-500">
            Size: {(file.size / 1024 / 1024).toFixed(2)} MB
          </p>

          {message && (
            <div
              className={`mt-4 rounded-lg border px-4 py-3 text-sm ${
                status === "success"
                  ? "border-emerald-500/30 bg-emerald-500/10 text-emerald-300"
                  : status === "error"
                    ? "border-red-500/30 bg-red-500/10 text-red-300"
                    : "border-cyan-500/30 bg-cyan-500/10 text-cyan-300"
              }`}
            >
              {message}
            </div>
          )}

          {analyzeResult && (
            <div className="mt-4 rounded-xl border border-neutral-800 bg-black/40 p-5">
              <h3 className="mb-4 text-lg font-bold text-cyan-300">
                📊 Synthetic Mock Preview
              </h3>

              <div className="space-y-3 text-sm">
                <div className="flex justify-between border-b border-neutral-800 pb-2">
                  <span className="text-neutral-400">Filename</span>
                  <span>{analyzeResult.filename}</span>
                </div>

                <div className="flex justify-between border-b border-neutral-800 pb-2">
                  <span className="text-neutral-400">File Type</span>
                  <span>
                    {analyzeResult.analysis.file_type
                      .replace(".", "")
                      .toUpperCase()}
                  </span>
                </div>

                <div className="flex justify-between border-b border-neutral-800 pb-2">
                  <span className="text-neutral-400">File Size</span>
                  <span>
                    {(analyzeResult.size / 1024 / 1024).toFixed(2)} MB
                  </span>
                </div>

                <div className="flex justify-between">
                  <span className="text-neutral-400">Layers</span>
                  <span>{analyzeResult.analysis.layers}</span>
                </div>

                <div className="flex justify-between">
                  <span className="text-neutral-400">Dimensions</span>
                  <span>{analyzeResult.analysis.dimensions}</span>
                </div>

                <div className="flex justify-between">
                  <span className="text-neutral-400">Texts</span>
                  <span>{analyzeResult.analysis.texts}</span>
                </div>

                <div className="flex justify-between">
                  <span className="text-neutral-400">Blocks</span>
                  <span>{analyzeResult.analysis.blocks}</span>
                </div>

                <div className="flex justify-between">
                  <span className="text-neutral-400">Scale</span>
                  <span>{analyzeResult.analysis.scale}</span>
                </div>
              </div>
            </div>
          )}

          <button
            onClick={handleUpload}
            disabled={status === "uploading"}
            className="mt-5 w-full rounded-xl bg-cyan-500 px-6 py-3 font-semibold text-black transition hover:bg-cyan-400 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {status === "uploading" ? "Generating Demo..." : "Run Local Mock Preview"}
          </button>
        </div>
      )}
    </section>
  );
}
