import fs from "fs";
import Markdown from "markdown-to-jsx";
import matter from "gray-matter";
import GetpostMetaData from "@/lib/postMetaData";

// for dynamic routes on SSG
export const generateStaticParams = async () => {
  const posts = GetpostMetaData();
  return posts.map((post) => ({
    slug: post.slug,
  }));
};

//
const getPostContent = (slug: string) => {
  try {
    const postDirectory = "content/posts";
    const file = `${postDirectory}/${slug}.mdx`;

    // Check if the file exists before reading
    if (!fs.existsSync(file)) {
      return {
        error: 404,
        message: "Not Found",
      };
    }

    const content = fs.readFileSync(file, "utf-8");
    const matterResult = matter(content);

    // Check if it's a GrayMatterFile or an error object
    if ("data" in matterResult) {
      return matterResult;
    } else {
      return {
        error: 500,
        message: "Internal Server Error",
      };
    }
  } catch (error: any) {
    return {
      error: 500,
      message: "Internal Server Error",
    };
  }
};

function PostPage(props: any) {
  const { slug } = props.params;
  const post = getPostContent(slug);

  if ("error" in post) {
    return (
      <div>
        <h1 className="text-xl md:text-2xl text-center">
          {post.error} {post.message}
        </h1>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="font-mono text-3xl sm:text-4xl font-bold">{post.data.title}</h1>
      <p className="font-mono text-base text-gray-600 dark:text-gray-400">{post.data.date}</p>
      <article className="prose dark:prose-invert prose-code:">
        <Markdown>{post.content}</Markdown>
      </article>
    </div>
  );
}

export default PostPage;
