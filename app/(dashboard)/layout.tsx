import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
export default function Dashboard({ children }: { children: React.ReactNode }) {
  return (
    // comman layout that will be used in all pages
    <section className="max-w-6xl  mx-auto px-4  dark:bg-gray-800 w-full">
      <Navbar />
      <main>{children}</main>
      <Footer />
    </section>
  );
}
