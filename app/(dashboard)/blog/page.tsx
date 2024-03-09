import PostPreview from "@/components/postPreview";
import GetpostMetaData from "@/lib/postMetaData";

function BlogPage() {
  const postMetadata = GetpostMetaData();
  return (
    <>
      {postMetadata.map((post) => (
        <PostPreview key={post.slug} {...post} />
      ))}
    </>
  )
}

export default BlogPage;

