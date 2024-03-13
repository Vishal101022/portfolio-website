import Hero from "@/components/hero";
import RecentProjects from "@/components/recentProjects";
import Stack from "@/components/stack";
import Contact from "@/components/contact";
import LatestCode from "@/components/latestCode";
import { AnimatePage } from "@/components/ui/animatePage";

export default function Home() {
  return (
    <>
      <AnimatePage>
        <Hero />
        <RecentProjects />
        <Stack />
        <LatestCode />
        <Contact />
      </AnimatePage>
    </>
  );
}
