import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import teach2 from "../assets/Images/teach3.jpg";
import teach3 from "../assets/Images/teach2.jpg";
import teach4 from "../assets/Images/teach4.jpg";
import teach5 from "../assets/Images/teach5.jpg";
import teach6 from "../assets/Images/teach6.jpg";
import teach7 from "../assets/Images/teach7.jpg";
import dancing from '../assets/Images/dancing.jpg'
import dancing1 from '../assets/Images/dancing1.jpg'
import dancing2 from '../assets/Images/dancing2.jpg'
import donation from "../assets/Images/donation.png";
import model from '../assets/Images/model.jpg'
import model1 from '../assets/Images/model1.jpg'
import model2 from '../assets/Images/model2.jpg'
import art from '../assets/Images/art.jpg'
import art2 from '../assets/Images/art2.jpg'
import art3 from '../assets/Images/art3.jpg'
import karate from '../assets/Images/karate.jpg'
import karate1 from '../assets/Images/karate1.jpg'
import karate2 from '../assets/Images/karate2.jpg'
import trip from '../assets/Images/trip.jpg';
import trip1 from '../assets/Images/trip1.jpg';
import trip2 from '../assets/Images/trip2.jpg';
import trip3 from '../assets/Images/trip3.jpg';
import trip4 from '../assets/Images/trip4.jpg';
import trip5 from '../assets/Images/trip5.jpg';
import trip6 from '../assets/Images/trip6.jpg';
import trip7 from '../assets/Images/trip7.jpg';
import trip8 from '../assets/Images/trip8.jpg';
import trip9 from '../assets/Images/triip.jpg';
import trip10 from '../assets/Images/triiip.jpg';
import bye from '../assets/Images/bye.jpg';
import bye1 from '../assets/Images/bye1.jpg';
import bye2 from '../assets/Images/bye2.jpg';
import bye3 from '../assets/Images/bye3.jpg';
import bye4 from '../assets/Images/bye4.jpg';
import bye5 from '../assets/Images/bye5.jpg';
import bye6 from '../assets/Images/bye6.jpg';
import donate from '../assets/Images/donate.jpg';
import donate1 from '../assets/Images/donate1.jpg';
import donate2 from '../assets/Images/donate2.jpg';
import donate3 from '../assets/Images/donate3.jpg';
import donate4 from '../assets/Images/donate4.jpg';
import donate5 from '../assets/Images/donate5.jpg';
import donate6 from '../assets/Images/donate6.jpg';
import donate7 from '../assets/Images/donate7.jpg';
import donate8 from '../assets/Images/donate8.jpg';
import donate9 from '../assets/Images/donate9.jpg';

const More = () => {
  const { id } = useParams();  
  const [selectedImage, setSelectedImage] = useState(null);
  const imagesMap = {
    1: [
      { src: teach2, alt: "Teach Kids" },
      { src: teach3, alt: "Teach Kids" },
      { src: teach4, alt: "Teach Kids" },
      { src: teach5, alt: "Teach Kids" },
      { src: teach6, alt: "Teach Kids" },
      { src: teach7, alt: "Teach Kids" },
    ],
    2: [
      { src: donate, alt: "Chrismass Gift 2015 E.C 2022" },
      { src: donate1, alt: "Chrismass Gift 2015 E.C 2022" },
      { src: donate2, alt: "Chrismass Gift 2015 E.C 2022" },
      { src: donate3, alt: "Chrismass Gift 2015 E.C 2022" },
      { src: donate4, alt: "Chrismass Gift 2015 E.C 2022" },
      { src: donate5, alt: "Chrismass Gift 2016 E.C 2023" },
      { src: donate6, alt: "Chrismass Gift 2016 E.C 2023" },
      { src: donate7, alt: "Chrismass Gift 2016 E.C 2023" },
      { src: donate8, alt: "Chrismass Gift 2016 E.C 2023" },
      { src: donate9, alt: "Chrismass Gift 2016 E.C 2023" },
    ],
    3: [
      { src: dancing, alt: "Dance Training" },
      { src: model, alt: "Modeling Training" },
      { src: karate, alt: "Taekwondo Training" },
      { src: art2, alt: "Art Training" },
      { src: dancing1, alt: "Dance Training" },
      { src: model1, alt: "Modeling Training" },
      { src: karate1, alt: "Taekwondo Training" },
      { src: art3, alt: "Art Training" },
      { src: dancing2, alt: "Dance Training" },
      { src: model2, alt: "Modeling Training" },
      { src: karate2, alt: "Taekwondo Training" },
      { src: art, alt: "Art Training" },


    ],
    4: [
      { src: trip1, alt: "Trip" },
      { src: trip3, alt: "Trip" },
      { src: trip4, alt: "Trip" },
      { src: trip10, alt: "Trip" },
      { src: trip5, alt: "Trip" },
      { src: trip6, alt: "Trip" },
      { src: trip7, alt: "Trip" },
      { src: trip8, alt: "Trip" },
      { src: trip, alt: "Trip" },
      { src: trip2, alt: "Trip" },
      { src: trip9, alt: "Trip" },
      { src: trip, alt: "Trip" },


    ],
    5: [
      { src: bye, alt:  "Kids saying goodbye to the volunteering teachers at the end of the year" },
      { src: bye2, alt: "Kids saying goodbye to the volunteering teachers at the end of the year" },
      { src: bye1, alt: "Kids saying goodbye to the volunteering teachers at the end of the year" },
      { src: bye3, alt: "Kids saying goodbye to the volunteering teachers at the end of the year" },
      { src: bye4, alt: "Kids saying goodbye to the volunteering teachers at the end of the year" },
      { src: bye5, alt: "Kids saying goodbye to the volunteering teachers at the end of the year" },
      { src: bye6, alt: "Kids saying goodbye to the volunteering teachers at the end of the year" },
      { src: bye, alt:  "Kids saying goodbye to the volunteering teachers at the end of the year" },


    ],
   
  };

  const imagesToShow = imagesMap[id] || [];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-100">
    <div className="container mx-auto px-4 py-12">
      <h2 className="text-4xl font-bold text-green-600 mb-8 text-center">
        Our Gallery
      </h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {imagesToShow.map((image, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
          >
            <img
              src={image.src || "/placeholder.svg"}
              alt={image.alt}
              onClick={() => setSelectedImage(image)}
              className="w-full h-72 object-cover transform group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
              <p className="text-white text-sm">{image.alt}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
          >
            <motion.div
              initial={{ scale: 0.5 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.5 }}
              className="relative max-w-4xl w-full bg-white rounded-xl overflow-hidden"
              onClick={e => e.stopPropagation()}
            >
              <img
                src={selectedImage.src || "/placeholder.svg"}
                alt={selectedImage.alt}
                className="w-full max-h-[80vh] object-contain"
              />
              <div className="p-6 bg-white">
                <h3 className="text-xl font-semibold text-green-600 mb-2">
                  Description
                </h3>
                <p className="text-gray-700">{selectedImage.alt}</p>
                <button
                  onClick={() => setSelectedImage(null)}
                  className="absolute top-4 right-4 bg-white/80 hover:bg-white text-gray-800 rounded-full p-2 transition-colors duration-200"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  </div>
);
};
export default More;
