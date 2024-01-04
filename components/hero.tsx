import { userData } from "@/lib/data";
import Button from "./ui/button";
import WaterDropGrid from "./waterDropGrid";
export default function Hero() {
  return (
    <>
      <section className="py-10 w-full">
        <div className="py-5 px-2 overflow-hidden dark:bg-gray-900">
          <div className="relative z-10">
            <h1 className="text-4xl  font-bold text-gray-800 dark:text-gray-200">
              {userData.title}
            </h1>
            <p className="text-3xl  py-5 max-w-3xl">
              {userData.description}
            </p>

            <Button text={"More about Me"} url ={"/about"} />
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
