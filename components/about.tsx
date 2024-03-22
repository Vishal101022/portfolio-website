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
            <p className=" text-base font-medium text-slate-500 dark:text-slate-300/70 py-4">
              Hey there! I&apos;m Vishal 👋, and I&apos;m all about coding and
              exploring the tech world 💻🌐.
              <br />
              <br />
              My journey into programming began in{" "}
              <span className="underline decoration-sky-500">
                9th grade
              </span>{" "}
              when I first experimented with Java. Ever since I was a kid,
              I&apos;ve been fascinated by all things tech – I was that kid who
              couldn&apos;t resist messing around with gadgets and computers.
              Sure, I had a few mishaps along the way (thanks, Dad, for the
              patience!), but those early experiences fueled my curiosity and
              drive to learn more.
              <br />
              <br />I decided to pursue a{" "}
              <span className="underline decoration-sky-500">
                degree in computer science
              </span>{" "}
              , where I got to dive into languages like C++, DSA, and Python. I
              won&apos;t lie – mastering them wasn&apos;t a walk in the park.
              But hey, I picked up some valuable skills, especially through my
              freelance gigs on the side.
              <br />
              <br />
              Then came 2020 – the year everything turned upside down with the
              Corona pandemic. It made me rethink my path, leading me to pursue
              an{" "}
              <span className="underline decoration-sky-500">MCA degree</span>.
              {" "}
              However, my initial aspirations in{" "}
              <span className="underline decoration-wavy decoration-red-500">
                software engineering
              </span>{" "}
              hit a roadblock when I found DSA less enjoyable.
              <br />
              <br />
              During a summer break, I decided to try something new and signed
              up for the FreeCodeCamp{" "}
              <span className="underline decoration-sky-500">
                Responsive Web Design course.
              </span>{" "}
              And guess what? It clicked! I fell head over heels for{" "}
              <span className="underline decoration-green-500">
                web development
              </span>{" "}
              , and there&apos;s just something magical about seeing your
              creations come to life on the screen.
              <br />
              <br />
              Since then, I&apos;ve been all in,{" "}
              <span className="underline decoration-green-500">
                focusing on JavaScript
              </span>{" "}
              and honing my skills. Now, I&apos;m pumped to bring my expertise
              to the table and help a forward-thinking company crush their goals
              in a full-time role. Let&apos;s make some digital magic happen!
              🚀💫
            </p>
          </article>
        </div>
      </AnimatePage>
    </>
  );
}
