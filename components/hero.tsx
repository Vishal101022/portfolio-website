import userData from "@/userdata/data";
import Button from "./ui/button";
export default function Hero() {
  return (
    <>
      <section className="max-w-6xl  mx-auto px-4 py-10 ">
        <div>
          <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-200">
            Hey there! I&apos;m <span>{userData.about.title}</span>...
          </h1>
          <p>{userData.about.description}</p>
          <Button text={"More about Me"} />
          <Button text={"Resume"} />
        </div>
      </section>
    </>
  );
}
