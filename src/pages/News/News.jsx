import { Helmet } from "react-helmet-async"
import BigNews from "./BigNews"
import NewsGrid from "./NewsGrid"

const News = () => {
  return (
    <main className="relative min-h-screen w-full overflow-hidden">
      <Helmet>
        <title>Raceroot - stay in the fast lane with the latest updates!</title>
      </Helmet>
      <BigNews />
      <section className="max-container px-4 my-8">
        <div className="bg-blue-200 w-full h-12 rounded-lg overflow-hidden flex">
          <a
            href="#"
            className="bg-blue-600 px-4 flex items-center font-medium text-white relative mr-4"
          >
            <span className="z-10">News</span>
            <div className="bg-blue-600 absolute w-12 h-full -top-1/2 translate-y-1/2 -right-3.5 rotate-45"></div>
          </a>
          <a
            href="#"
            className="px-4 flex items-center text-sm font-semibold text-slate-900 hover:text-slate-500"
          >
            <span className="block sm:hidden">F1</span>
            <span className="hidden sm:block">Formula 1</span>
          </a>
          <a
            href="#"
            className="px-4 flex items-center text-sm font-semibold text-slate-900 hover:text-slate-500"
          >
            Endurance
          </a>
          <a
            href="#"
            className="px-4 flex items-center text-sm font-semibold text-slate-900 hover:text-slate-500"
          >
            WRC
          </a>
        </div>
      </section>
      <NewsGrid />
    </main>
  )
}

export default News
