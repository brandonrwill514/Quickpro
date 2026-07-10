"use client";

import { useState } from "react";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import { useRouter } from "next/navigation";

export default function ProfileSetupPage() {

  const router = useRouter();

  const [step, setStep] = useState(1);

  const [profile, setProfile] = useState({

    fullName: "",
    phone: "",
    
    businessName: "",
    industry: "",
    address: "",
    website: "",

    hourlyRate: "",
    markup: "",
    taxRate: "",
    quoteExpiration: "",

    quoteStyle: "Professional",
    aiTone: "Friendly"

  });

  function updateField(
    field:string,
    value:string
  ){

    setProfile({
      ...profile,
      [field]:value
    });

  }

  function nextStep(){

    if(step < 5){

      setStep(step + 1);

    } else {

      console.log(profile);

      router.push("/platform");

    }

  }

  function previousStep(){

    if(step > 1){

      setStep(step - 1);

    }

  }

return (

<div className="
max-w-3xl
mx-auto
">

<h1 className="
text-4xl
font-bold
">
Build Your QuickQuo Profile
</h1>

<p className="
text-zinc-400
mt-2
mb-10
">
Set up your business information so AI can create accurate professional quotes.
</p>

{/* Progress */}

<div className="
flex
gap-2
mb-10
">

{
[1,2,3,4,5].map((number)=>(

<div
key={number}
className={`
h-2
flex-1
rounded-full
${
number <= step
? "bg-gradient-to-r from-violet-600 to-teal-500"
: "bg-zinc-800"
}
`}
>

</div>

))
}

</div>

<div className="
bg-zinc-900
border
border-zinc-800
rounded-3xl
p-8
">

{step === 1 && (

<section>

<h2 className="
text-2xl
font-semibold
mb-6
">
Personal Information
</h2>

<Input
label="Full Name"
value={profile.fullName}
onChange={(v)=>updateField("fullName",v)}
/>

<Input
label="Phone Number"
value={profile.phone}
onChange={(v)=>updateField("phone",v)}
/>

</section>

)}

{step === 2 && (

<section>

<h2 className="
text-2xl
font-semibold
mb-6
">
Business Information
</h2>

<Input
label="Business Name"
value={profile.businessName}
onChange={(v)=>updateField("businessName",v)}
/>

<Input
label="Industry"
value={profile.industry}
onChange={(v)=>updateField("industry",v)}
/>

<Input
label="Business Address"
value={profile.address}
onChange={(v)=>updateField("address",v)}
/>

<Input
label="Website"
value={profile.website}
onChange={(v)=>updateField("website",v)}
/>

</section>

)}

{step === 3 && (

<section>

<h2 className="
text-2xl
font-semibold
mb-6
">
Quote Defaults
</h2>

<Input
label="Hourly Rate"
value={profile.hourlyRate}
onChange={(v)=>updateField("hourlyRate",v)}
/>

<Input
label="Markup Percentage"
value={profile.markup}
onChange={(v)=>updateField("markup",v)}
/>

<Input
label="Tax Rate"
value={profile.taxRate}
onChange={(v)=>updateField("taxRate",v)}
/>

<Input
label="Quote Expiration Days"
value={profile.quoteExpiration}
onChange={(v)=>updateField("quoteExpiration",v)}
/>

</section>

)}

{step === 4 && (

<section>

<h2 className="
text-2xl
font-semibold
mb-6
">
AI Preferences
</h2>

<label>
Quote Style
</label>

<select

className="input mt-2"

value={profile.quoteStyle}

onChange={(e)=>
updateField(
"quoteStyle",
e.target.value
)}

>

<option>
Professional
</option>

<option>
Detailed
</option>

<option>
Simple
</option>

</select>

<label className="
block
mt-6
">

AI Communication Tone

</label>

<select

className="input mt-2"

value={profile.aiTone}

onChange={(e)=>
updateField(
"aiTone",
e.target.value
)}

>

<option>
Friendly
</option>

<option>
Formal
</option>

<option>
Technical
</option>

</select>

</section>

)}

{step === 5 && (

<section>

<h2 className="
text-2xl
font-semibold
mb-6
">
Review Profile
</h2>

<div className="
space-y-3
text-zinc-300
">

<p>
Name: {profile.fullName}
</p>

<p>
Business: {profile.businessName}
</p>

<p>
Industry: {profile.industry}
</p>

<p>
Hourly Rate: {profile.hourlyRate}
</p>

<p>
Markup: {profile.markup}%
</p>

<p>
AI Style: {profile.quoteStyle}
</p>

</div>

</section>

)}

<div className="
flex
justify-between
mt-10
">

<button

onClick={previousStep}

disabled={step===1}

className="
flex
items-center
gap-2
bg-zinc-800
px-5
py-3
rounded-xl
"

>

<ArrowLeft/>

Back

</button>

<button

onClick={nextStep}

className="
flex
items-center
gap-2
bg-gradient-to-r
from-violet-600
to-teal-500
px-6
py-3
rounded-xl
font-semibold
"

>

{
step===5
?
<>
<Check/>
Finish
</>
:
<>
Continue
<ArrowRight/>
</>
}

</button>

</div>

</div>

</div>

)

}

function Input({
label,
value,
onChange
}:{
label:string;
value:string;
onChange:(value:string)=>void
}){

return (

<div className="
mb-5
">

<label className="
block
mb-2
text-zinc-300
">

{label}

</label>

<input

value={value}

onChange={(e)=>
onChange(e.target.value)
}

className="
input
"

/>

</div>

)

}
