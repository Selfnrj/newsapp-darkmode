import { categories } from "../constants"
import fetchNews from "../lib/fetchNews"

async function Homepage() {

  const news: NewsResponse = await fetchNews(categories.join(","));

  console.log(news);

  return (
    <div>Homepage
      {news.data.map((item) => (
        <div className="dark:text-white" key={item.title}>
          <h1>{item.title}</h1> 
          <p>{item.author}</p>
          <p>{item.description}</p>
        </div>
      ))}
    </div> 
  )
}

export default Homepage