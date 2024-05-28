const Spinner = () => {
  return (
    <div className="w-full min-h-screen flex flex-col gap-4 items-center justify-center dark:bg-neutral-950">
      <div className="border-slate-300 dark:border-neutral-800 h-20 w-20 animate-spin rounded-full border-8 border-t-blue-600 dark:border-t-blue-600" />
      <p className="font-semibold text-slate-700 dark:text-slate-300 text-center">
        Sit back, relax, and enjoy the loading symphony.
      </p>
      <div className="flex items-center gap-2 cursor-pointer">
        <img
          src="/logo.svg"
          alt="Raceroot Logo"
          height={35}
          width={35}
          loading="lazy"
        />
        <span className="font-extrabold text-3xl text-gray-900 dark:text-white font-kanit tracking-wide">
          raceroot
        </span>
      </div>
    </div>
  )
}

export default Spinner
