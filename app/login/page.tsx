"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleLogin() {
    setLoading(true);
    setError("");

    const { error: loginError } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (loginError) {
      setError(loginError.message);
      setLoading(false);
      return;
    }

    router.push("/workspace");
  }

  return (
    <div className="mx-auto max-w-xl px-6 py-16">
      <h1 className="mb-3 text-4xl font-bold">Login</h1>
      <p className="mb-8 text-zinc-400">Sign in to continue to your workspace.</p>

      <div className="space-y-5 rounded-3xl border border-zinc-800 bg-zinc-900 p-8">
        <input
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="Email"
          className="w-full rounded-xl border border-zinc-700 bg-zinc-950 p-4"
        />

        <input
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          placeholder="Password"
          type="password"
          className="w-full rounded-xl border border-zinc-700 bg-zinc-950 p-4"
        />

        {error ? <p className="text-sm text-red-400">{error}</p> : null}

        <button
          type="button"
          onClick={() => void handleLogin()}
          className="w-full rounded-xl bg-gradient-to-r from-violet-600 to-teal-500 p-4 font-semibold"
          disabled={loading}
        >
          {loading ? "Signing in..." : "Login"}
        </button>
      </div>
    </div>
  );
}