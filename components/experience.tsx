import { experience } from "@/lib/data";
import ExperienceCard from "@/components/ui/experienceCard";
import { AnimatePage } from "@/components/ui/animatePage";

function Experience() {
  return (
    <AnimatePage>
      <section>
        {/* Experience card */}
        {experience.map((exp, index) => (
          <div
            key={index}
            className="grid grid-cols-1  max-w-xl mx-auto pt-16"
          >
            <ExperienceCard
              title={exp.title}
              desc={exp.desc}
              year={exp.year}
              company={exp.company}
              companyLink={exp.companyLink}
            />
          </div>
        ))}
      </section>
    </AnimatePage>
  );
}

export default Experience;