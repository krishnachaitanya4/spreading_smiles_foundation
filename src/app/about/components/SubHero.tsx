import React from "react";
import Image from "next/image";
import about from "../../assets/img/main/about-2.png";
const SubHero = () => {
  return (
    <div className="bg-gray-50 min-h-[65vh] flex items-center justify-center">
      <div className="container mx-auto md:grid grid-cols-2">
        <div className="h-full relative flex items-center p-3 md:p-4 max-w-[600px] mx-auto">
          <Image src={about} alt="about img" className="rounded-md" />
        </div>
        <div className="h-full flex items-center my-auto p-3 md:p-4 max-w-[600px] mx-auto">
          <div>
            <h2
              className={`md:text-3xl mt-3 text-xl font-semibold text-violet-700`}
            >
              Foundation's Story
            </h2>
            <p className={`md:mt-4 mt-2 text-justify text-gray-600 mb-4`}>
              In the heart of compassion and the spirit of making a difference,
              Spreading Smiles Foundation was born. Our journey began with a
              simple yet profound goal: to subscribe to universal humanitarian
              values and make the world a better place, one smile at a time. It
              all started with a spark of inspiration, a vision to create
              positive change, and the unwavering dedication of our founders. As
              we trace our steps back to our humble beginnings, we invite you to
              discover the story that ignited our mission and the journey that
              continues to inspire us each day.
            </p>

            <button className="bg-violet-700 mt-5  shadow-lg font-medium hover:bg-violet-600 rounded-full w-200 text-white px-5 py-2">
              Donate Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubHero;
