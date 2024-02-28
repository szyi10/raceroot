import FeedAside from "./FeedAside/FeedAside"
import Posts from "./Posts"

const Feed = () => {
  return (
    <main className="max-w-6xl mx-auto px-4 w-full min-h-screen my-6 justify-between items-start flex">
      <Posts />
      <FeedAside />
    </main>
  )
}

export default Feed
