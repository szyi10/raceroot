import { Link } from "react-router-dom"

const Blobs = () => {
  return (
    <>
      <div className="-z-10 absolute bottom-0 left-64 w-[600px] h-[600px] bg-purple-700 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
      <div className="-z-10 absolute bottom-12 right-64 w-[500px] h-[500px] bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
      <div className="-z-10 absolute -bottom-12 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
    </>
  )
}

const Dots = () => (
  <div className="-z-10 absolute top-0 h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_20%,transparent_85%)]"></div>
)

const Home = () => {
  return (
    <main className="relative min-h-screen w-full overflow-hidden">
      <div className="relative max-container px-4 flex flex-col justify-between items-center h-[900px] gap-8">
        <div className="flex flex-col items-center gap-5 max-w-3xl text-center mt-32">
          <h1 className="text-3xl sm:text-[3rem] xl:text-[3.75rem] leading-[1em] text-slate-900 font-extrabold">
            Rev Up Community Power with Racing Enthusiasts!
          </h1>
          <p className="text-slate-700 text-lg leading-7">
            Your Hub for Racing Excitement! Discover Thrilling Events, Exclusive
            Insights, and Stay in the Fast Lane with Dynamic News!
          </p>
          <Link
            to="/feed"
            className="button-primary text-base mt-5 flex items-center gap-2"
          >
            <img src="/logo-white.svg" width={20} height={20} />
            Join the community
          </Link>
        </div>
        <img
          src="/images/feed.jpg"
          alt="Feed picture"
          className="rounded-3xl max-w-[769px] w-full h-[760px] bg-white drop-shadow-sm flex items-center justify-center mx-4 overflow-hidden object-cover"
        />
      </div>
      <Dots />
      <Blobs />
    </main>
  )
}

export default Home
