import Link from "next/link";

const PostList = ({ posts }) => {
  return (
    <>
      <div className="text-4xl font-medium">PostList</div>
      {posts.map((post) => {
        return (
          <div key={post.id}>
            <Link href={`posts/${post.id}`} passHref>
              <h2 className="text-lg font-normal">
                {post.id} {post.title}
              </h2>
              <hr />
            </Link>
          </div>
        );
      })}
    </>
  );
};
export default PostList;

export const getStaticProps = async () => {
  const url = "https://jsonplaceholder.typicode.com/posts";
  const response = await fetch(url);
  const data = await response.json();

  return {
    props: {
      posts: data,
    },
  };
};
