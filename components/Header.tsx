type HeaderProps = {
  title: string;
  subtitle?: string;
};

export default function Header({ title, subtitle }: HeaderProps) {
  return (
    <header className="mb-6">
      <h1 className="text-2xl font-semibold">{title}</h1>
      {subtitle ? <p className="mt-1 text-sm text-slate-900">{subtitle}</p> : null}
    </header>
  );
}
