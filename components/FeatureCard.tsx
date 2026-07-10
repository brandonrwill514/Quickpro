type FeatureCardProps = {
  title: string;
  description: string;
};

export default function FeatureCard({ title, description }: FeatureCardProps) {
  return (
    <article className="rounded-2xl border border-white/10 bg-zinc-900 p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-xl hover:shadow-black/30">
      <h3 className="text-lg font-semibold text-zinc-50">{title}</h3>
      <p className="mt-2 text-sm text-zinc-400">{description}</p>
    </article>
  );
}
