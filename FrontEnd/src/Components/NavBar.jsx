import React, { useState } from "react"
import { Link } from "react-router-dom"
import { Menu, X } from "lucide-react"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center">
              <img
                className="h-8 w-auto"
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/askallogo.jpg-LPP18eDjV7UVahOKtQ16dfe4lBwJ3b.jpeg"
                alt="Logo"
              />
              <span className="ml-2 text-xl font-bold text-gray-800">Askal Charity Association</span>
            </Link>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/donate">Donate</NavLink>
            <NavLink to="/about-us">About Us</NavLink>
            <NavLink to="/volunteer">Volunteer</NavLink>
            <NavLink to="/join-us">Join Us</NavLink>
          </div>
          <div className="-mr-2 flex items-center sm:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-500"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="sm:hidden">
          <div className="pt-2 pb-3 space-y-1">
            <MobileNavLink to="/">Home</MobileNavLink>
            <MobileNavLink to="/donate">Donate</MobileNavLink>
            <MobileNavLink to="/about-us">About Us</MobileNavLink>
            <MobileNavLink to="/volunteer">Volunteer</MobileNavLink>
            <MobileNavLink to="/join-us">Join Us</MobileNavLink>
          </div>
        </div>
      )}
    </nav>
  )
}

const NavLink = ({ to, children }) => (
  <Link
    to={to}
    className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-gray-300"
  >
    {children}
  </Link>
)

const MobileNavLink = ({ to, children }) => (
  <Link
    to={to}
    className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300"
  >
    {children}
  </Link>
)

export default Navbar

