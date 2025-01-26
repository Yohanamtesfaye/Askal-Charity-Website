import React from "react"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import teach from "../assets/Images/teach.png"
import gift from "../assets/Images/gift.jpg"
import lifetraining from "../assets/Images/training.jpg"
import art from "../assets/Images/art.jpg"
import trip from "../assets/Images/triip.jpg"
import byye from '../assets/Images/byye.jpg'

const Gallery = () => {
  const galleryItems = [
    {
      src: teach,
      alt: "Teaching Kids",
      title: "Educational Programs",
      description: "Providing quality education and learning opportunities",
      prop: 1,
      category: "Education",
    },
    {
      src: gift,
      alt: "gifts",
      title: "Community Support",
      description: "Distributing essential supplies to families in need",
      prop: 2,
      category: "Support",
    },
    {
      src: art,
      alt: "Extra Carricular Activities",
      title: "Extra Curricular Activities ",  
      description: "Teaching valuable life skills for a better future",
      prop: 3,
      category: "Extra Curricular",
    },
    {
      src: trip,
      alt: "Fun & Entertainment",
      title: "Fun & Entertainment",
      description: "Ensuring children's mental health and well-being",
      prop: 4,
      category: "Fun",
    },
    {
      src: byye,
      alt: "Emotional Goodbyes",
      title: "Emotional Goobyes",
      description: "Emotional Goodbyes to the children Voulenteers have tought and loved",
      prop: 5,
      category: "Love",
    },
    {
      src: lifetraining,
      alt: "Parent Training",
      title: "Parent Education",
      description: "Supporting parents in child development",
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

