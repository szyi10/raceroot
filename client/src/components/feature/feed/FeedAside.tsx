import { useEffect, useState } from "react"
import { fetchTrendingPosts } from "../../../lib/api"
import { Post } from "../../../types"
import FeedPanel from "./FeedPanel"
import TrendingPost from "./TrendingPost"
import { connectMethods } from "../../../lib/constants"
import ConnectMethod from "./ConnectMethod"

const FeedAside = () => {
  const [trendingPosts, setTrendingPosts] = useState<Post[] | null>(null)

  useEffect(() => {
    fetchTrendingPosts()
      .then((data) => setTrendingPosts(data))
      .catch(() => console.log("Failed to fetch trending posts"))
  }, [])

  return (
    <aside className="hidden xl:flex max-w-[348px] w-full sticky -top-[53%] flex-col gap-6">
      <FeedPanel title="Trending Posts">
        <div className="flex flex-col gap-5 mb-1.5">
          {trendingPosts &&
            trendingPosts.map((post) => (
              <TrendingPost key={post.id} data={post} />
            ))}
          {!trendingPosts && <p>No posts found.</p>}
        </div>
      </FeedPanel>

      <FeedPanel className="bg-blue-600 border-blue-600 text-white">
        <h2 className="font-semibold text-xl">Become a premium member</h2>
        <p className="text-slate-200">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
        <button className="button bg-white text-slate-900 flex justify-center mt-2 text-base hover:bg-slate-200 dark:text-slate-300 dark:bg-neutral-950 dark:hover:bg-neutral-800">
          Purchase
        </button>
      </FeedPanel>

      <FeedPanel className="border-slate-200 bg-slate-200 dark:bg-neutral-900 dark:border-neutral-900">
        <h3 className="text-slate-700 font-medium dark:text-slate-200">
          Connect with us
        </h3>
        <div className="flex items-center gap-4">
          {connectMethods.map((method) => (
            <ConnectMethod key={method.name} method={method} />
          ))}
        </div>
      </FeedPanel>
    </aside>
  )
}

export default FeedAside
