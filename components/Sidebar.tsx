"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  FileText,
  Mic,
  History,
  BarChart3,
  Settings,
} from "lucide-react";

const items = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "AI Quote",
    href: "/quote",
    icon: Mic,
  },
  {
    title: "History",
    href: "/history",
    icon: History,
  },
  {
    title: "Analytics",
    href: "/dashboard#analytics",
    icon: BarChart3,
  },
  {
    title: "Settings",
    href: "/settings",
    icon: Settings,
  },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="min-h-screen w-72 rounded-3xl border border-zinc-800 bg-zinc-900 p-6 text-zinc-50 shadow-xl shadow-black/20">
      <h1 className="mb-10 text-3xl font-bold">
        <span className="text-violet-500">⚡</span> QuickQuo
      </h1>

      <nav className="space-y-3">
        {items.map((item) => {
          const Icon = item.icon;
          const isActive = item.title !== "Analytics" && pathname === item.href;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 rounded-xl px-4 py-3 transition ${isActive ? "bg-violet-600/20 text-violet-400" : "text-zinc-300 hover:bg-zinc-800 hover:text-white"}`}
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
