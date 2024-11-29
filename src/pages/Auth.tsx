import React from "react"
import { Outlet } from "react-router-dom"
import Footer from "../components/ui/layout/footer/Footer"

 const Auth:React.FC = () =>{
  return (
     <React.Fragment>
          <main className="auth">
              <Outlet/>
          </main>
          <Footer/>
     </React.Fragment>
  )
}

export default Auth