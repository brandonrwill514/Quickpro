"use client";

export default function Navbar() {
  return (
    <header className="flex items-center justify-between border-b bg-white px-8 py-5">
      <div>
        <h2 className="text-2xl font-bold">Welcome Back 👋</h2>

        <p className="text-gray-500">Let's build some quotes.</p>
      </div>

      <button className="rounded-xl bg-blue-600 px-6 py-3 text-white hover:bg-blue-700">
        New Quote
      </button>
    </header>
  );
}
