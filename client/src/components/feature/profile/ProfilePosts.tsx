import { Post } from "../../../types"
import FeedPost from "../feed/FeedPost"

const ProfilePosts = ({ posts }: { posts: Post[] }) => {
  return (
    <div id="posts">
      <h3 className="mb-5 text-xl font-bold text-slate-900 dark:text-slate-300">
        User posts:
      </h3>

      {posts.length === 0 && (
        <p className="text-slate-500 text-sm font-medium">
          This user never posted.
        </p>
      )}
      <div className="flex flex-col gap-6">
        {posts.map((post) => (
          <FeedPost key={post.id} data={post} />
        ))}
      </div>
    </div>
  )
}

export default ProfilePosts
