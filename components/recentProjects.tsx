import Card from "./ui/projectCard";

export default function RecentProjects() {
  return (
    <>
      <section className="md:mt-52">
        <h1 className="text-4xl font-bold pb-5 text-gray-800 dark:text-gray-200">
          Recent Projects
        </h1>
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8">
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
      </section>
    </>
  );
}
