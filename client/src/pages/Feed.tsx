import GlobalStyle from "../components/GlobalStyle"
import { FeedAside, FeedPosts } from "../components/feature"

const Feed = () => {
  return (
    <GlobalStyle>
      <main className="max-w-6xl mx-auto px-4 w-full min-h-screen my-6 justify-between items-start flex">
        <FeedPosts />
        <FeedAside />
      </main>
    </GlobalStyle>
  )
}

export default Feed
