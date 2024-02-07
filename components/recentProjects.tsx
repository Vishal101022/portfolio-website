import Card from "./ui/projectCard";
import Button from "./ui/button";

export default function RecentProjects() {
  return (
    <>
      <section className="py-10">
        <div className=" sm:pt-10  md:mt-24  lg:mt-30">
          <h1 className="text-4xl font-bold pb-5 text-gray-800 dark:text-gray-200">
            Recent Projects
          </h1>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-2">
            <div>
              <Card
                title="SkillBlend-LMS"
                description="A full stack web application that helps users to create and manage courses, access learning materials, track progress on their dashboard,making it a valuable tool for educators and learners."
                imgUrl="/images/p1.png"
                link="https://skill-blend-lms.vercel.app/"
                github="https://github.com/Vishal101022/SkillBlend-LMS"
                techStack={[
                  "React",
                  "Tailwind",
                  "NextJs",
                  "MongoDB",
                  "Stripe",
                  "Prisma",
                ]}
              />
            </div>
            <div>
              <Card
                title="KATHAK ARTIST WEBSITE"
                description="sleek and minimalistic website with a harmonious color palette"
                imgUrl="/images/p2.png"
                link="https://rahulkathak.com/"
                github="https://github.com/Vishal101022/Rahul-kathak-artist"
                techStack={["Html", "CSS", "JavaScript", "Bootstrap"]}
              />
            </div>
          </div>
          <div className="flex justify-center pt-5">
            {/* button */}
            <Button text={"View All Projects"} url={"/projects"} />
          </div>
        </div>
      </section>
    </>
  );
}
