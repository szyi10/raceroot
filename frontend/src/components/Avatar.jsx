const Avatar = ({ src, height, width }) => {
  return (
    <div
      className={`aspect-square object-cover rounded-full cursor-pointer w-${
        width / 4
      } h-${height / 4} flex items-center justify-center overflow-hidden`}
    >
      <img src={src} width={width} height={height} loading="lazy" />
    </div>
  )
}

export default Avatar
