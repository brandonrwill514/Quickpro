type PageHeaderProps = {
  title: string;
  subtitle?: string;
  action?: React.ReactNode;
};

export default function PageHeader({ title, subtitle, action }: PageHeaderProps) {
  return (
    <header className="mb-8 flex flex-col gap-4 border-b border-zinc-800 pb-6 lg:flex-row lg:items-end lg:justify-between">
      <div>
        <p className="mb-2 text-sm font-semibold uppercase tracking-[0.28em] text-violet-400">
          QUICKQUO
        </p>
        <h1 className="text-4xl font-bold tracking-tight text-white">{title}</h1>
        {subtitle ? <p className="mt-3 max-w-2xl text-zinc-400">{subtitle}</p> : null}
      </div>

      {action ? <div>{action}</div> : null}
    </header>
  );
}