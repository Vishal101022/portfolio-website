import fs from "fs";
import matter from "gray-matter";

interface PostMetaData {
  title: string;
  date: string;
  subtitle: string;
  slug: string;
}

// generate metadata for blog posts
const GetpostMetaData = (): PostMetaData[] => {
  const postsDirectory = "content/posts";
  const Files = fs.readdirSync(postsDirectory);
  const markdownPosts = Files.filter((file) => file.endsWith(".mdx"));

  // gray-matter to parse the post metadata section
  const posts = markdownPosts.map((file) => {
    const fileContents = fs.readFileSync(`${postsDirectory}/${file}`, "utf-8");
    const matterResult = matter(fileContents);
    return {
      title: matterResult.data.title,
      subtitle: matterResult.data.subtitle,
      date: matterResult.data.date,

      slug: file.replace(".mdx", ""),
    };
  });
  return posts;
};

export default GetpostMetaData;