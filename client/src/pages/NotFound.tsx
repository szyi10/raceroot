import { Link } from "react-router-dom"

const NotFound = () => {
  return (
    <main className="absolute top-0 left-0 w-full h-screen bg-white flex items-center justify-center">
      <div className="flex flex-col items-center">
        <div className="flex items-center gap-2 mb-8">
          <img src="/logo.svg" alt="Raceroot Logo" height={35} width={35} />
          <span className="select-none font-extrabold text-3xl text-gray-900 font-kanit tracking-wide">
            raceroot
          </span>
        </div>
        <h2 className="text-3xl font-bold text-slate-900 mb-4">
          404 - Page Not Found
        </h2>
        <p className="text-lg text-slate-600 mb-6">
          The page you are looking for doesn&apos;t exits or has been moved.
        </p>
        <Link to="/" className="button-primary">
          Back to Home
        </Link>
      </div>
    </main>
  )
}

export default NotFound
