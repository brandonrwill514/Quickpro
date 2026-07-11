"use client";

import Link from "next/link";
import {
  Sparkles,
  Clock,
  FileText,
  ArrowRight
} from "lucide-react";

export default function LandingPage() {

return (

<main className="
min-h-screen
bg-zinc-950
text-white
flex
items-center
justify-center
px-6
">

<div className="
max-w-5xl
text-center
">

<div className="
inline-flex
items-center
gap-2
bg-violet-500/10
text-violet-300
px-5
py-2
rounded-full
mb-8
">

<Sparkles size={18}/>

AI Powered Quoting Platform

</div>

<h1 className="
text-6xl
font-bold
mb-6
">

Welcome to QuickQuo

</h1>

<p className="
text-xl
text-zinc-400
max-w-3xl
mx-auto
">

Create professional quotes faster using AI.
Save time, improve accuracy, and grow your business.

</p>

<div className="
grid
md:grid-cols-3
gap-6
mt-12
">

<Card
icon={<Sparkles/>}
title="AI Quotes"
text="Generate professional estimates instantly."
/>

<Card
icon={<Clock/>}
title="Save Time"
text="Reduce hours spent creating quotes."
/>

<Card
icon={<FileText/>}
title="Professional"
text="Deliver better customer experiences."
/>

</div>

<div className="
mt-12
flex
justify-center
gap-5
">

<Link
href="/signup"
className="
bg-gradient-to-r
from-violet-600
to-teal-500
px-8
py-4
rounded-xl
font-semibold
flex
items-center
gap-2
"
>

Create Account

<ArrowRight size={18}/>

</Link>

<Link
href="/login"
className="
bg-zinc-900
border
border-zinc-700
px-8
py-4
rounded-xl
font-semibold
"
>

Login

</Link>

</div>

</div>

</main>

)

}

function Card({
icon,
title,
text
}:{
icon:React.ReactNode;
title:string;
text:string;
}){

return (

<div className="
bg-zinc-900
border
border-zinc-800
rounded-3xl
p-6
text-left
">

<div className="
text-violet-400
mb-4
">

{icon}

</div>

<h3 className="
font-semibold
text-xl
">

{title}

</h3>

<p className="
text-zinc-400
mt-2
">

{text}

</p>

</div>

)

}
