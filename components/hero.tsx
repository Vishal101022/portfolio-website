import { userData } from "@/lib/data";
import Button from "./ui/button";
import WaterDropGrid from "./waterDropGrid";
export default function Hero() {
  return (
    <>
      <section className="py-10 w-full">
        <div className="py-5 px-2 overflow-hidden">
          <div className="relative z-10 max-w-fit">
            <h1 className="text-4xl  font-extrabold text-gray-900 dark:text-gray-200">
              {userData.title}
            </h1>

            <p className="text-2xl font-bold text-gray-600 dark:text-gray-200 py-5">
              {userData.description}
            </p>

            <Button text={"More about Me"} url={"/about"} />
            <span className="mx-2"></span>
            <Button text={"Resume"} url={"#"} />
          </div>
          <div className=" absolute z-0 top-[140px] right-[15%] overflow-hidden">
            <WaterDropGrid />
          </div>
        </div>
      </section>
    </>
  );
}
