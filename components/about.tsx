import { userData } from "@/lib/data";
import Image from "next/image";
import { SlLocationPin } from "react-icons/sl";
import { MdOutlineWorkOutline } from "react-icons/md";
import { about } from "@/lib/data";
import SocialLinks from "./socialLinks";
import { AnimatePage } from "./ui/animatePage";

export default function About() {
  return (
    <>
      <AnimatePage>
        <div className="flex flex-col items-center gap-8 sm:flex-row ">
          {/* avatar */}
          <div className=" rounded-full bg-gradient-to-tl from-purple-700/60 to-rose-400/60 shadow-lg p-[4px] ring-[5px] ring-purple-500/10">
            <div className="rounded-full p-px  w-[94px] h-[auto]">
              <Image
                src="/images/avtar.jpg"
                alt="Photo of Vishal"
                width={84}
                height={0}
                style={{ width: "100%", height: "auto" }}
                priority={true}
                className="rounded-full "
              />
            </div>
          </div>

          <div className="flex flex-col gap-2 place-self-center">
            {/* designation */}
            <p className="flex gap-1 text-base font-medium text-slate-500 dark:text-slate-400">
              <MdOutlineWorkOutline className="mt-1" />
              {userData.designation}
            </p>
            {/* address */}
            <p className="flex gap-1 text-base text-slate-500 dark:text-slate-400">
              <SlLocationPin className="mt-1" />
              {userData.address}
            </p>
            {/* tech stack */}
            <div>
              {about.map((tech, index) => (
                <div className="flex flex-wrap gap-1.5" key={index}>
                  {tech.techStack.map((stackItem, stackIndex) => (
                    <span
                      key={stackIndex}
                      className="whitespace-nowrap rounded-sm bg-slate-200 px-2.5 py-1 text-sm text-slate-900"
                    >
                      {stackItem.name}
                    </span>
                  ))}
                </div>
              ))}
            </div>
            {/* social links */}
            <SocialLinks socialLinks={userData.socialLinks} />
          </div>
        </div>
        {/* about me article */}
        <div className="relative">
          <article>
            <p className=" text-base font-medium text-slate-500 dark:text-slate-400 py-4">
              Hello world! I&apos;m Vishal, a code-loving introvert.
              <br />I first dipped my toes into{" "}
              <span className="underline decoration-sky-500">
                programming back in 9th grade
              </span>{" "}
              with Java. from childhood, I&apos;ve been fascinated by tech and
              always wanted to play around with it. My dad got me a computer and
              well, I literally screwed it up.
              <br />
              <br />I decided I wanted to pursue a graduation degree in computer
              science. There, I studied C++, DSA, Python, and a bunch of
              programming languages but became a master of none. Alongside my
              studies, I also took on freelance work. In 2020, the Corona
              pandemic disrupted my entire year. At the end of the year,{" "}
              <span className="underline decoration-sky-500">
                I decided to pursue MCA
              </span>
              <br />
              <br />
              At the beginning of the year, I was learning DSA to become a{" "}
              <span className="underline decoration-wavy decoration-red-500">
                software engineer{" "}
              </span>
              , but I really failed to achieve my goal because I did not enjoy
              DSA much. During the summer vacation, I took the FreeCodeCamp{" "}
              <span className="underline decoration-sky-500">
                Responsive Web Design course
              </span>
              . I enjoyed learning it, and that&apos;s when I developed an{" "}
              <span className="underline decoration-green-500">
                interest in web development
              </span>{" "}
              because I saw great things happening on the screen.
              <br />
              <br />
              Since then, I&apos;ve been honing my skills and learning
              JavaScript. I&apos;m seeking a full-time role where I can help a
              company achieve their goals.
            </p>
          </article>
        </div>
      </AnimatePage>
    </>
  );
}
