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
      <article className="hover:animate-background rounded-xl bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 p-0.5 shadow-xl transition hover:bg-[length:400%_400%] hover:shadow-sm hover:[animation-duration:_4s]">
        <div className="rounded-[10px] bg-white p-4 ">
          {/* title */}
          <h1 className="font-medium">{title}</h1>
          {/* links */}
          <div className="flex justify-end gap-2 -mt-5 ">
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
          {/* images */}
          <div className="relative mt-3">
            <Image
              src={imgUrl}
              alt={title}
              width={300}
              height={300}
              className="w-full object-cover rounded-md "
            />
          </div>
          {/* description */}
          <Link href={link} target="_blank">
            <h3 className="mt-0.5 text-sm  text-gray-900">{description}</h3>
          </Link>
          {/* techStack */}
          <div className="mt-4 flex flex-wrap gap-1">
            {techStack.map((tech, index) => (
              <span
                key={index}
                className="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-xs text-purple-600"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </article>
    </>
  );
};

export default Card;
