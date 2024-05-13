import { useEffect, useState } from "react"
import axios from "axios"
import { Link, useParams } from "react-router-dom"
import { time } from "../../assets/icons"
import ReactMarkdown from "react-markdown"

const SelectedNews = () => {
  const [news, setNews] = useState(null)
  const [recentNews, setRecentNews] = useState(null)
  const { id } = useParams()

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const res = await axios({
          method: "GET",
          url: `${import.meta.env.VITE_DATABASE_URL}/api/v1/news/${id}`,
        })
        setNews(res.data.data.data)
      } catch (error) {
        console.log(error)
      }
    }
    fetchNews()
  }, [id])

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const res = await axios({
          method: "GET",
          url: `${import.meta.env.VITE_DATABASE_URL}/api/v1/news?limit=3`,
        })

        setRecentNews(await res.data.data.data)
      } catch (error) {
        console.log(error)
      }
    }
    fetchNews()
  }, [])

  if (!news) return

  const formattedDate = new Date(news.createdAt).toLocaleString("en-us", {
    hour: "2-digit",
    hourCycle: "h24",
    minute: "2-digit",
    month: "numeric",
    day: "numeric",
    year: "numeric",
  })

  return (
    <main className="relative min-h-screen w-full overflow-hidden">
      <section className="relative max-w-7xl mx-auto px-4 flex flex-col lg:flex-row items-center lg:mt-6 overflow-hidden gap-4 lg:gap-0">
        <div className="w-full lg:w-1/3 z-10 flex justify-center items-start gap-3 flex-col order-2 lg:order-1">
          <div className="flex gap-2">
            {news.isBigNews && (
              <span className="bg-orange-200 text-orange-600 font-medium px-3 py-1 rounded-lg text-sm">
                Big news
              </span>
            )}
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
          <div className="flex w-full items-center justify-between text-sm text-slate-400 mt-2">
            <div className="flex items-center gap-1">
              <img src={time} alt="Time to read" width={20} height={20} />
              <p>{news.minutesToRead} min read</p>
            </div>

            <p>{formattedDate}</p>
          </div>
        </div>
        <div className="bg-blue-500 min-h-96 sm:min-h-[450px] lg:min-h-[600px] w-screen lg:w-2/3 relative overflow-hidden order-1 lg:order-2">
          <img
            src={news.img}
            alt={news.title}
            className="absolute h-full w-screen object-cover"
          />
        </div>
        <div className="bg-white dark:bg-neutral-950 w-1/2 h-full absolute right-[60%] -skew-x-12 hidden lg:block z-10"></div>
      </section>
      <section className="relative max-w-7xl mx-auto px-4 flex flex-row items-start overflow-hidden gap-10 mt-10">
        <ReactMarkdown className="markdown">{news.text}</ReactMarkdown>
        <div className="hidden lg:flex flex-col items-start w-1/3">
          <div>
            <h3 className="font-bold text-lg mb-1 dark:text-slate-300">
              Topics
            </h3>
            <span className="bg-blue-200 text-blue-600 font-medium px-3 py-1 rounded-lg text-sm">
              {news.tag}
            </span>
          </div>
        </div>
      </section>
      <section className="relative max-w-7xl mx-auto px-4 mt-10 mb-6">
        <h2 className="font-extrabold text-slate-900 text-xl md:text-2xl mb-3 dark:text-slate-300">
          Recent News
        </h2>
        <div className="w-full flex flex-col lg:flex-row gap-4 items-center justify-between">
          {!recentNews && <p>No recent news.</p>}
          {recentNews &&
            recentNews.map((news) => {
              const formattedDate = new Date(news.createdAt).toLocaleString(
                "en-us",
                {
                  month: "numeric",
                  day: "numeric",
                  year: "numeric",
                }
              )
              return (
                <Link
                  to={`/news/${news._id}`}
                  key={news._id}
                  className="p-2 flex gap-2 shadow-lg border border-slate-100 dark:border-neutral-800 rounded-lg w-full"
                >
                  <img
                    src={news.img}
                    alt={news.title}
                    className="hidden sm:block md:aspect-video lg:aspect-[4/3] w-1/3 object-cover rounded"
                  />
                  <div className="flex flex-col justify-between mt-2 w-full">
                    <div>
                      <h4 className="text-lg font-bold line-clamp-2 dark:text-slate-300">
                        {news.title}
                      </h4>
                      <p className="text-slate-500 mt-2 line-clamp-2 md:line-clamp-none lg:hidden dark:text-slate-400">
                        {news.subtitle}
                      </p>
                    </div>

                    <div className="flex w-full items-center justify-between text-sm text-slate-400 mt-2">
                      <div className="flex items-center gap-1">
                        <img
                          src={time}
                          alt="Time to read"
                          width={20}
                          height={20}
                        />
                        <p>{news.minutesToRead} min read</p>
                      </div>
                      <p>{formattedDate}</p>
                    </div>
                  </div>
                </Link>
              )
            })}
        </div>
      </section>
    </main>
  )
}

export default SelectedNews
