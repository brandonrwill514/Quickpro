import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/Navbar";

type PageLayoutProps = {
  children: React.ReactNode;
};

export default function PageLayout({ children }: PageLayoutProps) {
  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      <div className="mx-auto flex min-h-screen max-w-7xl gap-6 px-6 py-6">
        <Sidebar />

        <div className="min-w-0 flex-1">
          <Navbar />

          <main className="mx-auto w-full max-w-7xl px-0 py-8">
            {children}
          </main>
        </div>
      </div>
    </div>
  );
}