import { Link, NavLink } from "react-router-dom"

const Navbar = () => {
  return (
    <div className="absolute h-32 w-full ">
      <div className="container p-6 mx-auto bg flex flex-col md:flex-row  justify-between items-center">
      <Link to={'/'} className="w-52 mb-3 md:mb-0">
        <img src="../src/assets/Logo.png" alt="" />
      </Link>
      <div className="">
        <ul className="flex gap-10 items-center text-lg font-semibold text-gray-600">
            <li><NavLink to={'/'} className={({ isActive }) =>
                      isActive
                        ? `text-[#FF444A] underline`
                        : ""
                    }>Home</NavLink></li>
            <li><NavLink to={'/donation'} className={({ isActive }) =>
                      isActive
                        ? `text-[#FF444A] underline`
                        : ""
                    }>Donation</NavLink></li>
            <li><NavLink to={'/statistics'} className={({ isActive }) =>
                      isActive
                        ? `text-[#FF444A] underline`
                        : ""
                    }>Statistics</NavLink></li>
        </ul>
      </div>
      </div>
    </div>
  )
}

export default Navbar
