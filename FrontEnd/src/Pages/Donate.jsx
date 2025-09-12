"use client"
import { useEffect, useRef } from "react"
// import { FaDonate } from "react-icons/fa"
import { motion } from "framer-motion"
import { useTranslation } from "react-i18next"
import hand from "../assets/Images/trip.jpeg"
import bag from "../assets/Images/teach.png"
import { Link } from "react-router-dom"
import Slideshow from "../Components/Slideshow"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { FaLightbulb } from "react-icons/fa"; 
import { FaBullseye } from "react-icons/fa"; 
import { FaHandsHelping } from "react-icons/fa"; 

const Donate = () => {
  const { t } = useTranslation()
  const fadeRefs = useRef([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("fade-in")
            entry.target.classList.remove("fade-in-enter")
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.2 },
    )

    fadeRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => {
      fadeRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref)
      })
    }
  }, [])

  useGSAP(() => {
    gsap.fromTo(
      ".box",
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        delay: 0.5,
        ease: "power2.out",
        stagger: {
          amount: 0.5,
          from: "start",
        },
      },
    )
  }, [])

  return (
    <div className="bg-white">
      <div className="h-[60vh] overflow-hidden">
        <Slideshow num={2} />
      </div>

      <div className="container mx-auto px-4 -mt-16 relative z-10">
        <div className="grid lg:grid-cols-3 gap-6">

          <motion.div
  className="box bg-green-600 rounded-xl shadow-lg overflow-hidden text-white cursor-pointer transition-transform duration-300 hover:-translate-y-2"
  whileHover={{ scale: 1.02 }}
>
  <div className="p-6 text-center">
    <div className="bg-white/10 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
      <FaLightbulb className="text-2xl" /> {/* Vision icon */}
    </div>

    {/* Title */}
    <h1 className="text-xl font-bold mb-4">{t("Vision1.0")}</h1>

    {/* Bullet points */}
    <ul className="list-disc list-inside space-y-2 text-sm text-white/90 text-left">
      <li>{t("Vision1.1")}</li>
      <li>{t("Vision1.2")}</li>
      <li>{t("Vision1.3")}</li>
      <li>{t("Vision1.4")}</li>
      <li>{t("Vision1.5")}</li>
      <li>{t("Vision1.6")}</li>
    </ul>
  </div>
</motion.div>


         <motion.div
  className="box bg-yellow-500 rounded-xl shadow-lg overflow-hidden text-white cursor-pointer transition-transform duration-300 hover:-translate-y-2"
  whileHover={{ scale: 1.02 }}
>
  <div className="p-6 text-center">
    <div className="bg-white/10 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
      <FaBullseye className="text-2xl" /> {/* Mission icon */}
    </div>

    {/* Title */}
    <h1 className="text-xl font-bold mb-4">{t("Mission1.0")}</h1>

    {/* Bullet points */}
    <ul className="list-disc list-inside space-y-2 text-sm text-white/90 text-left">
      <li>{t("Mission1.1")}</li>
    </ul>
  </div>
</motion.div>


          <motion.div
  className="box bg-orange-600 rounded-xl shadow-lg overflow-hidden text-white cursor-pointer transition-transform duration-300 hover:-translate-y-2"
  whileHover={{ scale: 1.02 }}
>
  <div className="p-6 text-center">
    <div className="bg-white/10 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
      <FaHandsHelping className="text-2xl" /> {/* Purpose icon */}
    </div>

    {/* Title */}
    <h1 className="text-xl font-bold mb-4">{t("Purpose1.0")}</h1>

    {/* Bullet points */}
    <ul className="list-disc list-inside space-y-2 text-sm text-white/90 text-left">
      <li>{t("Purpose1.1")}</li>
      <li>{t("Purpose1.2")}</li>
      <li>{t("Purpose1.3")}</li>
      <li>{t("Purpose1.4")}</li>
      <li>{t("Purpose1.5")}</li>
      <li>{t("Purpose1.6")}</li>
    </ul>
  </div>
</motion.div>


        </div>
      </div>

      <div ref={(el) => (fadeRefs.current[2] = el)} className="bg-gray-50 py-12 mt-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-green-600 mb-3">{t("contribute")}</h2>
            <div className="w-20 h-1 bg-green-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300"
            >
              <img src={bag || "/placeholder.svg"} className="w-full h-48 object-cover" alt="Educational support" />
              <div className="p-6">
                <div className="bg-gray-200 rounded-full h-2 mb-4">
                  <div className="bg-green-600 h-2 rounded-full w-3/4"></div>
                </div>
                <p className="text-gray-700 mb-4 text-sm leading-relaxed">{t("cause_des")}</p>
                <div className="flex justify-end">
                  <Link to="/register">
                    <button className="bg-green-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-green-700 transition-all duration-300">
                      {t("donate")}
                    </button>
                  </Link>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300"
            >
              <img src={hand || "/placeholder.svg"} className="w-full h-48 object-cover" alt="Community support" />
              <div className="p-6">
                <div className="bg-gray-200 rounded-full h-2 mb-4">
                  <div className="bg-green-600 h-2 rounded-full w-2/3"></div>
                </div>
                <p className="text-gray-700 mb-4 text-sm leading-relaxed">{t("cause_des")}</p>
                <div className="flex justify-end">
                  <Link to="/register">
                    <button className="bg-green-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-green-700 transition-all duration-300">
                      {t("donate")}
                    </button>
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Donate
