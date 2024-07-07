import React from "react";
import Image from "next/image";
import hands from "../../assets/img/main/hands.jpg";
const SubHero2 = () => {
  return (
    <div className="bg-violet-50 min-h-[65vh] flex items-center justify-center">
      <div className="container mx-auto md:grid grid-cols-2">
        <div className="h-full relative shadow-lg flex items-center max-w-[700px] mx-auto">
          <Image src={hands} alt="about img" className="rounded-md" />
        </div>
        <div className="h-full flex items-center my-auto p-3 md:p-4 max-w-[600px] mx-auto">
          <div>
            <h2
              className={`md:text-3xl mt-3 text-xl font-semibold text-violet-700`}
            >
              Leading the Way in Philanthropic Innovation
            </h2>
            <p className={`md:mt-4 mt-2 text-justify text-gray-600 mb-4`}>
              At Spreading Smiles Foundation, we believe in the power of
              innovation to drive positive change. Our commitment to making a
              difference goes beyond traditional approaches. We actively seek
              out and implement innovative initiatives that address pressing
              issues in our community.
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

export default SubHero2;
