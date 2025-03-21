// i18n.js (for example)
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
  .use(initReactI18next) // initialize the react-i18next module
  .init({
    resources: {
      en: {
        translation: {
          "protect_kids":"Protect Our Kids",
          "protect_des":"Dedicated to ensuring a safe and nurturing environment for children everywhere",
          "shape_kids":"Shape Our Kids",
          "shape_des":"Provide educational resources and support to help children thrive",
          "support_kids":"Support Our Kids",
          "support_des":"Offering comprehensive care including food, shelter, and medical assistance",
          "slide_1":"Even if we don't have it, we share what we have.",
          "homeintro1": "There can be no keener revelation of a society\'s soul than the way in which it treats its children.",
          "slide_2":"Providing Basic Needs",
          "homeintro2":"We ensure children have access to food, shelter, and education.",
          "slide_3":"Creating Joyful Memories",
          "homeintro3":"We organize trips and events to bring happiness to children.",
          "slide_4":"Give a Little, Change a Lot",
          "slide_5":"Spread Love and Kindness",
          "slide_6":"Support Their Future",
          "slide_7":"Volunteer your time, labor, and ideas to make a difference in the lives of children.",
          
          "visit_us":"Visit Us",
          "address":" In Addis Ababa, Saris Adey Ababa, near the Total fuel station",
          "read_more":"Read More",
          "join_us":"Join Us",
          "difference":"Volunteer your time, labor, and ideas to make a difference in the lives of children.",
          "donate_now":"Donate Now",
          "donate_online":"Donate Online",
          "join_now":"Join Now",
          "cbe":"CBE",
          "telebirr":"Telebirr",
          "tel":"Tel",
          "invest_hope":"Investing in Hope",
          "our_mission":"Our mission is to empower vulnerable children by providing essential resources like food, shelter, medical care, and education. We aim to protect them from harm and create a safe environment for their growth. By sharing what we have, we help them realize their potential.",
          "we_do":" What we're Doing",
          "explore_more":"Explore More",

        
          
        }
      },
      am: {
        translation: {
          "protect_kids":"ልጆቻችንን መጠበቅ",
          "protect_des":"በየቦታው ላሉ ህጻናት ደህንነቱ የተጠበቀ እና ተንከባካቢ አካባቢን ለማረጋገጥ ቁርጠኛ ነው።",
          "shape_kids":"ልጆቻችንን ማነፅ",
          "shape_des":"ልጆች እንዲበለጽጉ የትምህርት መርጃዎችን እና ድጋፍን ይስጡ",
          "support_kids":"ልጆቻችንን ማገዝ",
          "support_des":"የምግብ፣ የመጠለያ እና የህክምና እርዳታን ጨምሮ አጠቃላይ እንክብካቤን መስጠት",
          "homeintro1":"የአንድ ማህበረሰብ ነፍስ ልጆቹን ከሚይዝበት መንገድ የበለጠ ጠለቅ ያለ መገለጥ ሊኖር አይችልም።",
          "homeintro2":"ልጆች ምግብ፣ መጠለያ እና ትምህርት እንዲያገኙ እናረጋግጣለን።",
          "homeintro3":"ለልጆች ደስታን ለማምጣት ጉዞዎችን እና ዝግጅቶችን እናዘጋጃለን.",
          "visit_us":"ይጎብኙን",
          "address":"ሳሪስ አዲስ አበባ ከቶታል ነዳጅ ማደያ አጠገብ",
          "read_more":"ተጨማሪ ያንብቡ",
          "join_us":"ቤተሰብ ይሁኑ",
          "difference":"በልጆች ህይወት ላይ ለውጥ ለማድረግ ጊዜዎን፣ ጉልበትዎን እና ሃሳቦችዎን በፈቃደኝነት ይስጡ።",
          "donate_now":"አሁን ይለግሱ",
          "donate_online":"በቀጥታ ይለግሱ",
          "join_now":"አሁን ይቀላቀሉ",
          "cbe":"ሲቢኢ",
          "telebirr":"ቴሌብር",
          "tel":"ስልክ",
          "invest_hope":"በተስፋ ኢንቨስት ማድረግ",
          "our_mission":"የእኛ ተልዕኮ እንደ ምግብ፣ መጠለያ፣ ህክምና እና ትምህርት ያሉ አስፈላጊ ግብአቶችን በማቅረብ ተጋላጭ ህጻናትን ማብቃት ነው። ዓላማችን እነርሱን ከጉዳት ለመጠበቅ እና ለእድገታቸው አስተማማኝ አካባቢ ለመፍጠር ነው። ያለንን በማካፈል አቅማቸውን እንዲገነዘቡ እናግዛቸዋለን",
          "we_do":"የምንሰራቸው ስራዎች",
          "explore_more":"ተጨማሪ ይመልከቱ",


          
        }
      },
      // Add more languages here
    },
    lng: "en", // default language
    fallbackLng: "en", // fallback language in case the selected one is not available
    interpolation: {
      escapeValue: false, // React already escapes strings
    },
  });

export default i18n;
