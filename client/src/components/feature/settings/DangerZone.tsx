import { Link } from "react-router-dom"

const DangerZone = () => {
  return (
    <div>
      <h4 className="mt-10 mb-5 text-xl font-bold text-red-600">Danger Zone</h4>
      <div className="mb-6 flex flex-col sm:flex-row items-start sm:items-center gap-2">
        <Link
          to="/settings"
          className="button text-red-600 border border-red-600 text-base cursor-not-allowed"
        >
          Change Password
        </Link>
        <Link
          to="/settings"
          className="button bg-red-600 text-white text-base cursor-not-allowed"
        >
          Delete your account
        </Link>
      </div>
    </div>
  )
}

export default DangerZone
