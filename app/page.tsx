"use client";

import Link from "next/link";

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
max-w-3xl
text-center
">

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
max-w-2xl
mx-auto
">

AI-powered professional quoting platform.

</p>

<div className="
mt-12
flex
justify-center
">

<Link
href="/signup"
className="
bg-gradient-to-r
from-violet-600
to-teal-500
px-10
py-5
rounded-xl
font-semibold
"
>
Create Account
</Link>

</div>

</div>

</main>

)

}
