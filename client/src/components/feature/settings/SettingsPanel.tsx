import { twMerge } from "tailwind-merge"

type PanelProps = {
  title: string
  children: React.ReactNode
  paddingRight?: boolean
}

const SettingsPanel = ({ title, children, paddingRight }: PanelProps) => {
  return (
    <div className={twMerge("w-full lg:w-1/2", paddingRight && "lg:pr-4")}>
      <h4 className="mb-5 text-xl font-bold text-slate-900 dark:text-slate-200">
        {title}
      </h4>
      {children}
    </div>
  )
}

export default SettingsPanel
