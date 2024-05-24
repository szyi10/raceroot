import React from "react"
import { Footer, Navbar } from "./layout"
import { ProfileMenu } from "./shared"

const GlobalStyle = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
      <ProfileMenu />
    </>
  )
}

export default GlobalStyle
