"use client";

import { UserPlus } from "lucide-react";
import { useRouter } from "next/navigation";

export default function SignupPage(){
	const router = useRouter();

return (

<div className="
max-w-xl
mx-auto
">

<h1 className="
text-4xl
font-bold
mb-3
">
Create Your Account
</h1>

<p className="
text-zinc-400
mb-8
">
Start creating professional AI-powered quotes.
</p>

<div className="
bg-zinc-900
border
border-zinc-800
rounded-3xl
p-8
space-y-5
">

<input

placeholder="Full Name"

className="
w-full
bg-zinc-950
border
border-zinc-700
rounded-xl
p-4
"

/>

<input

placeholder="Email"

className="
w-full
bg-zinc-950
border
border-zinc-700
rounded-xl
p-4
"

/>

<input

placeholder="Password"

type="password"

className="
w-full
bg-zinc-950
border
border-zinc-700
rounded-xl
p-4
"

/>

<button
onClick={() => {
localStorage.removeItem("quickquoProfileComplete");
router.push("/profile-setup");
}}

className="
w-full
flex
justify-center
items-center
gap-3
bg-gradient-to-r
from-violet-600
to-teal-500
p-4
rounded-xl
font-semibold
"

>

<UserPlus/>

Create Account

</button>

</div>

</div>

)

}
