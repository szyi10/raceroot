import JournalistBadge from "./icons/Badges/JournalistBadge"
import AdminBadge from "./icons/Badges/AdminBadge"

const UserBadges = ({ role, size }) => {
  return (
    <>
      {role === "journalist" && <JournalistBadge size={size} />}
      {role === "admin" && <AdminBadge size={size} />}
    </>
  )
}

export default UserBadges
