import "./globals.css";
import Link from "next/link";
import {
  LayoutDashboard,
  Sparkles,
  History,
  Settings,
  Home,
  UserPlus
} from "lucide-react";

export const metadata = {
  title: "QuickQuo",
  description: "AI powered professional quoting platform",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <html lang="en">

      <body className="bg-zinc-950 text-white">

        <div className="flex min-h-screen">

          {/* SIDEBAR */}

          <aside className="
            w-72
            flex
            flex-col
            bg-zinc-900
            border-r
            border-zinc-800
            p-6
          ">

            <h1 className="
              text-3xl
              font-bold
              mb-10
              bg-gradient-to-r
              from-violet-400
              to-teal-400
              bg-clip-text
              text-transparent
            ">
              QuickQuo
            </h1>

            <nav className="space-y-3">

              <Link
                href="/"
                className="
                  flex
                  items-center
                  gap-3
                  p-3
                  rounded-xl
                  hover:bg-zinc-800
                  transition
                "
              >
                <Home size={20}/>
                Return Home
              </Link>

              <Link
                href="/dashboard"
                className="
                  flex
                  items-center
                  gap-3
                  p-3
                  rounded-xl
                  hover:bg-zinc-800
                  transition
                "
              >
                <LayoutDashboard size={20}/>
                Dashboard
              </Link>

              <Link
                href="/ai-quotes"
                className="
                  flex
                  items-center
                  gap-3
                  p-3
                  rounded-xl
                  hover:bg-zinc-800
                  transition
                "
              >
                <Sparkles size={20}/>
                AI Professional Quotes
              </Link>

              <Link
                href="/quote-history"
                className="
                  flex
                  items-center
                  gap-3
                  p-3
                  rounded-xl
                  hover:bg-zinc-800
                  transition
                "
              >
                <History size={20}/>
                Quote History
              </Link>

              <Link
                href="/settings"
                className="
                  flex
                  items-center
                  gap-3
                  p-3
                  rounded-xl
                  hover:bg-zinc-800
                  transition
                "
              >
                <Settings size={20}/>
                Settings
              </Link>

            </nav>

            <div className="
              mt-auto
              pt-8
              border-t
              border-zinc-800
            ">

            <Link
            href="/signup"
            className="
            flex
            items-center
            gap-3
            p-3
            rounded-xl
            bg-gradient-to-r
            from-violet-600
            to-teal-500
            font-semibold
            hover:scale-105
            transition
            "
            >

            <UserPlus size={20}/>

            Create Account

            </Link>

            </div>

          </aside>

          {/* PAGE CONTENT */}

          <main className="
            flex-1
            p-8
          ">

            {children}

          </main>

        </div>

      </body>

    </html>
  );
}
