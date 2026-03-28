import Link from "next/link";

export default function NotFound() {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", minHeight: "100vh", padding: "2rem" }}>
      <h2 style={{ fontSize: "2rem", marginBottom: "0.5rem" }}>404</h2>
      <p style={{ color: "#64748B", marginBottom: "1.5rem" }}>Siden ble ikke funnet</p>
      <Link
        href="/"
        style={{ padding: "0.75rem 1.5rem", backgroundColor: "#2563EB", color: "#fff", borderRadius: "0.5rem", textDecoration: "none", fontSize: "1rem", fontWeight: 600 }}
      >
        G\u00E5 til forsiden
      </Link>
    </div>
  );
}
