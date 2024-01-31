import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default function Dashboard({ children }: { children: React.ReactNode }) {
  return (
    <div className="max-w-4xl m-auto px-6 sm:px-12 py-6 w-full">
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
