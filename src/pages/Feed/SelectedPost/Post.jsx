import { dot } from "../../../assets/icons"
import Comments from "./Comments"
import Heart from "../../../components/icons/Heart"

const Post = ({ data }) => {
  const formattedDate = new Date(data.createdAt).toLocaleString("en-us", {
    month: "short",
    day: "numeric",
    year: "numeric",
  })

  return (
    <section className="max-w-[728px] w-full flex flex-col gap-6 mx-auto">
      <article className="lg:rounded-lg overflow-hidden border-b lg:border border-gray-200 dark:border-neutral-800 lg:p-6 pt-6 pb-5 flex flex-col gap-4">
        <header className="flex items-center gap-3">
          <img
            src={`${import.meta.env.VITE_DATABASE_URL}/img/users/${
              data.user.photo
            }`}
            alt="User avatar"
            height={40}
            width={40}
            className="aspect-square object-cover rounded-full cursor-pointer"
          />
          <div>
            <p className="font-semibold text-slate-700 dark:text-slate-300 text-sm">
              {data.user.displayName ? data.user.displayName : data.user.name}
            </p>
            <div className="flex flex-row items-center gap-1">
              <span className="text-sm text-slate-500 dark:text-slate-400 hidden sm:block">
                {data.user.name}
              </span>
              <img
                src={dot}
                alt="dot"
                width={5}
                height={5}
                className="hidden sm:block"
              />
              <span className="text-sm text-slate-500 dark:text-slate-400">
                {formattedDate}
              </span>
            </div>
          </div>
        </header>
        <section className="flex flex-col gap-1">
          <h2 className="font-bold text-slate-700 dark:text-slate-200 text-xl sm:text-2xl">
            {data.title}
          </h2>
          <p className="whitespace-pre-line text-slate-500 dark:text-slate-400">
            {data.text}
          </p>
        </section>
        <footer className="flex items-center gap-1">
          <button className="cursor-not-allowed">
            <Heart color="stroke-slate-600 dark:stroke-slate-500" />
          </button>
          <span className="font-medium text-slate-700 dark:text-slate-400">
            {data.likes} likes
          </span>
        </footer>
        <Comments data={data} />
      </article>
    </section>
  )
}

export default Post
