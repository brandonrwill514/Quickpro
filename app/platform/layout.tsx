import Link from "next/link";

import {
Home,
LayoutDashboard,
Sparkles,
History,
Settings
} from "lucide-react";

export default function PlatformLayout({
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

<nav className="space-y-3">

<Link href="/platform">
<Home/>
Welcome
</Link>

<Link href="/platform/dashboard">
<LayoutDashboard/>
Dashboard
</Link>

<Link href="/platform/ai-quotes">
<Sparkles/>
AI Professional Quotes
</Link>

<Link href="/platform/quote-history">
<History/>
Quote History
</Link>

<Link href="/platform/settings">
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
