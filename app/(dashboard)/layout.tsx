import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default function Dashboard({ children }: { children: React.ReactNode }) {
  return (
    <section className="max-w-screen-xl self-stretch m-auto px-6 sm:px-12 py-6 dark:bg-gray-800 w-full">
      <Navbar />
      <main>{children}</main>
      <Footer />
    </section>
  );
}
