import { Outlet } from "react-router-dom"
import Navbar from "../components/navbar"

export default function Layout() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
      </header>
      <Outlet/>
    </div>
  )
}
