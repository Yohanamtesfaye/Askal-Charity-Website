import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaLightbulb, FaBullseye, FaHandsHelping } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

const VisionMissionPurpose = () => {
  const { t } = useTranslation();
 

  return (
   <div className="container mx-auto px-4 -mt-50 relative z-10 my-8">
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
           <li>{t("Purpose1.5")}</li>
          <li>{t("Purpose1.6")}</li>
          <li>{t("Vision1.5")}</li>
          <li>{t("Vision1.6")}</li>

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
         
        </ul>
      </div>
    </motion.div>
  </div>
</div>
  );
};

export default VisionMissionPurpose;