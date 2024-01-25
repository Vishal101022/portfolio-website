import { userData } from "@/lib/data";
import Image from "next/image";
import { SlLocationPin } from "react-icons/sl";
import { MdOutlineWorkOutline } from "react-icons/md";
import { about } from "@/lib/data";
import { FaGithub } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import Link from "next/link";
export default function About() {
  return (
    <>
      <div className="flex flex-col gap-8 sm:flex-row py-8">
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
            {/* gradient */}
            <div className="z-0">
              <div className="absolute left-0 -right-10 top-0 h-px bg-slate-900/[0.1] dark:bg-zinc-300/[0.1] [mask-image:linear-gradient(to_right,transparent,white_4rem,white_calc(100%-4rem),transparent)]"></div>
              <div className="absolute -top-10 bottom-10 right-0 w-px bg-slate-900/[0.1] dark:bg-zinc-300/[0.1] [mask-image:linear-gradient(to_top,transparent,white_4rem,white_calc(100%-4rem),transparent)]"></div>

              <div className="absolute bottom-full right-5 -mb-px flex h-8 items-end overflow-hidden">
                <div className="flex -mb-px h-[2px] w-40 -scale-x-100">
                  <div className="w-full flex-none blur-sm [background-image:linear-gradient(90deg,rgba(56,189,248,0)_0%,#0EA5E9_32.29%,rgba(236,72,153,0.3)_67.19%,rgba(236,72,153,0)_100%)]"></div>
                  <div className="-ml-[100%] w-full flex-none blur-[1px] [background-image:linear-gradient(90deg,rgba(56,189,248,0)_0%,#0EA5E9_32.29%,rgba(236,72,153,0.3)_67.19%,rgba(236,72,153,0)_100%)]"></div>
                </div>
              </div>
            </div>
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
          <div className="flex flex-wrap gap-3 text-2xl py-2">
            <span>
              <Link href={userData.socialLinks.linkedin} target="_blank">
                <FaLinkedin />
              </Link>
            </span>
            <span>
              <Link href={userData.socialLinks.github} target="_blank">
                <FaGithub />
              </Link>
            </span>
            <span>
              <Link href={userData.socialLinks.twitter} target="_blank">
                <FaTwitterSquare/>
              </Link>
            </span>
          </div>
        </div>
      </div>

      <div></div>
    </>
  );
}
