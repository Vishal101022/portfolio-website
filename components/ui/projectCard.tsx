import Link from "next/link";
import Image from "next/image";
import { RiExternalLinkFill } from "react-icons/ri";
import { ImGithub } from "react-icons/im";
const Card = ({
  title,
  description,
  imgUrl,
  techStack,
  link,
  github,
}: {
  title: string;
  description: string;
  imgUrl: string;
  techStack: string[];
  link: string;
  github: string;
}) => {
  return (
    <>
      <article>
        <div className="rounded-xl  shadow-sm  bg-gradient-to-b from-zinc-300  to-rose-300  dark:from-zinc-600 dark:to-rose-600 p-0.5 transition hover:scale-105  ">
          <div className="w-full h-[430px] overflow-hidden flex flex-col gap-4 rounded-[10px] bg-white dark:bg-zinc-800 p-4">
            <div className="flex justify-between">
              {/* title */}
              <h1 className="font-medium">{title}</h1>
              {/* links */}
              <div className="flex gap-2">
                <Link href={github} target="_blank">
                  <span className="text-xl">
                    <ImGithub />
                  </span>
                </Link>
                <span className="border-r-2 border-zinc-300 "></span>
                <Link href={link} target="_blank">
                  <span className="text-xl">
                    <RiExternalLinkFill />
                  </span>
                </Link>
              </div>
            </div>
            {/* images */}
            <div className="pt-2">
              <Image
                src={imgUrl}
                alt={title}
                width={300}
                height={300}
                className="w-96 h-50 object-cover rounded-md"
              />
            </div>
            {/* description */}
            <Link href={link} target="_blank">
              <h3 className="mt-0.5 text-sm  text-gray-700 dark:text-white">{description}</h3>
            </Link>
            {/* techStack */}
            <div className="mt-4 flex flex-wrap gap-2">
              {techStack.map((tech, index) => (
                <span
                  key={index}
                  className="whitespace-nowrap rounded-sm font-light italic bg-slate-100 px-2.5 py-0.5 text-xs text:grey-500 dark:bg-zinc-800 dark:ring-[0.5px] dark:ring-zinc-500 dark:text-white"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </article>
    </>
  );
};

export default Card;
