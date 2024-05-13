import { Link } from "react-router-dom"

const CategoryBar = () => {
  return (
    <section className="max-container px-4 my-8">
      <div className="bg-blue-200 w-full h-12 rounded-lg overflow-hidden flex">
        <Link
          to="/news"
          className="bg-blue-600 px-4 flex items-center font-medium text-white relative mr-4"
        >
          <span className="z-10">News</span>
          <div className="bg-blue-600 absolute w-12 h-full -top-1/2 translate-y-1/2 -right-3.5 rotate-45"></div>
        </Link>
        <Link
          to="?tag=Formula 1"
          className="px-4 flex items-center text-sm font-semibold text-slate-900 hover:text-slate-500"
        >
          <span className="block sm:hidden">F1</span>
          <span className="hidden sm:block">Formula 1</span>
        </Link>
        <Link
          to="?tag=Endurance"
          className="px-4 flex items-center text-sm font-semibold text-slate-900 hover:text-slate-500"
        >
          Endurance
        </Link>
        <Link
          to="?tag=WRC"
          className="px-4 flex items-center text-sm font-semibold text-slate-900 hover:text-slate-500"
        >
          WRC
        </Link>
      </div>
    </section>
  )
}

export default CategoryBar
