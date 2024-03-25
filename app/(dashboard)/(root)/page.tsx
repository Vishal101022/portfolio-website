import Hero from "@/components/hero";
import PostPreview from "@/components/postPreview";
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
        <PostPreview
          title="How I Built My Website"
          subtitle="An overview of how I chose my tech stack, the resources that proved helpful, and my design approach"
          slug="/how-i-built-my-website"
          date="March 2024"
        />
        <Stack />
        <LatestCode />
        <Contact />
      </AnimatePage>
    </>
  );
}
