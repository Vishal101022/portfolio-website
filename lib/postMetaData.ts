import fs from "fs";

// generate metadata for blog posts
const GetpostMetaData = () => {
  const postsDirectory = "content/posts";
  const postFiles = fs.readdirSync(postsDirectory);
  const markdownPosts = postFiles
    .filter((post) => post.endsWith(".mdx"))
    .map((post) => ({
      params: {
        slug: post.replace(".mdx", ""),
      },
    }));
  return markdownPosts;
};
export default GetpostMetaData;
