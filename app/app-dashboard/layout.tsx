"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
Home,
LayoutDashboard,
Sparkles,
History,
Settings
} from "lucide-react";
import { useRouter } from "next/navigation";

export default function AppLayout({
children
}:{
children:React.ReactNode
}){
  const router = useRouter();
  const [allowed, setAllowed] = useState(false);

  useEffect(() => {
    const completed = localStorage.getItem("quickquoProfileComplete") === "true";

    if (!completed) {
      router.replace("/signup");
      return;
    }

    setAllowed(true);
  }, [router]);

  if (!allowed) {
    return <div className="min-h-screen bg-zinc-950 text-white" />;
  }

return (

<div className="flex min-h-screen bg-zinc-950 text-white">

<aside className="
w-72
bg-zinc-900
border-r
border-zinc-800
p-6
">

<h1 className="
text-3xl
font-bold
mb-10
">
QuickQuo
</h1>

<nav className="space-y-3">

<Link href="/app-dashboard">
<Home/>
Welcome Home
</Link>

<Link href="/app-dashboard/dashboard">
<LayoutDashboard/>
Dashboard
</Link>

<Link href="/app-dashboard/ai-quotes">
<Sparkles/>
AI Professional Quotes
</Link>

<Link href="/app-dashboard/quote-history">
<History/>
Quote History
</Link>

<Link href="/app-dashboard/settings">
<Settings/>
Settings
</Link>

</nav>

</aside>

<main className="
flex-1
p-10
">

{children}

</main>

</div>

)

}
