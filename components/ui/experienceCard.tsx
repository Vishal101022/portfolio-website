interface ExperienceCardProps {
  title: string;
  desc: string;
  year: string;
  company: string;
  companyLink: string;
}

const ExperienceCard = ({
  title,
  desc,
  year,
  company,
  companyLink,
}: ExperienceCardProps) => {
  return (
    <div className="relative  border border-gray-200 p-4 rounded-md shadow-sm dark:bg-zinc-800 dark:border-zinc-700 z-10 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] dark:bg-[radial-gradient(#363440_1px,transparent_1px)] [background-size:16px_16px]">
      <h1 className="absolute -top-10 md:-left-10 md:-top-10  text-3xl md:text-4xl text-gray-200 font-bold dark:text-zinc-500">
        {year}
      </h1>
      <h1 className="font-semibold text-lg  md:text-xl">{title}</h1>
      <a
        href={companyLink}
        className="font-medium text-gray-600 dark:text-gray-400"
      >
        {company}
      </a>
      <p className="text-gray-600 dark:text-gray-400 my-2">{desc}</p>
    </div>
  );
};

export default ExperienceCard;