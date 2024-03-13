import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default function Dashboard({ children }: { children: React.ReactNode }) {
  return (
    <div className="max-w-4xl h-screen m-auto px-6 sm:px-12 py-6  top-0 z-[-2] bg-[radial-gradient(100%_50%_at_50%_0%,rgba(0,163,255,0.13)_0%,rgba(0,163,255,0)_50%,rgba(0,163,255,0)_100%)]">
      <Navbar />
      <main className="min-h-screen">{children}</main>
      <Footer />
    </div>
  );
}
