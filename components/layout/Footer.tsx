export default function Footer() {
  return (
    <footer
      className="border-t py-8 px-6"
      style={{ borderColor: "var(--border)", background: "var(--bg-subtle)" }}
    >
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="font-mono text-xs tracking-wider" style={{ color: "var(--text-muted)" }}>
          Fabian Madriz{" "}
          <span style={{ color: "var(--accent)" }}>●</span>{" "}
          Computer Systems Engineer
        </p>
        <p className="font-mono text-xs" style={{ color: "var(--text-muted)" }}>
          Built with Next.js · Tailwind CSS
        </p>
      </div>
    </footer>
  );
}
