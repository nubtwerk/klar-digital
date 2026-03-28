"use client";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="nb">
      <body style={{ fontFamily: "Inter, system-ui, sans-serif", backgroundColor: "#FAFBFC" }}>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", minHeight: "100vh", padding: "2rem" }}>
          <h2 style={{ fontSize: "1.5rem", marginBottom: "1rem" }}>Noe gikk galt</h2>
          <button
            onClick={() => reset()}
            style={{ padding: "0.75rem 1.5rem", backgroundColor: "#2563EB", color: "#fff", border: "none", borderRadius: "0.5rem", cursor: "pointer", fontSize: "1rem" }}
          >
            Prøv igjen
          </button>
        </div>
      </body>
    </html>
  );
}
