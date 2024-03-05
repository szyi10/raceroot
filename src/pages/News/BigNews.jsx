import { Link } from "react-router-dom"

const BigNews = ({ news }) => {
  if (!news) return

  return (
    <section className="relative max-container px-4 flex flex-col lg:flex-row items-center lg:mt-6 overflow-hidden gap-4 lg:gap-0">
      <div className="w-full lg:w-1/3 z-10 flex justify-center items-start gap-3 flex-col order-2 lg:order-1">
        <div className="flex gap-2">
          <span className="bg-orange-200 text-orange-600 font-medium px-3 py-1 rounded-lg text-sm">
            Big news
          </span>
          <span className="bg-blue-200 text-blue-600 font-medium px-3 py-1 rounded-lg text-sm">
            {news.tag}
          </span>
        </div>
        <h1 className="text-3xl sm:text-4xl min-[1370px]:text-5xl leading-[1em] text-slate-900 font-extrabold dark:text-neutral-200">
          {news.title}
        </h1>
        <p className="text-slate-500 font-medium text-lg leading-7 dark:text-slate-400">
          {news.subtitle}
        </p>
        <Link to={`/news/${news._id}`} className="button-primary">
          Read more
        </Link>
      </div>
      <div className="bg-blue-500 min-h-96 sm:min-h-[450px] lg:min-h-[600px] w-screen lg:w-2/3 relative overflow-hidden order-1 lg:order-2">
        <img
          src={news.img}
          alt="Hamilton to Ferrari"
          className="absolute h-full w-screen object-cover"
        />
      </div>
      <div className="bg-white dark:bg-neutral-950 w-1/2 h-full absolute right-[60%] -skew-x-12 hidden lg:block z-10"></div>
    </section>
  )
}

export default BigNews
