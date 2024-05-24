type Props = {
  label: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const TextInput = ({ label, value, onChange }: Props) => {
  return (
    <div className="flex flex-col gap-1 w-full relative">
      <label htmlFor={label} className="font-semibold">
        {label}
      </label>
      <input
        type="text"
        name={label}
        value={value}
        onChange={onChange}
        className={`input dark:bg-slate-200  dark:focus:bg-blue-100 dark:text-slate-800`}
      />
    </div>
  )
}

export default TextInput
