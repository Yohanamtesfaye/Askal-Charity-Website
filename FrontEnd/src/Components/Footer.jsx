import React from "react"
import { motion } from "framer-motion"
import { FaYoutube, FaTelegramPlane, FaTiktok, FaFacebookF, FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa"
import logo from "../assets/Images/askallogo.jpg"
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();
  const socialLinks = [
    { icon: FaYoutube, href: "https://youtube.com", color: "#FF0000" },
    { icon: FaTelegramPlane, href: "https://telegram.org", color: "#0088cc" },
    { icon: FaTiktok, href: "https://tiktok.com", color: "#ff0050" },
    { icon: FaFacebookF, href: "https://facebook.com", color: "#1877F2" },
  ]

  return (
    <footer className="bg-gradient-to-b from-[#399918] to-[#2d7313] text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Logo and About Section */}
          <div className="flex flex-col items-center md:items-start space-y-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="bg-white p-4 rounded-2xl shadow-lg"
            >
              <img
                src={logo || "/placeholder.svg"}
                alt="Askal Charity Logo"
                className="w-48 h-48 object-cover rounded-xl"
              />
            </motion.div>
            <p className="text-white/90 text-center md:text-left mt-4">
              {t('footer_des')}
            </p>
          </div>

          {/* Contact Information */}
          <div className="flex flex-col items-center md:items-start space-y-6">
            <h3 className="text-2xl font-bold mb-4 text-[#FCCD2A]">{t('contact_us')}</h3>

            <div className="flex items-center space-x-3 group">
              <div className="p-2 bg-white/10 rounded-full group-hover:bg-white/20 transition-colors">
                <FaPhone className="text-[#FCCD2A]" />
              </div>
              <a href="tel:+251902404444" className="hover:text-[#FCCD2A] transition-colors">
                +251 902 404444
              </a>
            </div>

            <div className="flex items-center space-x-3 group">
              <div className="p-2 bg-white/10 rounded-full group-hover:bg-white/20 transition-colors">
                <FaEnvelope className="text-[#FCCD2A]" />
              </div>
              <a href="mailto:askalcharityassociation@gmail.com" className="hover:text-[#FCCD2A] transition-colors">
                askalcharityassociation@gmail.com
              </a>
            </div>

            <div className="flex items-center space-x-3 group">
              <div className="p-2 bg-white/10 rounded-full group-hover:bg-white/20 transition-colors">
                <FaMapMarkerAlt className="text-[#FCCD2A]" />
              </div>
              <span>{t('addis_ababa')}</span>
            </div>

            {/* Social Media Links */}
            <div className="flex space-x-6 mt-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2 }}
                  className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
                >
                  <social.icon size={24} className="text-[#FCCD2A] hover:text-white transition-colors" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Map Section */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-2xl font-bold mb-4 text-[#FCCD2A]">{t('find_us')}</h3>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="w-full bg-white p-2 rounded-lg overflow-hidden shadow-lg"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3941.1242755613744!2d38.7640207!3d8.960694799999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b830059db1b61%3A0x5bb1f433372cad06!2sAskal%20Charity%20Association!5e0!3m2!1sen!2set!4v1719301886616!5m2!1sen!2set"
                className="w-full h-[300px] rounded-md"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Askal Charity Location"
              ></iframe>
            </motion.div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="mt-12 pt-8 border-t border-white/10 text-center text-white/80">
          <p>© {new Date().getFullYear()}{t('askal_asso')} {t('all_rights')}</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

