"use client";

import Link from "next/link";
import {
  LayoutDashboard,
  FileText,
  Mic,
  History,
  Settings,
} from "lucide-react";

const items = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Generate Quote",
    href: "/quote",
    icon: Mic,
  },
  {
    title: "History",
    href: "/history",
    icon: History,
  },
  {
    title: "Settings",
    href: "/settings",
    icon: Settings,
  },
];

export default function Sidebar() {
  return (
    <aside className="min-h-screen w-72 bg-zinc-950 p-6 text-zinc-50">
      <h1 className="mb-10 text-3xl font-bold">
        <span className="text-violet-500">⚡</span> QuickQuo
      </h1>

      <nav className="space-y-3">
        {items.map((item) => {
          const Icon = item.icon;

          return (
            <Link
              key={item.href}
              href={item.href}
              className="flex items-center gap-3 rounded-xl px-4 py-3 transition hover:bg-violet-500/10 hover:text-violet-300"
            >
              <Icon size={20} />
              {item.title}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
