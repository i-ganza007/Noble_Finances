import { Link } from "react-router"
import { Button } from '@headlessui/react'
function Navbar() {
  return (
    <div>
      <nav className="flex justify-between px-4 items-center py-10 bg-[#A0F1BD]">
        <Link to={"/"} className="text-[#2E4F21] text-2xl font-semibold tracking-tight">Noble Finances</Link>
        <div className="flex items-center gap-5">
            <Link to={"/services"} className="text-[#2E4F21] text-xl tracking-tight">Services</Link>
            <Button className="bg-hug-100 text-white rounded-full p-3 font-semibold">Book</Button>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
