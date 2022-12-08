import Article from "./Article";

type Props = {
  news: NewsResponse;
}

function NewsList({news}: Props) {
  return (
    <main className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {news.data.map((article) => (
        <Article key={article.title} article={article} />
      ))}
    </main>
  )
}

export default NewsList