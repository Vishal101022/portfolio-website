export default function RecentProjects() {
  return (
    <>
      <section className="md:mt-52">
        <h1 className="text-4xl font-bold pb-5 text-gray-800 dark:text-gray-200">Recent Projects</h1>
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8">
          <div className="h-32 rounded-lg bg-gray-200"></div>
          <div className="h-32 rounded-lg bg-gray-200"></div>
          <div className="h-32 rounded-lg bg-gray-200"></div>
        </div>
      </section>
    </>
  );
}
