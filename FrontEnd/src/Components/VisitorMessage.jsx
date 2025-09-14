import React from "react";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import sente from "../assets/Images/sente.png";
import pep2 from "../assets/Images/pep2.avif";
import pep3 from "../assets/Images/pep3.png";
import { useTranslation } from "react-i18next";

const VisitorMessage = () => {
  const { t } = useTranslation();

  const visitors = [
    {
      name: "Sentayehu Kefle",
      title: "Comedian",
      message:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      img: sente,
    },
    {
      name: "Visitor 2",
      title: "Musician",
      message:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
      img: pep2,
    },
    {
      name: "Visitor 3",
      title: "Actor",
      message:
        "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi.",
      img: pep3,
    },
  ];

  return (
    <section className="bg-gradient-to-b from-[#399918]/10 to-white py-20">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-[#399918] mb-4">
            {t("visitor_message")}
          </h2>
          <div className="w-24 h-1 bg-[#FCCD2A] mx-auto rounded-full"></div>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {visitors.map((visitor, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
            >
              {/* Visitor Image */}
              <div className="flex justify-center mb-6">
                <img
                  src={visitor.img}
                  alt={visitor.name}
                  className="w-24 h-24 rounded-full border-4 border-[#399918] object-cover"
                />
              </div>

              {/* Quote */}
              <FaQuoteLeft className="text-[#FCCD2A] text-2xl mx-auto mb-4" />
              <p className="text-gray-600 italic mb-4">{visitor.message}</p>
              <FaQuoteRight className="text-[#FCCD2A] text-2xl mx-auto mb-4" />

              {/* Name & Title */}
              <h3 className="text-lg font-bold text-[#399918]">
                {visitor.name}
              </h3>
              <p className="text-sm text-gray-500">{visitor.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VisitorMessage;
