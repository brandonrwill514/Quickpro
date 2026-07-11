export default function DashboardPage() {

return (

<div>

<h1 className="
text-4xl
font-bold
">
Dashboard
</h1>

<p className="
text-zinc-400
mt-2
mb-10
">
Business analytics and performance overview
</p>

<div className="
grid
grid-cols-1
md:grid-cols-4
gap-6
">

<Card
title="Quotes Created"
value="32"
/>

<Card
title="Revenue Generated"
value="$84,500"
/>

<Card
title="Average Quote"
value="$2,640"
/>

<Card
title="Time Saved"
value="18 hrs"
/>

</div>

<div className="
mt-10
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
Recent Quote Activity
</h2>

<p className="text-zinc-500">
No quotes created yet.
</p>

</div>

</div>

)

}

function Card({
title,
value
}:{
title:string;
value:string;
}){

return (

<div className="
bg-zinc-900
border
border-zinc-800
rounded-2xl
p-6
">

<p className="text-zinc-400">
{title}
</p>

<p className="
text-4xl
font-bold
mt-3
">
{value}
</p>

</div>

)

}
