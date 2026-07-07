import { Mic, FileText, Zap } from "lucide-react";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="px-8 py-24 text-center">
        <h1 className="text-6xl font-bold tracking-tight">
          Stop Guessing.
          <br />
          Start Quoting Smarter.
        </h1>

        <p className="mt-6 text-xl text-gray-600 max-w-2xl mx-auto">
          QuickQuo uses AI to turn job descriptions into professional estimates for contractors in seconds.
        </p>

        <div className="mt-10 flex justify-center gap-4">
          <button className="rounded-xl bg-black px-8 py-4 text-white">Start Free</button>
          <button className="rounded-xl border px-8 py-4">Watch Demo</button>
        </div>

        <div className="mt-12 flex justify-center">
          <img src="/dashboard.png" className="rounded-2xl shadow-xl max-w-4xl w-full" alt="QuickQuo dashboard preview" />
        </div>
      </section>

      <section className="grid md:grid-cols-3 gap-8 px-8 py-20">
        <Feature icon={<Mic />} title="Voice AI" text="Describe the job naturally and let AI structure the estimate." />
        <Feature icon={<FileText />} title="Professional Quotes" text="Generate clear client-ready proposals instantly." />
        <Feature icon={<Zap />} title="Save Hours" text="Spend less time estimating and more time working." />
      </section>
    </main>
  );
}

function Feature({ icon, title, text }: { icon: React.ReactNode; title: string; text: string }) {
  return (
    <div className="rounded-2xl border p-8">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="mt-3 text-gray-600">{text}</p>
    </div>
  );
}
