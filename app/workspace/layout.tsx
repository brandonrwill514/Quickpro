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
}) {

return (

<div className="
flex
min-h-screen
bg-zinc-950
text-white
">

{/* SIDEBAR */}

<aside className="
w-72
bg-zinc-900
border-r
border-zinc-800
p-6
">

<Link href="/workspace">

<h1 className="
text-3xl
font-bold
mb-10
cursor-pointer
">
QuickQuo
</h1>

</Link>

<nav className="space-y-3">

<Link
href="/workspace"
className="nav-link"
>
<Home size={20}/>
Home
</Link>

<Link
href="/workspace/dashboard"
className="nav-link"
>
<LayoutDashboard size={20}/>
Dashboard
</Link>

<Link
href="/workspace/ai-quotes"
className="nav-link"
>
<Sparkles size={20}/>
AI Professional Quotes
</Link>

<Link
href="/workspace/quote-history"
className="nav-link"
>
<History size={20}/>
Quote History
</Link>

<Link
href="/workspace/settings"
className="nav-link"
>
<Settings size={20}/>
Settings
</Link>

</nav>

</aside>

{/* PAGE CONTENT */}

<main className="
flex-1
p-10
">

{children}

</main>

</div>

)

}