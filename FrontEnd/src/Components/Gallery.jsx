import React from "react"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import teach from "../assets/Images/teach.png"
import gift from "../assets/Images/gift.jpg"
import lifetraining from "../assets/Images/training.jpg"
import art from "../assets/Images/art.jpg"
import trip from "../assets/Images/triip.jpg"
import byye from '../assets/Images/byye.jpg'
import { useTranslation } from 'react-i18next';

const Gallery = () => {
  const {t}= useTranslation();
  const galleryItems = [
    {
      src: teach,
      alt: "Teaching Kids",
      title:t('educational_programs'),
      description: t('edu_des'),
      prop: 1,
      category: "Education",
    },
    {
      src: gift,
      alt: "gifts",
      title: t('community_support'),
      description: t('comm_des'),
      prop: 2,
      category: "Support",
    },
    {
      src: art,
      alt: "Extra Carricular Activities",
      title: t('extra_curric'),  
      description: t('extra_des'),
      prop: 3,
      category: "Extra Curricular",
    },
    {
      src: trip,
      alt: "Fun & Entertainment",
      title: t('fun'),
      description: t('fun_des'),
      prop: 4,
      category: "Fun",
    },
    {
      src: byye,
      alt: "Emotional Goodbyes",
      title: t('emotional'),
      description: t('emotional_des'),
      prop: 5,
      category: "Love",
    },
    {
      src: lifetraining,
      alt: "Parent Training",
      title: t('parent_edu'),
      description: t('parent_des'),
      prop: 6,
      category: "Training",
    },
  ]

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {galleryItems.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
        >
          <Link to={`/more/${item.prop}`} className="block group">
            <div className="relative rounded-xl overflow-hidden shadow-lg">
              <div className="aspect-w-16 aspect-h-12">
                <img
                  src={item.src || "/placeholder.svg"}
                  alt={item.alt}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <span className="inline-block px-3 py-1 bg-[#FCCD2A] text-sm font-semibold text-gray-800 rounded-full mb-2">
                    {item.category}
                  </span>
                  <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-white/80 text-sm">{item.description}</p>
                </div>
              </div>
            </div>
          </Link>
        </motion.div>
      ))}
    </div>
  )
}

export default Gallery

