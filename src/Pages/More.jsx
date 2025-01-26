import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import teach2 from "../assets/Images/teach3.jpg";
import teach3 from "../assets/Images/teach2.jpg";
import teach4 from "../assets/Images/teach4.jpg";
import teach5 from "../assets/Images/teach5.jpg";
import teach6 from "../assets/Images/teach6.jpg";
import teach7 from "../assets/Images/teach7.jpg";
import dancing from '../assets/Images/dancing.jpg';
import dancing1 from '../assets/Images/dancing1.jpg';
import dancing2 from '../assets/Images/dancing2.jpg';
import model from '../assets/Images/model.jpg';
import model1 from '../assets/Images/model1.jpg';
import model2 from '../assets/Images/model2.jpg';
import art from '../assets/Images/art.jpg';
import art2 from '../assets/Images/art2.jpg';
import art3 from '../assets/Images/art3.jpg';
import karate from '../assets/Images/karate.jpg';
import karate1 from '../assets/Images/karate1.jpg';
import karate2 from '../assets/Images/karate2.jpg';
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
// import buhe from '../assets/Images/buhe.MP4';
// import buhe1 from '../assets/Images/buhe1.MP4';
// import buhe2 from '../assets/Images/buhe2.MP4';
// import buhe3 from '../assets/Images/buhe3.MP4';
// import buhe4 from '../assets/Images/buhe4.mp4';
// import buhe5 from '../assets/Images/buhe5.mp4';
// import buhe6 from '../assets/Images/buhe6.mp4';

// // Import video files
// import video1 from '../assets/Videos/video1.mp4';
// import video2 from '../assets/Videos/video2.mp4';

const More = () => {
  const { id } = useParams();
  const [selectedMedia, setSelectedMedia] = useState(null);

  const mediaMap = {
    1: [
      { type: 'image', src: teach2, alt: "Teach Kids" },
      { type: 'image', src: teach3, alt: "Teach Kids" },
      { type: 'image', src: teach4, alt: "Teach Kids" },
      { type: 'image', src: teach5, alt: "Teach Kids" },
      { type: 'image', src: teach6, alt: "Teach Kids" },
      { type: 'image', src: teach7, alt: "Teach Kids" },
    ],
    2: [
      { type: 'image', src: donate, alt: "Chrismass Gift 2015 E.C 2022" },
      { type: 'image', src: donate1, alt: "Chrismass Gift 2015 E.C 2022" },
      { type: 'image', src: donate2, alt: "Chrismass Gift 2015 E.C 2022" },
      { type: 'image', src: donate3, alt: "Chrismass Gift 2015 E.C 2022" },
      { type: 'image', src: donate4, alt: "Chrismass Gift 2015 E.C 2022" },
      { type: 'image', src: donate5, alt: "Chrismass Gift 2016 E.C 2023" },
      { type: 'image', src: donate6, alt: "Chrismass Gift 2016 E.C 2023" },
      { type: 'image', src: donate7, alt: "Chrismass Gift 2016 E.C 2023" },
      { type: 'image', src: donate8, alt: "Chrismass Gift 2016 E.C 2023" },
      { type: 'image', src: donate9, alt: "Chrismass Gift 2016 E.C 2023" },
    ],
    3: [
      { type: 'image', src: dancing, alt: "Dance Training" },
      { type: 'image', src: model, alt: "Modeling Training" },
      { type: 'image', src: karate, alt: "Taekwondo Training" },
      { type: 'image', src: art2, alt: "Art Training" },
      { type: 'image', src: dancing1, alt: "Dance Training" },
      { type: 'image', src: model1, alt: "Modeling Training" },
      { type: 'image', src: karate1, alt: "Taekwondo Training" },
      { type: 'image', src: art3, alt: "Art Training" },
      { type: 'image', src: dancing2, alt: "Dance Training" },
      { type: 'image', src: model2, alt: "Modeling Training" },
      { type: 'image', src: karate2, alt: "Taekwondo Training" },
      { type: 'image', src: art, alt: "Art Training" },
    ],
    4: [
      { type: 'image', src: trip1, alt: "Trip" },
      { type: 'image', src: trip3, alt: "Trip" },
      { type: 'image', src: trip4, alt: "Trip" },
      { type: 'image', src: trip10, alt: "Trip" },
      { type: 'image', src: trip5, alt: "Trip" },
      { type: 'image', src: trip6, alt: "Trip" },
      { type: 'image', src: trip7, alt: "Trip" },
      { type: 'image', src: trip8, alt: "Trip" },
      { type: 'image', src: trip, alt: "Trip" },
      { type: 'image', src: trip2, alt: "Trip" },
      { type: 'image', src: trip9, alt: "Trip" },
      { type: 'image', src: trip, alt: "Trip" },
    ],
    5: [
      { type: 'image', src: bye, alt: "Kids saying goodbye to the volunteering teachers at the end of the year" },
      { type: 'image', src: bye2, alt: "Kids saying goodbye to the volunteering teachers at the end of the year" },
      { type: 'image', src: bye1, alt: "Kids saying goodbye to the volunteering teachers at the end of the year" },
      { type: 'image', src: bye3, alt: "Kids saying goodbye to the volunteering teachers at the end of the year" },
      { type: 'image', src: bye4, alt: "Kids saying goodbye to the volunteering teachers at the end of the year" },
      { type: 'image', src: bye5, alt: "Kids saying goodbye to the volunteering teachers at the end of the year" },
      { type: 'image', src: bye6, alt: "Kids saying goodbye to the volunteering teachers at the end of the year" },
      { type: 'image', src: bye, alt: "Kids saying goodbye to the volunteering teachers at the end of the year" },
    ],
    // 6: [
    //   { type: 'video', src: video1, alt: "Video 1 Description" },
    //   { type: 'video', src: video2, alt: "Video 2 Description" },
    // ],
  };

  const mediaToShow = mediaMap[id] || [];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-100">
      <div className="container mx-auto px-4 py-12">
        <h2 className="text-4xl font-bold text-green-600 mb-8 text-center">
          Our Gallery
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {mediaToShow.map((media, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              {media.type === 'image' ? (
                <img
                  src={media.src || "/placeholder.svg"}
                  alt={media.alt}
                  onClick={() => setSelectedMedia(media)}
                  className="w-full h-72 object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
              ) : (
                <video
                  src={media.src}
                  alt={media.alt}
                  onClick={() => setSelectedMedia(media)}
                  className="w-full h-72 object-cover transform group-hover:scale-105 transition-transform duration-300"
                  controls
                />
              )}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-white text-sm">{media.alt}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Modal */}
        <AnimatePresence>
          {selectedMedia && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedMedia(null)}
              className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
            >
              <motion.div
                initial={{ scale: 0.5 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.5 }}
                className="relative max-w-4xl w-full bg-white rounded-xl overflow-hidden"
                onClick={e => e.stopPropagation()}
              >
                {selectedMedia.type === 'image' ? (
                  <img
                    src={selectedMedia.src || "/placeholder.svg"}
                    alt={selectedMedia.alt}
                    className="w-full max-h-[80vh] object-contain"
                  />
                ) : (
                  <video
                    src={selectedMedia.src}
                    alt={selectedMedia.alt}
                    className="w-full max-h-[80vh] object-contain"
                    controls
                    autoPlay
                  />
                )}
                <div className="p-6 bg-white">
                  <h3 className="text-xl font-semibold text-green-600 mb-2">
                    Description
                  </h3>
                  <p className="text-gray-700">{selectedMedia.alt}</p>
                  <button
                    onClick={() => setSelectedMedia(null)}
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