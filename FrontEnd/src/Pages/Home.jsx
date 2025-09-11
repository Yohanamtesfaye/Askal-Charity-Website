"use client"

import { useEffect, useRef } from "react"
import {
  FaYoutube,
  FaUserPlus,
  FaChild,
  FaChalkboardTeacher,
  FaDonate,
  FaTelegramPlane,
  FaTiktok,
  FaFacebookF,
} from "react-icons/fa"
import { FaHeart } from "react-icons/fa"
import "../App.css"
import CountUp from "react-countup"
import { motion } from "framer-motion"
import { FaHandHoldingHeart } from "react-icons/fa"
import trip from "../assets/Images/trip.jpeg"
import teach from "../assets/Images/teach.png"
import donation from "../assets/Images/donation.png"
import lifetraining from "../assets/Images/lifetraining.png"

import { Link } from "react-router-dom"
import VisitorMessage from "../Components/VisitorMessage"
import Slideshow from "../Components/Slideshow"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { useTranslation } from "react-i18next"

const Home = () => {
  const { i18n } = useTranslation()

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng)
  }
  const { t } = useTranslation()
  const statsData = [
    { end: 1000, label: t("children") },
    { end: 500, label: t("volunteers") },
    { end: 200, label: t("daily_meals") },
    { end: 50, label: t("programs") },
    { end: 20, label: t("locations") },
  ]

  const fadeRefs = useRef([])
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
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

  const features = [
    {
      icon: FaChild,
      title: t("protect_kids"),
      description: t("protect_des"),
      color: "#16a34a", // green-600
    },
    {
      icon: FaChalkboardTeacher,
      title: t("shape_kids"),
      description: t("shape_des"),
      color: "#84cc16", // lime-500
    },
    {
      icon: FaHandHoldingHeart,
      title: t("support_kids"),
      description: t("support_des"),
      color: "#059669", // emerald-600
    },
  ]

  return (
    <div className="bg-gray-50">
      <div className="h-[60vh] overflow-hidden">
        <Slideshow num={1} />
      </div>

      <div className="container mx-auto px-4 -mt-16 relative z-10">
        <div className="grid md:grid-cols-3 gap-4">
          <motion.div
            className="box bg-green-600 card-hover rounded-xl shadow-lg overflow-hidden"
            whileHover={{ y: -8, transition: { duration: 0.2 } }}
          >
            <div className="p-6 text-white text-center">
              <div className="bg-white/10 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                <FaHeart className="text-2xl text-white" />
              </div>
              <h2 className="text-lg font-bold mb-3 text-balance">{t("visit_us")}</h2>
              <p className="mb-4 text-white/90 text-sm leading-relaxed">{t("address")}</p>
              <Link
                to="/about-us"
                className="inline-flex items-center px-4 py-2 border border-white rounded-full text-sm
                         hover:bg-white hover:text-green-600 transition-all duration-300 font-medium"
              >
                {t("read_more")}
              </Link>
            </div>
          </motion.div>

          <motion.div
            className="box bg-lime-500 card-hover rounded-xl shadow-lg overflow-hidden"
            whileHover={{ y: -8, transition: { duration: 0.2 } }}
          >
            <div className="p-6 text-green-900 text-center">
              <div className="bg-green-900/10 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                <FaUserPlus className="text-2xl text-green-900" />
              </div>
              <h2 className="text-lg font-bold mb-3 text-balance"> {t("join_us")}</h2>
              <p className="mb-4 text-sm leading-relaxed">{t("difference")}</p>
              <Link
                to="/join-us"
                className="inline-flex items-center px-4 py-2 border border-green-900 rounded-full text-sm
                         hover:bg-green-900 hover:text-lime-500 transition-all duration-300 font-medium"
              >
                {t("join_now")}
              </Link>
            </div>
          </motion.div>

          <motion.div
            className="box bg-emerald-600 card-hover rounded-xl shadow-lg overflow-hidden"
            whileHover={{ y: -8, transition: { duration: 0.2 } }}
          >
            <div className="p-6 text-white text-center">
              <div className="bg-white/10 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                <FaDonate className="text-2xl text-white" />
              </div>
              <h2 className="text-lg font-bold mb-3 text-balance"> {t("donate_online")}</h2>
              <p className="mb-4 text-sm leading-relaxed">
                {t("cbe")}: 1000278927892
                <br />
                {t("telebirr")}: 0909090909
              </p>
              <Link
                to="/donate"
                className="inline-flex items-center px-4 py-2 border border-white rounded-full text-sm
                         hover:bg-white hover:text-emerald-600 transition-all duration-300 font-medium"
              >
                {t("donate_now")}
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="bg-white shadow-md mt-12 py-4 border-y border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-4">
            <div className="flex flex-col sm:flex-row items-center gap-4 text-gray-600 text-sm">
              <div className="flex items-center gap-2">
                <span className="font-medium">{t("tel")}:</span>
                <span className="text-gray-900">+251902404444</span>
              </div>
              <span className="hidden sm:block text-gray-300">•</span>
              <div className="flex items-center gap-2">
                <span className="font-medium">Email:</span>
                <span className="text-gray-900">askalcharityassociation@gmail.com</span>
              </div>
            </div>
            <div className="flex gap-3">
              {[
                { icon: FaYoutube, color: "#FF0000", link: "https://youtube.com" },
                { icon: FaTelegramPlane, color: "#0088cc", link: "https://telegram.org" },
                { icon: FaTiktok, color: "#000000", link: "https://tiktok.com" },
                { icon: FaFacebookF, color: "#1877F2", link: "https://facebook.com" },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -1 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-2 rounded-full bg-gray-100 hover:bg-green-600 hover:text-white transition-all duration-300 shadow-sm hover:shadow-md"
                  style={{ color: social.color }}
                >
                  <social.icon size={16} />
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid lg:grid-cols-2 gap-12 items-center"
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="relative rounded-2xl overflow-hidden shadow-xl group h-80"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-green-600/20 to-lime-500/20 mix-blend-multiply group-hover:opacity-75 transition-opacity duration-300"></div>
              <img
                src={trip || "/placeholder.svg?height=400&width=600&query=children playing happily"}
                alt="Children playing"
                className="w-full h-full object-cover"
              />
            </motion.div>

            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <h2 className="text-3xl md:text-4xl font-bold text-green-600 mb-4 text-balance">{t("invest_hope")}</h2>
                <div className="w-20 h-1 bg-gradient-to-r from-green-600 to-lime-500 rounded-full mb-6"></div>
                <p className="text-gray-600 leading-relaxed">{t("our_mission")}</p>
              </motion.div>

              <div className="grid gap-4 mt-8">
                {features.map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ x: 4 }}
                    className="group"
                  >
                    <div className="flex items-start gap-3 p-4 bg-white rounded-xl border border-gray-200 hover:shadow-md transition-all duration-300">
                      <div className="flex-shrink-0">
                        <div
                          className="p-2 rounded-lg transition-colors duration-300"
                          style={{ backgroundColor: `${feature.color}15` }}
                        >
                          <feature.icon
                            size={24}
                            className="transition-colors duration-300"
                            style={{ color: feature.color }}
                          />
                        </div>
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-gray-900 mb-1 group-hover:text-green-600 transition-colors duration-300">
                          {feature.title}
                        </h3>
                        <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">Our Impact in Numbers</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-green-600 to-lime-500 rounded-full mx-auto"></div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {statsData.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center group"
            >
              <div className="bg-white rounded-xl p-4 border border-gray-200 hover:shadow-md transition-all duration-300">
                <CountUp
                  end={stat.end}
                  duration={2.5}
                  className="text-2xl md:text-3xl font-bold text-green-600 block"
                />
                <p className="text-gray-600 mt-2 text-sm font-medium">{stat.label}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="bg-gray-100 py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">{t("we_do")}</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-green-600 to-lime-500 rounded-full mx-auto"></div>
          </div>
          <motion.div ref={(el) => (fadeRefs.current[1] = el)} className="grid md:grid-cols-3 gap-6">
            <div className="space-y-6">
              <div className="group">
                <img
                  src={teach || "/placeholder.svg"}
                  className="w-full h-48 object-cover rounded-xl shadow-md border border-gray-200 group-hover:shadow-lg transition-all duration-300"
                  alt="Teaching children"
                />
              </div>
              <div className="group">
                <img
                  src={donation || "/placeholder.svg"}
                  className="w-full h-48 object-cover rounded-xl shadow-md border border-gray-200 group-hover:shadow-lg transition-all duration-300"
                  alt="Donation activities"
                />
              </div>
            </div>
            <div className="group">
              <img
                src={lifetraining || "/placeholder.svg"}
                className="w-full h-full object-cover rounded-xl shadow-md border border-gray-200 group-hover:shadow-lg transition-all duration-300"
                alt="Life training programs"
              />
            </div>
            <div className="space-y-6">
              <div className="group">
                <img
                  src={teach || "/placeholder.svg"}
                  className="w-full h-48 object-cover rounded-xl shadow-md border border-gray-200 group-hover:shadow-lg transition-all duration-300"
                  alt="Educational programs"
                />
              </div>
              <div className="group">
                <img
                  src={donation || "/placeholder.svg"}
                  className="w-full h-48 object-cover rounded-xl shadow-md border border-gray-200 group-hover:shadow-lg transition-all duration-300"
                  alt="Community support"
                />
              </div>
            </div>
          </motion.div>
          <div className="text-center mt-12">
            <Link
              to="/about-us"
              className="inline-flex items-center px-6 py-3 bg-green-600 text-white rounded-full font-medium hover:bg-green-700 transition-colors duration-300"
            >
              {t("explore_more")}
            </Link>
          </div>
        </div>
      </div>
      <VisitorMessage />
    </div>
  )
}

export default Home
