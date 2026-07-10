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
bg-white
rounded-2xl
border
p-6
shadow-sm
">
      <p className="text-gray-500">
        {title}
      </p>

      <h2 className="
text-4xl
font-bold
mt-3
">
        {value}
      </h2>

      <p className="
text-sm
text-gray-500
mt-2
">
        {description}
      </p>
    </div>
  );
}
