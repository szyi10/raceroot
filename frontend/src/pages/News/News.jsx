import { useState, useEffect } from "react"
import axios from "axios"
import { useLocation } from "react-router-dom"

import { Helmet } from "react-helmet-async"
import BigNews from "./BigNews"
import NewsGrid from "./NewsGrid"
import CategoryBar from "./CategoryBar"

const News = () => {
  const [news, setNews] = useState(null)
  const [bigNews, setBigNews] = useState(null)
  const { search } = useLocation()

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const res = await axios({
          method: "GET",
          url: `${import.meta.env.VITE_DATABASE_URL}/api/v1/news${
            search && search
          }`,
        })
        const data = await res.data.data.data

        data.map((news) => {
          if (news.isBigNews) {
            setBigNews(news)
          }
        })
        setNews(data)
      } catch (error) {
        console.log(error)
      }
    }
    fetchNews()
  }, [search])

  return (
    <main className="relative min-h-screen w-full overflow-hidden">
      <Helmet>
        <title>Raceroot - stay in the fast lane with the latest updates!</title>
      </Helmet>
      <BigNews news={bigNews} />
      <CategoryBar />
      <NewsGrid news={news} />
    </main>
  )
}

export default News
