import Image from "next/image";
import Link from "next/link";
import React from "react";
import charity from "../../assets/img/main/4877806.png";
const SubHero2 = () => {
  return (
    <div className="p-5 mt-9 bg-violet-50">
      <div className={`container mx-auto md:my-14`}>
        <div>
          <div className="md:grid grid-cols-2">
            <div className="h-full flex items-center overflow-hidden justify-center  max-h-[450px]">
              <div className="h-full w-auto">
                <Image
                  src={charity}
                  className="h-full w-auto object-cover"
                  alt="about image"
                />
              </div>
            </div>
            <div className="h-full flex items-center md:p-4 max-w-[600px] mx-auto">
              <div>
                <h2
                  className={`md:text-3xl mt-3 text-xl font-bold text-violet-700`}
                >
                  Become a Smiles Ambassador
                </h2>
                <p className={`md:mt-4 mt-2 text-gray-600 mb-4`}>
                  Our events are made possible by the dedication of our
                  volunteers, who bring our initiatives to life. Join our team
                  and make a difference in your community. We welcome volunteers
                  from all walks of life who share our passion for spreading
                  smiles.
                </p>
                <Link
                  href={`/about`}
                  className="bg-violet-700 shadow-lg font-medium hover:bg-violet-600 rounded-full w-200 text-white px-5 py-2"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubHero2;
