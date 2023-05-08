import { useRouter } from "next/router";

const PostDetails = ({ product }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      <h2 className="text-3xl font-medium">
        {product.id} {product.title} {product.price}
      </h2>
      <p className="text-lg font-light">{product.description}</p>
      <hr />
    </>
  );
};

export default PostDetails;

export const getStaticProps = async (context) => {
  const { params } = context;
  console.log(`Regenerating product ${params.productId}`);
  const url = `http://localhost:4000/products/${params.productId}`;
  const response = await fetch(url);
  const data = await response.json();

  if (!data.id) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      product: data,
    },
    revalidate: 10,
  };
};

export const getStaticPaths = async () => {
  return {
    paths: [{ params: { productId: "1" } }],
    fallback: true,
  };
};
