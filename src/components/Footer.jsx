const Footer = () => {
  return (
    <footer className="bg-white text-slate-700 border-t border-gray-200 w-full">
      <div className="max-container flex flex-col items-center py-12">
        <p className="mb-4 xs:mb-2">&copy; Raceroot 2024</p>
        <ul className="mb-8 flex flex-col items-center xs:flex-row gap-2 xs:gap-8 text-sm">
          <li className="py-1 px-3 rounded-full hover:bg-slate-100">
            <a href="#">Privacy Policy</a>
          </li>
          <li className="py-1 px-3 rounded-full hover:bg-slate-100">
            <a href="#">Terms & Conditions</a>
          </li>
        </ul>
        <a href="/" className="flex items-center gap-2 cursor-pointer">
          <img src="logo.svg" alt="Raceroot Logo" height={35} width={35} />
          <span className="font-extrabold text-3xl text-gray-900 font-kanit tracking-wide">
            raceroot
          </span>
        </a>
      </div>
    </footer>
  )
}

export default Footer
