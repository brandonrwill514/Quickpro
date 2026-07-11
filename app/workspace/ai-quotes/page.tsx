"use client";

import { useEffect, useState } from "react";
import { Mic } from "lucide-react";
import { createClient } from "@/lib/supabase/client";

type Profile = {
	business_name?: string | null;
	industry?: string | null;
	hourly_rate?: string | null;
	markup_percentage?: string | null;
	quote_style?: string | null;
};

export default function AIQuotesPage(){
const [supabase] = useState(() => createClient());
const [description, setDescription] = useState("");
const [profile, setProfile] = useState<Profile | null>(null);
const [generatedQuote, setGeneratedQuote] = useState("");
const [loading, setLoading] = useState(false);

useEffect(() => {
async function loadProfile() {
const {
data: profile
} = await supabase
.from("profiles")
.select("*")
.single();

setProfile(profile);
}

void loadProfile();
}, [supabase]);

const prompt = `You are creating a professional quote for this company.

Business:
${profile?.business_name ?? ""}

Industry:
${profile?.industry ?? ""}

Hourly Rate:
$${profile?.hourly_rate ?? ""}

Markup:
${profile?.markup_percentage ?? ""}%

Quote Style:
${profile?.quote_style ?? ""}

Project Details:

${description}

Create a professional customer-ready quote.`;

async function generateQuote() {
setLoading(true);

try {
const response = await fetch("/api/generate-quote", {
method: "POST",
headers: {
"Content-Type": "application/json"
},
body: JSON.stringify({
summary: prompt
})
});

const data = await response.json();

setGeneratedQuote(JSON.stringify(data, null, 2));
} catch (error) {
console.error(error);
setGeneratedQuote("Unable to generate quote.");
}

setLoading(false);
}

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

<p className="mb-6 text-sm text-zinc-500">
Using profile: {profile?.business_name || "No saved profile found"}
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

value={description}

onChange={(e)=>setDescription(e.target.value)}

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

onClick={()=>void generateQuote()}

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
{loading ? "Generating..." : "Generate Quote"}
Speak Project


<div className="mt-6 rounded-2xl border border-zinc-800 bg-zinc-950 p-5">
<p className="mb-3 text-sm font-semibold text-zinc-300">
AI Prompt
</p>

<pre className="whitespace-pre-wrap text-sm text-zinc-400">
{prompt}
</pre>
</div>

{generatedQuote ? (
<div className="mt-6 rounded-2xl border border-zinc-800 bg-zinc-950 p-5">
<p className="mb-3 text-sm font-semibold text-zinc-300">
Generated Quote
</p>

<pre className="whitespace-pre-wrap text-sm text-zinc-400">
{generatedQuote}
</pre>
</div>
) : null}
</button>

</div>

</div>

)

}
