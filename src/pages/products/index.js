import Link from "next/link";

const ProductList = ({ products }) => {
  return (
    <>
      <div className="text-4xl font-medium">PostList</div>
      {products.map((product) => {
        return (
          <div key={product.id}>
            <Link href={`products/${product.id}`} passHref>
              <h2 className="text-lg font-normal">
                {product.id} {product.title} {product.price}
              </h2>
              <hr />
            </Link>
          </div>
        );
      })}
    </>
  );
};
export default ProductList;

export const getStaticProps = async () => {
  console.log("Generating/Regenerating productList");
  
  const url = "http://localhost:4000/products";
  const response = await fetch(url);
  const data = await response.json();

  return {
    props: {
      products: data,
    },
    revalidate: 10,
  };
};
