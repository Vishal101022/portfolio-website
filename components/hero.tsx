import userData from "@/userdata/data";
import Button from "./ui/button";
import Image from "next/image";
export default function Hero() {
  return (
    <>
      <section className="max-w-6xl  mx-auto px-4 py-10 flex space-x-12">
        <div>
          <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-200">
            Hey there! I&apos;m <span>{userData.about.title}</span>...
          </h1>
          <p>{userData.about.description}</p>
          <Button text={"More about Me"} />
          <Button text={"Resume"} />
        </div>
        <div className="hidden md:block relative">
          {/* avatar */}
          <Image
            src="/images/avtar.jpg"
            alt="Vishal Kumar"
            width={150}
            height={150}
            objectFit="cover"
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
      </section>
    </>
  );
}
