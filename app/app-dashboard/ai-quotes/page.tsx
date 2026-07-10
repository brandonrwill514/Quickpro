"use client";

import { Mic } from "lucide-react";

export default function AIQuotesPage(){

return (

<div>

<h1 className="
text-4xl
font-bold
">
AI Professional Quotes
</h1>

<p className="
text-zinc-400
mt-2
mb-8
">
Create accurate professional quotes using AI.
</p>

<div className="
bg-zinc-900
border
border-zinc-800
rounded-3xl
p-8
max-w-4xl
">

<label>
Describe your project
</label>

<textarea

className="
w-full
mt-4
bg-zinc-950
border
border-zinc-700
rounded-xl
p-5
h-48
"

placeholder="
Example:
Install a 200 amp electrical panel upgrade...
"

/>

<button

className="
mt-5
flex
items-center
gap-3
bg-gradient-to-r
from-violet-600
to-teal-500
px-8
py-4
rounded-xl
font-semibold
"

>

<Mic/>

Speak Project

</button>

</div>

</div>

)

}
