import Link from "next/link";

interface PostMetadata {
  title: string;
  subtitle: string;
  date: string;
  slug: string;
}

function PostPreview({ title, subtitle, date, slug }: PostMetadata) {
  return (
    <div>
      <Link href={`/blog/${slug}`}>
        <h1>{title}</h1>
        <p>{subtitle}</p>
        <p>{date}</p>
      </Link>
    </div>
  );
}

export default PostPreview;
