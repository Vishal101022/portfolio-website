import InfiniteSlider from "./infiniteSlider";
const Stack = () => {
  return (
    <section className="py-10 ">
      <h1 className="text-2xl md:text-4xl font-semibold  pb-5 text-gray-800 dark:text-gray-200">
        Stack
      </h1>
      <p className="text-md pb-10 text-gray-600 dark:text-gray-300">
        Apart from the courses included in my degree, I&apos;ve taken a number
        of online courses
        <br />
        such as{" "}
        <span className="font-bold dark:text-gray-500">
          JavaScript Essential Training, Responsive Web Design and React - The
          complete guide.
        </span>
      </p>
      <div>
        <InfiniteSlider />
      </div>
    </section>
  );
};

export default Stack;
