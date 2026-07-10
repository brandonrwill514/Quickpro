"use client";

import { useState } from "react";
import { Mic, Sparkles, FileText, Upload, Send } from "lucide-react";

export default function WorkspacePage() {

  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);
  const [analysis, setAnalysis] = useState("");

  async function analyzeJob() {

    setLoading(true);

    try {

      const response = await fetch("/api/extract-job", {
        method: "POST",
        headers:{
          "Content-Type":"application/json"
        },
        body: JSON.stringify({
          description
        })
      });

      const data = await response.json();

      if(data.summary){

        setAnalysis(data.summary);

      } else {

        setAnalysis(
          "AI analysis unavailable. Add OpenAI billing to activate."
        );

      }

    } catch(error){

      setAnalysis(
        "Unable to analyze project."
      );

    }

    setLoading(false);

  }

return (

<main className="
min-h-screen
bg-zinc-950
text-white
p-8
">

<div className="
max-w-7xl
mx-auto
">

{/* HEADER */}

<div className="mb-10">

<h1 className="
text-4xl
font-bold
tracking-tight
">

AI Professional Quotes

</h1>

<p className="
text-zinc-400
mt-3
text-lg
">

Create accurate contractor estimates
using AI.

</p>

</div>

"use client";

import { useState } from "react";
import { Mic, Sparkles, FileText, Upload, Send } from "lucide-react";


export default function WorkspacePage() {

  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);
  const [analysis, setAnalysis] = useState("");


  async function analyzeJob() {

    setLoading(true);

    try {

      const response = await fetch("/api/extract-job", {
        method: "POST",
        headers:{
          "Content-Type":"application/json"
        },
        body: JSON.stringify({
          description
        })
      });


      const data = await response.json();


      if(data.summary){

        setAnalysis(data.summary);

      } else {

        setAnalysis(
          "AI analysis unavailable. Add OpenAI billing to activate."
        );

      }


    } catch(error){

      setAnalysis(
        "Unable to analyze project."
      );

    }


    setLoading(false);

  }



return (

<main className="
min-h-screen
bg-zinc-950
text-white
p-8
">


<div className="
max-w-7xl
mx-auto
">


{/* HEADER */}

<div className="mb-10">

<h1 className="
text-4xl
font-bold
tracking-tight
">

AI Professional Quotes

</h1>


<p className="
text-zinc-400
mt-3
text-lg
">

Create accurate contractor estimates
using AI.

</p>

</div>



{/* WORKSPACE GRID */}

<div className="
grid
grid-cols-1
lg:grid-cols-2
gap-8
">



{/* INPUT PANEL */}

<section className="
bg-zinc-900
border
border-zinc-800
rounded-3xl
p-8
">


<h2 className="
text-xl
font-semibold
mb-6
">

Create Quote

</h2>



<button
className="
w-full
bg-teal-500
hover:bg-teal-400
rounded-2xl
py-6
text-xl
font-semibold
flex
items-center
justify-center
gap-3
shadow-lg
shadow-teal-500/30
transition
">

<Mic />

Speak Your Project

</button>




<div className="
flex
items-center
gap-4
my-8
text-zinc-500
">

<div className="
h-px
bg-zinc-700
flex-1
"/>

OR

<div className="
h-px
bg-zinc-700
flex-1
"/>

</div>




<textarea

value={description}

onChange={(e)=>setDescription(e.target.value)}

placeholder="
Example:
Install 12 pot lights in a finished basement with new wiring...
"

className="
w-full
h-48
bg-zinc-950
border
border-zinc-700
rounded-2xl
p-5
resize-none
focus:outline-none
focus:border-violet-500
"

/
/

<button

onClick={analyzeJob}

disabled={loading}

className="
mt-6
w-full
bg-violet-600
hover:bg-violet-500
rounded-xl
py-4
font-semibold
transition
flex
justify-center
gap-2
"

>

<Sparkles/>

{loading ? 
"Analyzing..." 
:
"Analyze Job"
}


</button>



<button

className="
mt-4
w-full
border
border-zinc-700
rounded-xl
py-4
text-zinc-300
hover:bg-zinc-800
flex
justify-center
gap-2
"

>

<Upload/>

Upload Photos

</button>



</section>






{/* AI RESULTS */}

<section className="
bg-zinc-900
border
border-zinc-800
rounded-3xl
p-8
">


<div className="
flex
items-center
gap-3
mb-6
">

<Sparkles className="text-teal-400"/>


<h2 className="
text-xl
font-semibold
">

AI Analysis

</h2>


</div>




<div className="
space-y-5
">


<div className="
bg-zinc-950
rounded-2xl
p-5
border
border-zinc-800
">

<p className="
text-zinc-400
text-sm
">

Project Analysis

</p>


<p className="
mt-3
whitespace-pre-line
">

{
analysis ||
"Your AI-generated quote analysis will appear here."
}

</p>


</div>





<div className="
grid
grid-cols-2
gap-5
">


<div className="
bg-zinc-950
rounded-2xl
p-5
">

<p className="text-zinc-400">

Materials

</p>

<h3 className="text-2xl font-bold mt-2">

$0

</h3>

</div>




<div className="
bg-zinc-950
rounded-2xl
p-5
">

<p className="text-zinc-400">

Profit Margin

</p>

<h3 className="
text-2xl
font-bold
mt-2
text-teal-400
">

0%

</h3>


</div>


</div>





<button

className="
w-full
mt-5
bg-violet-600
rounded-xl
py-4
font-semibold
flex
justify-center
gap-3
"

>

<FileText/>

Generate Professional Quote

</button>



</div>



</section>




</div>

</div>


</main>

);

}
