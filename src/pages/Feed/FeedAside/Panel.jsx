import { twMerge } from "tailwind-merge"

const Panel = ({ title, children, className }) => {
  return (
    <div
      className={twMerge(
        "rounded-lg overflow-hidden border border-gray-200 w-full flex flex-col justify-start gap-3.5 py-5 px-6",
        className
      )}
    >
      {title && (
        <h2 className="font-semibold text-xl text-slate-700">{title}</h2>
      )}
      {children}
    </div>
  )
}

export default Panel
