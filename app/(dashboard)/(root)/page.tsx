import Hero from "@/components/hero";
import RecentProjects from "@/components/recentProjects";
import Stack from "@/components/stack";
import Contact from "@/components/contact";
import LatestCode from "@/components/latestCode";
export default function Home() {
  return (
    <div>
      <Hero />
      <RecentProjects />
      <Stack />
      <LatestCode />
      <Contact />
    </div>
  );
}
