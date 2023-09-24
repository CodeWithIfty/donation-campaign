import { NavLink } from "react-router-dom"

const Navbar = () => {
  return (
    <div className="absolute h-32 w-full ">
      <div className="container p-6 mx-auto bg flex flex-col md:flex-row  justify-between items-center">
      <div className="w-52 mb-3 md:mb-0">
        <img src="./src/assets/Logo.png" alt="" />
      </div>
      <div className="">
        <ul className="flex gap-10 items-center text-lg font-semibold text-gray-600">
            <li><NavLink href="">Home</NavLink></li>
            <li><NavLink href="">Donation</NavLink></li>
            <li><NavLink href="">Statistics</NavLink></li>
        </ul>
      </div>
      </div>
    </div>
  )
}

export default Navbar
