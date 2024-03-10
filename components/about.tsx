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
        <div className="flex flex-col gap-8 sm:flex-row ">
          {/* avatar */}
          <div className="flex flex-col items-center">
            <div className="relative">
              <Image
                src="/images/avtar.jpg"
                alt="Vishal Kumar"
                width={150}
                height={150}
                className="rounded-sm shadow"
              />
            </div>
          </div>
          {/* details */}
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

        <div></div>
      </AnimatePage>
    </>
  );
}
