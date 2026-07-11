"use client";

import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Sparkles,
  LayoutDashboard,
  FileText
} from "lucide-react";

export default function WelcomePage() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white flex items-center justify-center px-6">

      <div className="max-w-5xl w-full">

        {/* Header */}

        <div className="text-center mb-14">

          <div className="inline-flex items-center gap-2 bg-violet-500/10 text-violet-300 px-5 py-2 rounded-full mb-6">
            <Sparkles size={18} />
            Welcome
          </div>

          <h1 className="text-6xl font-bold mb-5 bg-gradient-to-r from-violet-400 to-teal-400 bg-clip-text text-transparent">
            Welcome to QuickQuo
          </h1>

          <p className="text-zinc-400 text-xl max-w-2xl mx-auto">
            Your account has been created successfully.
            You're ready to start generating professional AI-powered quotes in minutes.
          </p>

        </div>

        {/* Status */}

        <div className="grid md:grid-cols-3 gap-6 mb-10">

          <StatusCard
            title="Account Created"
            description="Your QuickQuo account is active."
          />

          <StatusCard
            title="Business Profile"
            description="Your company information is saved."
          />

          <StatusCard
            title="AI Ready"
            description="You're ready to generate professional quotes."
          />

        </div>

        {/* Platform Preview */}

        <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-10 mb-10">

          <h2 className="text-3xl font-bold mb-8">
            Inside Your Workspace
          </h2>

          <div className="grid md:grid-cols-2 gap-8">

            <FeatureCard
              icon={<LayoutDashboard size={28} />}
              title="Dashboard"
              text="Track revenue, quote performance and business insights."
            />

            <FeatureCard
              icon={<Sparkles size={28} />}
              title="AI Professional Quotes"
              text="Generate professional quotes using AI and voice input."
            />

            <FeatureCard
              icon={<FileText size={28} />}
              title="Quote History"
              text="Access every quote you've created."
            />

            <FeatureCard
              icon={<CheckCircle2 size={28} />}
              title="Business Settings"
              text="Manage your company profile and AI preferences."
            />

          </div>

        </div>

        {/* Enter Platform */}

        <div className="text-center">

          <Link
            href="/home"
            className="
              inline-flex
              items-center
              gap-3
              bg-gradient-to-r
              from-violet-600
              to-teal-500
              px-10
              py-5
              rounded-2xl
              text-lg
              font-semibold
              hover:scale-105
              transition
            "
          >
            Enter QuickQuo
            <ArrowRight size={22} />
          </Link>

        </div>

      </div>

    </main>
  );
}

function StatusCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
      <div className="flex items-center gap-3 mb-4">
        <CheckCircle2 className="text-green-400" />
        <h3 className="font-semibold text-lg">{title}</h3>
      </div>

      <p className="text-zinc-400">
        {description}
      </p>
    </div>
  );
}

function FeatureCard({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
}) {
  return (
    <div className="bg-zinc-950 border border-zinc-800 rounded-2xl p-6">

      <div className="text-violet-400 mb-4">
        {icon}
      </div>

      <h3 className="text-xl font-semibold mb-3">
        {title}
      </h3>

      <p className="text-zinc-400">
        {text}
      </p>

    </div>
  );
}
