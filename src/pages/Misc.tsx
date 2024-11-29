import React from "react"
import Footer from "../components/ui/layout/footer/Footer"
import { Outlet } from "react-router-dom"
import Header from "../components/ui/layout/header/Header"


const Misc = () => {

   
  return (
    <React.Fragment>
      <Header backgroundBlack={true} />
      <main className=" text-white misc main-container">
        <Outlet />
      </main>
      <Footer />
    </React.Fragment>
  )
}

export default Misc