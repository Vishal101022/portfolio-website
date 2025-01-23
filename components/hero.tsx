import { userData } from "@/lib/data";
import Button from "./ui/button";
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";
import Link from "next/link";
export default function Hero() {
  return (
    <section>
      <div className="py-5 px-2 overflow-hidden">
        <div className="relative max-w-fit">
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-gray-200">
            {userData.title}
            <span className="px-1 text-transparent bg-clip-text bg-gradient-to-r from-rose-500  to-pink-500 ">
              {userData.firstName}
            </span>
          </h1>

          <p className="text-2xl font-bold text-gray-600 dark:text-gray-300 py-5">
            <RoughNotationGroup show={true}>
              I’m a{" "}
              <RoughNotation type="underline">web developer</RoughNotation> who
              loves building things with{" "}
              <RoughNotation type="underline">code</RoughNotation>.
            </RoughNotationGroup>
          </p>
          <Button text={"More about Me"} url={"/about"} />
          <span className="mx-2"></span>
          <Link href={userData.resumeUrl} target="_blank" className="underline ">My Resume</Link>
          <span className="mx-2"></span>
        </div>
      </div>
    </section>
  );
}
