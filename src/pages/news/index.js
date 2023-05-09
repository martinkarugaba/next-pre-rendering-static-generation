const NewsArticleList = ({ articles }) => {
  return (
    <>
      <h1 className="text-4xl font-semibold">
        List of news articles
      </h1>
      {articles.map((article) => {
        const { id, title, category } = article;

        return (
          <div key={id}>
            <h2>
              {id} {title} | {category}
            </h2>
          </div>
        );
      })}
    </>
  );
};
export default NewsArticleList;

export const getServerSideProps = async () => {
  const url = "http://localhost:4000/news";
  const response = await fetch(url);
  const data = await response.json();

  return {
    props: {
      articles: data,
    },
  };
};
