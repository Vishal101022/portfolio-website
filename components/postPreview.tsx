import Link from "next/link";

interface PostMetadata {
  title: string;
  subtitle: string;
  date: string;
  slug: string;
}

function PostPreview({ title, subtitle, date, slug }: PostMetadata) {
  return (
    <Link href={`/blog/${slug}`}>
      <div className="flex justify-between mx-auto">
        <span className="dark:bg-zinc-800 dark:border-zinc-700 rounded-md shadow-sm mb-4 p-4 border z-[-2] border-gray-200 inset-0 h-full w-full bg-white  bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] dark:bg-[radial-gradient(#363440_1px,transparent_1px)] [background-size:16px_16px]">
          <h3 className="text-base md:text-xl font-semibold mb-2 w-full text-gray-900 dark:text-gray-100">
            {title}
          </h3>
          <p className="text-gray-500 text-left md:text-right mb-4 md:mb-0">
            {date}
          </p>
          <p className="text-base text-gray-600 dark:text-gray-400">
            {subtitle}
          </p>
        </span>
      </div>
    </Link>
  );
}

export default PostPreview;
