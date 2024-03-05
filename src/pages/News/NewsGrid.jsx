import NewsCard from "./NewsCard"
import { loadMore } from "../../assets/icons"

const NewsGrid = ({ news }) => {
  if (!news) return

  return (
    <section className="max-container px-4 ">
      <div className=" grid md:grid-cols-2 xl:grid-cols-3 gap-4">
        {news.map((news) => {
          if (news.isBigNews) return
          return <NewsCard key={news.id} data={news} />
        })}
      </div>
      <button className="button-primary mx-auto my-6">
        <img
          src={loadMore}
          alt="Load more"
          width={20}
          height={20}
          className="mr-2"
        />
        Load more
      </button>
    </section>
  )
}

export default NewsGrid
