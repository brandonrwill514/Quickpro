import Link from "next/link";
import {
Home,
LayoutDashboard,
Sparkles,
History,
Settings
} from "lucide-react";

export default function WorkspaceLayout({
children
}:{
children:React.ReactNode
}){

return (

<div className="
flex
min-h-screen
bg-zinc-950
text-white
">

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

<nav className="space-y-4">

<Link href="/workspace" className="flex items-center gap-3 rounded-xl p-3 hover:bg-zinc-800 transition">
<Home size={20}/>
Home
</Link>

<Link href="/dashboard" className="flex items-center gap-3 rounded-xl p-3 hover:bg-zinc-800 transition">
<LayoutDashboard size={20}/>
Dashboard
</Link>

<Link href="/ai-quotes" className="flex items-center gap-3 rounded-xl p-3 hover:bg-zinc-800 transition">
<Sparkles size={20}/>
AI Professional Quotes
</Link>

<Link href="/quote-history" className="flex items-center gap-3 rounded-xl p-3 hover:bg-zinc-800 transition">
<History size={20}/>
Quote History
</Link>

<Link href="/settings" className="flex items-center gap-3 rounded-xl p-3 hover:bg-zinc-800 transition">
<Settings size={20}/>
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