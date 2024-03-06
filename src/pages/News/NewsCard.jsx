import { Link } from "react-router-dom"
import { time, readMore } from "../../assets/icons"

const NewsCard = ({ data }) => {
  const formattedDate = new Date(data.createdAt).toLocaleString("en-us", {
    hour: "2-digit",
    hourCycle: "h24",
    minute: "2-digit",
    month: "numeric",
    day: "numeric",
    year: "numeric",
  })

  return (
    <article className="rounded-lg overflow-hidden border border-gray-200 dark:border-neutral-800 shadow-sm flex flex-col">
      <img
        src={`${import.meta.env.VITE_DATABASE_URL}/img/news/${data.img}`}
        alt={data.title}
        width={1200}
        height={900}
        className="aspect-video object-cover"
      />
      <div className="flex flex-col items-start justify-between gap-4 h-full py-5 px-4">
        <span className="bg-blue-200 text-blue-600 font-medium px-3 py-1 rounded-lg text-sm">
          {data.tag}
        </span>
        <h2 className="text-2xl leading-[1em] text-slate-900 font-extrabold dark:text-slate-300">
          {data.title}
        </h2>
        <p className="text-slate-500 dark:text-slate-400">{data.subtitle}</p>
        <div className="flex w-full items-center justify-between text-sm text-slate-400 mt-2">
          <div className="flex items-center gap-1">
            <img src={time} alt="Time to read" width={20} height={20} />
            <p>{data.minutesToRead} min read</p>
          </div>

          <p>{formattedDate}</p>
        </div>
        <Link
          to={`/news/${data._id}`}
          className="text-lg font-medium text-blue-600 flex items-center gap-1"
        >
          Read more
          <img src={readMore} alt="Read more" width={24} height={24} />
        </Link>
      </div>
    </article>
  )
}

export default NewsCard
