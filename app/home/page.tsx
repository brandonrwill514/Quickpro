"use client";

import Link from "next/link";
import {
  LayoutDashboard,
  Sparkles,
  History,
  Settings,
  ArrowRight
} from "lucide-react";

export default function HomePage(){

return (

<div>

<h1 className="
text-5xl
font-bold
">
Welcome to QuickQuo
</h1>

<p className="
text-zinc-400
mt-3
text-lg
">
Your AI-powered workspace for creating professional quotes faster.
</p>

<div className="
grid
md:grid-cols-2
gap-6
mt-10
">

<Card

href="/workspace/dashboard"

icon={<LayoutDashboard/>}

title="Dashboard"

description="Track business performance and analytics."

/>

<Card

href="/workspace/ai-quotes"

icon={<Sparkles/>}

title="AI Professional Quotes"

description="Create accurate professional quotes with AI."

/>

<Card

href="/workspace/quote-history"

icon={<History/>}

title="Quote History"

description="View and manage previous quotes."

/>

<Card

href="/workspace/settings"

icon={<Settings/>}

title="Settings"

description="Manage your business profile and preferences."

/>

</div>

</div>

)

}

function Card({
href,
icon,
title,
description
}:{
href:string;
icon:React.ReactNode;
title:string;
description:string;
}){

return (

<Link

href={href}

className="
bg-zinc-900
border
border-zinc-800
rounded-3xl
p-8
hover:border-violet-500
transition
block
"

>

<div className="
text-violet-400
mb-5
">

{icon}

</div>

<h2 className="
text-2xl
font-semibold
mb-3
">

{title}

</h2>

<p className="
text-zinc-400
mb-5
">

{description}

</p>

<div className="
flex
items-center
gap-2
text-violet-400
">

Open

<ArrowRight size={18}/>

</div>

</Link>

)

}