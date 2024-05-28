import GlobalStyle from "../components/GlobalStyle"
import { PostForm } from "../components/feature"

const NewPost = () => {
  return (
    <GlobalStyle>
      <main className="max-w-6xl mx-auto px-4 w-full min-h-screen my-6 justify-between items-start flex">
        <PostForm />
      </main>
    </GlobalStyle>
  )
}

export default NewPost
