import { Link } from "react-router-dom"

type Props = {
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  placeholder?: string
  forgotElement?: boolean
}

const PasswordInput = ({
  value,
  onChange,
  placeholder,
  forgotElement = false,
}: Props) => {
  return (
    <div className="flex flex-col gap-1 w-full relative">
      <div className="flex items-center justify-between">
        <label htmlFor="password" className="font-semibold">
          Password
        </label>
        {forgotElement && (
          <Link to="/login" className="text-sm font-medium text-blue-600">
            Forgot password?
          </Link>
        )}
      </div>

      <input
        type="password"
        name="password"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={
          "input dark:bg-slate-200  dark:focus:bg-blue-100 dark:text-slate-800"
        }
      />
    </div>
  )
}

export default PasswordInput
