"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const links = [
    { href: "/dashboard", label: "Dashboard" },
    { href: "/quote", label: "Generate Quote" },
    { href: "/history", label: "History" },
  ];

  return (
    <div style={{ display: "flex", minHeight: "100vh", background: "#f8fafc" }}>
      <aside
        style={{
          width: "240px",
          padding: "24px 20px",
          borderRight: "1px solid #e5e7eb",
          background: "#ffffff",
        }}
      >
        <h2 style={{ margin: "0 0 24px", fontSize: "1.25rem" }}>QuickQuo</h2>

        <nav style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          {links.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                style={{
                  padding: "10px 12px",
                  borderRadius: 8,
                  textDecoration: "none",
                  color: isActive ? "#2563eb" : "#374151",
                  background: isActive ? "#eff6ff" : "transparent",
                  fontWeight: isActive ? 600 : 500,
                }}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
      </aside>

      <main style={{ flex: 1, padding: "24px 32px" }}>
        <div style={{ maxWidth: 960, margin: "0 auto" }}>{children}</div>
      </main>
    </div>
  );
}
