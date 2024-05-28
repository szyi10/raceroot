import { twMerge } from "tailwind-merge"

type Props = {
  src: string
  size: number
}

const Avatar = ({ src, size }: Props) => {
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
