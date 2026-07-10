interface Props {
  title: string;
  value: string;
  description: string;
}

export default function AnalyticsCard({
  title,
  value,
  description,
}: Props) {
  return (
    <div className="
rounded-2xl
border
border-zinc-800
bg-zinc-900
p-6
shadow-xl
shadow-black/20
">
      <p className="text-sm text-zinc-400">
        {title}
      </p>

      <h2 className="
text-4xl
font-bold
mt-3
text-white
">
        {value}
      </h2>

      <p className="
text-sm
text-zinc-400
mt-2
">
        {description}
      </p>
    </div>
  );
}
