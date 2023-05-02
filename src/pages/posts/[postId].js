const PostDetails = ({ post }) => {
  return (
    <>
      <h2 className="text-3xl font-medium">
        {post.id} {post.title}
      </h2>
      <p className="text-lg font-light">{post.body}</p>
    </>
  );
};
export default PostDetails;

export const getStaticPaths = async () => {
  const url = "https://jsonplaceholder.typicode.com/posts";
  const response = await fetch(url);
  const data = await response.json();

  const paths = data.map(post => {
    return {
      params: {
        postId:`${post.id}`
      }
    }
  })
  return {
    //paths: [
    //  {
    //    params: { postId: "1" },
    //  },
    //  {
    //    params: { postId: "2" },
    //  },
    //  {
    //    params: { postId: "3" },
    //  },
    //],
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const { params } = context;
  const url = `https://jsonplaceholder.typicode.com/posts/${params.postId}`;
  const response = await fetch(url);
  const data = await response.json();

  return {
    props: {
      post: data,
    },
  };
};
