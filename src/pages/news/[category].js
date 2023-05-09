const ArticleListByCategory = ({ articles, category }) => {
  return (
    <>
      <h1>
        Showing news for category <i>{category}</i>
      </h1>
      {articles.map((article) => {
        const { id, title, description } = article;
        return (
          <div key={article.id}>
            <h2>{(id, title)}</h2>
            <p>{description}</p>
            <hr />
          </div>
        );
      })}
    </>
  );
};
export default ArticleListByCategory;

export const getServerSideProps = async (context) => {
  const { params } = context;
  const { category } = params;
  const response = await fetch(
    `http://localhost:4000/news?category=${category}`
  );
  const data = await response.json();

  return {
    props: {
      articles: data,
      category,
    },
  };
};
