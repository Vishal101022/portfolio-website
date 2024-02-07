import Marquee from "react-fast-marquee";
import Image from "next/image";

const Stack = () => {
  return (
    <section className="py-10 ">
      <h1 className="text-4xl font-bold pb-5 text-gray-800 dark:text-white">
        Stack
      </h1>
      <p className="text-md pb-10 text-gray-600 dark:text-gray-300">
        Apart from the courses included in my degree, I&apos;ve taken a number
        of online courses
        <br />
        such as {" "}
        <span className="font-bold dark:text-gray-300/50">
          JavaScript Essential Training, Responsive Web Design and React - The
          complete guide.
        </span>
      </p>
      <Marquee gradient={false}>
        <div className="flex gap-20 justify-center">
          <div className="pl-10 pt-1">
            <Image src="/logos/html.png" alt="html" width={50} height={50} />
          </div>
          <div>
            <Image src="/logos/css.png" alt="css" width={60} height={60} />
          </div>
          <div className="p-2 ">
            <Image
              src="/logos/js.png"
              alt="javaScript"
              width={50}
              height={50}
            />
          </div>
          <div className="p-3">
            <Image
              src="/logos/react.png"
              alt="reactjs"
              width={50}
              height={50}
            />
          </div>
          <div className="p-2">
            <Image
              src="/logos/nextjs.svg"
              alt="nextjs"
              width={50}
              height={50}
              className="dark:bg-white rounded-full"
            />
          </div>
          <div className="p-2">
            <Image
              src="/logos/tailwind.png"
              alt="tailwind"
              width={50}
              height={50}
            />
          </div>
          <div className="p-2">
            <Image
              src="/logos/framer.png"
              alt="framer-motion"
              width={50}
              height={50}
            />
          </div>
          <div className="pr-10 pt-2">
            <Image src="/logos/mysql.png" alt="mysql" width={50} height={50} />
          </div>
        </div>
      </Marquee>
    </section>
  );
};

export default Stack;
