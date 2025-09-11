"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Link } from "react-router-dom"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import gift from "../assets/Images/gift.jpeg"
import basic from "../assets/Images/basic.jpeg"
import trip from "../assets/Images/trip.jpeg"
import certified from "../assets/Images/certified.jpg"
import us from "../assets/Images/us.jpeg"
import vol from "../assets/Images/vol.jpg"
import volunt from "../assets/Images/volunt.jpg"
import volll from "../assets/Images/volll.jpg"
import { useTranslation } from "react-i18next"

const Slideshow = ({ num }) => {
  const { t } = useTranslation()
  const [currentIndex, setCurrentIndex] = useState(0)

  // Define different slide sets for each `num` value
  const slideSets = {
    1: [
      { image: gift, alt: "Gift giving", text: t("slide_1"), description: t("homeintro1") },
      { image: basic, alt: "Basic needs", text: t("slide_2"), description: t("homeintro2") },
      { image: trip, alt: "Children trip", text: t("slide_3"), description: t("homeintro3") },
    ],
    2: [
      { image: trip, alt: "Children trip", text: t("slide_4"), description: t("homeintro3") },
      { image: us, alt: "Gift giving", text: t("slide_5"), description: t("homeintro5") },
      { image: certified, alt: "Basic needs", text: t("slide_6"), description: t("homeintro6") },
    ],
    3: [
      { image: vol, alt: "Children trip", text: t("slide_4"), description: t("homeintro3") },
      { image: volunt, alt: "Gift giving", text: t("slide_5"), description: t("homeintro5") },
      { image: volll, alt: "Basic needs", text: t("slide_6"), description: t("homeintro6") },
    ],
  }

  // Get the slides based on the `num` prop
  const slides = slideSets[num] || []

  useGSAP(() => {
    gsap.fromTo(
      ".intro-text",
      { opacity: 0, y: -50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: 0.5,
        ease: "power2.out",
      },
    )
  }, [])

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [slides.length])

  return (
    <div className="relative h-full overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          <img
            src={slides[currentIndex]?.image || "/placeholder.svg"}
            alt={slides[currentIndex]?.alt}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30" />
        </motion.div>
      </AnimatePresence>

      <div
        className={`absolute inset-0 flex flex-col items-center justify-center text-white px-4 ${num === 3 ? "mt-16" : ""}`}
      >
        <motion.div
          className="intro-text text-center max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4">{slides[currentIndex]?.text}</h1>
          <p className="text-lg md:text-xl mb-8 font-serif">{slides[currentIndex]?.description}</p>
          {num != 3 && (
            <Link
              to="/about-us"
              className="inline-block px-8 py-3 bg-green-600 text-white rounded-full
               text-base font-semibold hover:bg-green-700 transition-all duration-300
               transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              {t("our_story")}
            </Link>
          )}
        </motion.div>
      </div>

      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentIndex ? "bg-white scale-125" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  )
}

export default Slideshow
