import React, { useState } from "react"
import { Link } from "react-router-dom"
import { Menu, X } from "lucide-react"
import { useTranslation } from "react-i18next"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const { t, i18n } = useTranslation()

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const changeLanguage = (event) => {
    i18n.changeLanguage(event.target.value)
  }

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center">
              <img
                className="h-8 w-auto"
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/askallogo.jpg-LPP18eDjV7UVahOKtQ16dfe4lBwJ3b.jpeg"
                alt="Logo"
              />
              <span className="ml-2 text-xl font-bold text-gray-800">{t('askal')}</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden sm:flex sm:space-x-8 items-center">
            <NavLink to="/">{t("home")}</NavLink>
            <NavLink to="/donate">{t("donate")}</NavLink>
            <NavLink to="/about-us">{t("aboutUs")}</NavLink>
            <NavLink to="/volunteer">{t("volunteer")}</NavLink>
            <NavLink to="/join-us">{t("joinUs")}</NavLink>

            {/* Language Dropdown */}
            <select
              onChange={changeLanguage}
              value={i18n.language}
              className="border w-24 rounded px-2 py-1 text-gray-700"
            >
              <option value="en">English</option>
              <option value="am">አማርኛ (Amharic)</option>
              <option value="om">Afaan Oromoo</option>
            </select>
          </div>

          {/* Mobile Menu Button */}
          <div className="-mr-2 flex items-center sm:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-500"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="sm:hidden">
          <div className="pt-2 pb-3 space-y-1">
            <MobileNavLink to="/">{t("home")}</MobileNavLink>
            <MobileNavLink to="/donate">{t("donate")}</MobileNavLink>
            <MobileNavLink to="/about-us">{t("aboutUs")}</MobileNavLink>
            <MobileNavLink to="/volunteer">{t("volunteer")}</MobileNavLink>
            <MobileNavLink to="/join-us">{t("joinUs")}</MobileNavLink>

            {/* Language Dropdown in Mobile */}
            <div className="px-4 py-2">
              <label htmlFor="language-select" className="block text-sm font-medium text-gray-700">
                {t("language")}
              </label>
              <select
                id="language-select"
                onChange={changeLanguage}
                value={i18n.language}
                className="w-full border rounded px-2 py-1 mt-1 text-gray-700"
              >
                <option value="en">English</option>
                <option value="am">አማርኛ</option>
                <option value="om">Afaan Oromoo</option>
              </select>
            </div>
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
