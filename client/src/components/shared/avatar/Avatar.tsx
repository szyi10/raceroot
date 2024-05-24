import { twMerge } from "tailwind-merge"

type Props = {
  // TODO: delete ?
  src?: string
  size: number
}

const Avatar = ({ src, size }: Props) => {
  src =
    "https://images.pexels.com/photos/2748242/pexels-photo-2748242.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"

  return (
    <div
      className={twMerge(
        "aspect-square object-cover rounded-full cursor-pointer flex items-center justify-center overflow-hidden",
        `w-${size / 4} h-${size / 4}`
      )}
    >
      <img src={src} width={size} height={size} loading="lazy" />
    </div>
  )
}

export default Avatar
