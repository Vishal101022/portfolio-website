import userData from "@/userdata/data";
import Button from "./ui/button";
import Image from "next/image";
export default function Hero() {
  return (
    <>
      <section className="max-w-6xl  mx-auto px-4 py-10 flex space-x-24">
        <div>
          <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-200">
            Hey there! I&apos;m <span>{userData.about.title}</span>...
          </h1>
          <p>{userData.about.description}</p>
          <Button text={"More about Me"} />
          <Button text={"Resume"} />
        </div>
        <div className="w-1/3 hidden md:block">
          <Image
            src="/images/avtar.jpg"
            alt="Vishal Kumar"
            width={150}
            height={150}
            className="rounded-md"
          />
        </div>
      </section>
    </>
  );
}
