import Marquee from "react-fast-marquee";
import Image from "next/image";

const Stack = () => {
  return (
    <section className="py-10 ">
      <h1 className="text-4xl font-bold py-5 text-gray-800 dark:text-gray-200">
        Stack
      </h1>
      <Marquee gradient={true}>
        <div className="flex gap-20 justify-center">
          <div className="pl-10 pt-1">
            <Image src="/logos/html.png" alt="html" width={50} height={50} />
          </div>
          <div>
            <Image src="/logos/css.png" alt="css" width={60} height={60} />
          </div>
          <div className="p-2">
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
          <div className="p-4">
            <Image src="/logos/php.png" alt="php" width={60} height={60} />
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
