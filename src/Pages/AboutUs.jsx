import React from 'react'
import Slides from './Slides';
import Slideshow from '../Components/Slideshow';


const AboutUs = () => {
  return (
  <div className='bg-gray-200'>
         <div className="">
          {/* Section Container */}
          <div className="flex flex-col lg:flex-row mx-4 sm:mx-8 lg:mx-36 py-8 sm:py-12 space-y-6 lg:space-y-0 lg:space-x-12">
            
            {/* Image Section */}
            <div className="lg:w-1/2 flex flex-col">
              <div className="w-full h-64 sm:h-80 rounded-md shadow-lg shadow-gray-500 overflow-hidden">
                <Slideshow num={2} />
              </div>
              {/* <div className="p-4">
                <p className="text-2xl sm:text-3xl font-medium font-playfair text-center">
                  A place for Kids to Grow
                </p>
              </div> */}
            </div>

            {/* Text Section */}
            <div className="lg:w-1/2 font-nunito text-sm sm:text-base">
              <div className="pb-4">
                <p>
                  The main focus of Askal Charity Organization is children. We aim to provide children with essential needs and offer support in health care, education, and skill development, ensuring they have a stable future. Our goal is to help them grow into capable and responsible citizens who can contribute to their country. In addition to supporting the children, we also provide financial and vocational assistance to their parents or guardians, enabling them to overcome poverty and become self-sufficient. This is another key focus of our efforts.
                </p>
              </div>
              <div className="pb-4">
                <p>
                  To achieve our organization's goals, even though we occasionally find a few individual donors, we are committed to standing on our own. Instead of relying solely on external support, we are working to develop various income-generating methods. This enables us to be more self-sufficient and sustainable in our mission.
                </p>
              </div>
              <div className="mb-2">
                <p>
                  Our vision is to see all children nurtured in physical health, expanded in knowledge, and strengthened emotionally, so they can contribute to the country's lasting progress.
                </p>
              </div>
            </div>
          </div>

          {/* Divider Line */}
          <div className="w-3/4 sm:w-1/2 h-1 mx-auto border-t-4 mb-6 border-gray-300"></div>


        {/* we're helping part */}
        <div className=" flex-col lg:flex-row mx-4 sm:mx-8 lg:mx-36 py-10">
            {/* Heading Section */}
            <div className="text-green-600 font-inter text-2xl sm:text-3xl font-medium mb-6 text-center lg:text-left">
              HOW WE'RE HELPING
            </div>

            {/* Main Content Section */}
            <div className="lg:flex bg-white rounded-3xl shadow-lg">
              {/* Text Section */}
              <div className="lg:w-1/2 font-nunito text-sm flex flex-col">
                <div className="flex px-4 sm:px-8 py-6 pt-8">
                  <div className="h-10 border-r-4 border-green-600"></div>
                  <div className="px-4 sm:px-6">
                    Offering consistent educational support to children, helping them build foundational knowledge and skills.
                  </div>
                </div>
                <div className="flex px-4 sm:px-8 pb-6">
                  <div className="h-10 border-r-4 border-green-600"></div>
                  <div className="px-4 sm:px-6">
                    Focusing on identifying and nurturing each child's unique talents, encouraging them to explore their strengths.
                  </div>
                </div>
                <div className="flex px-4 sm:px-8 pb-6">
                  <div className="h-10 border-r-4 border-green-600"></div>
                  <div className="px-4 sm:px-6">
                    Life training for parents and adults, focusing on nurturing and developing children.
                  </div>
                </div>
                <div className="flex px-4 sm:px-8 pb-4">
                  <div className="h-10 border-r-4 border-green-600"></div>
                  <div className="px-4 sm:px-6">
                    Offering financial assistance, food, and basic necessities to those in need.
                  </div>
                </div>
              </div>

              {/* Image Section */}
              <div className="lg:w-1/2 h-64 sm:h-80 rounded-md shadow-lg overflow-hidden">
              <Slides />
              </div>
            </div>
          </div>


            {/* help with */}
            <div className=" flex-col lg:flex-row mx-4 sm:mx-8 lg:mx-36 py-10">
              {/* Heading Section */}
              <div className="text-green-600 font-inter text-2xl sm:text-3xl font-medium mb-6 text-center lg:text-left">
                YOU CAN HELP WITH
              </div>
              {/* Main Content Section */}
              <div className="lg:flex bg-white rounded-3xl shadow-lg">
                {/* Image Section */}
                <div className="lg:w-1/2 h-64 sm:h-80 rounded-md shadow-lg overflow-hidden">
                <Slides />
                </div>
                {/* Text Section */}
                <div className="lg:w-1/2 font-nunito text-sm flex flex-col">
                
                  <div className="flex px-4 sm:px-8 py-6 pt-8">
                    <div className="h-10 border-r-4 border-green-600"></div>
                    <div className="px-4 sm:px-6">
                    understanding their pain and offering them love, comfort,
                    and emotional support in times of hardship.                    </div>
                  </div>
                  <div className="flex px-4 sm:px-8 pb-6">
                    <div className="h-10 border-r-4 border-green-600"></div>
                    <div className="px-4 sm:px-6">
                    Volunteer services                    </div>
                  </div>
                  <div className="flex px-4 sm:px-8 pb-6">
                    <div className="h-10 border-r-4 border-green-600"></div>
                    <div className="px-4 sm:px-6">
                    Mobilizing and providing donations                    </div>
                  </div>
                  <div className="flex px-4 sm:px-8 pb-4">
                    <div className="h-10 border-r-4 border-green-600"></div>
                    <div className="px-4 sm:px-6">
                    Raising awareness about Askal by informing friends,
                    colleagues, and family members.                    </div>
                  </div>
                </div>

                
              </div>
            </div>
            {/* parteners part */}
        <div className='div 4'>
              
        </div>

        </div>
    </div>
  )
}

export default AboutUs