import Card from "./ui/projectCard";
import Button from "./ui/button";

export default function RecentProjects() {
  return (
    <>
      <section className="py-10 ">
        <div>
          <h1 className="text-2xl md:text-4xl font-semibold  pb-5 text-gray-800 dark:text-gray-200">
            Recent Projects
          </h1>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-2">
            <div>
              <Card
                title="Expense Tracker"
                description="A simple expense tracker app to track your expenses."
                imgUrl="/images/expense.png"
                link="https://expense-tracker-ten12.vercel.app/"
                github="https://github.com/Vishal101022/full_stack_expense_app"
                techStack={[
                  "Node",
                  "Express",
                  "SQL",
                  "API",
                  "JavaScript",
                  "HTML",
                  "CSS",
                  "Sequelize",
                ]}
              />
            </div>
            <div></div>
          </div>
          <div className="flex justify-center pt-5">
            {/* button */}
            <Button text={"View All Projects"} url={"/projects"} />
          </div>
        </div>
      </section>
    </>
  );
}
