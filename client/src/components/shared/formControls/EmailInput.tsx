type Props = {
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const EmailInput = ({ value, onChange }: Props) => {
  return (
    <div className="flex flex-col gap-1 w-full relative">
      <label htmlFor="email" className="font-semibold">
        Email Address
      </label>
      <input
        type="email"
        name="email"
        value={value}
        onChange={onChange}
        className={
          "input dark:bg-slate-200  dark:focus:bg-blue-100 dark:text-slate-800"
        }
      />
    </div>
  )
}

export default EmailInput
