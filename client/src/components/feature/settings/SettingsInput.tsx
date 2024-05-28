import { twMerge } from "tailwind-merge"
import { useUser } from "../../../hooks"

type Props = {
  name: string
  label: string
  type: string
  value?: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  isPhoto?: boolean
  disabled?: boolean
}

const SettingsInput = ({
  name,
  label,
  type,
  value,
  onChange,
  isPhoto,
  disabled,
}: Props) => {
  const { user } = useUser()

  return (
    <div className="mb-6">
      <label
        className={twMerge(
          "block mb-2 text-sm font-semibold text-slate-900 dark:text-slate-200",
          disabled && "opacity-50 cursor-not-allowed"
        )}
      >
        {label}
      </label>

      {!isPhoto && (
        <input
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          className="input w-full disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={disabled}
        />
      )}
      {isPhoto && (
        <div className="flex items-end gap-4">
          <img src={user?.photo} className="h-40 rounded-full" />
          <input
            name={name}
            type="text"
            value={value}
            onChange={onChange}
            className="input w-full"
          />
        </div>
      )}
    </div>
  )
}

export default SettingsInput
