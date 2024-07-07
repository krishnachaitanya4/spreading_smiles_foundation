import Link from "next/link";
import React from "react";

const EventHero = () => {
  return (
    <div className="bg-violet-50">
      <div className="container max-w-[100vw] relative overflow-hidden min-h-[40vh] p-3 md:p-5 flex items-center justify-center mx-auto">
        {/* <div className="circle absolute bg-red-100 h-[100px] w-[100px] md:h-[150px] md:w-[150px] lg:h-[200px] z-[-1] lg:w-[200px] rounded-full left-[10px] bottom-[30px]"></div>
        <div className="circle absolute bg-green-100 h-[100px] w-[100px] md:h-[150px] md:w-[150px] lg:h-[300px] z-[-1] lg:w-[300px] rounded-full right-32 top-8"></div>
        <div className="circle absolute bg-blue-100 h-[100px] w-[100px] md:h-[150px] md:w-[150px] lg:h-[150px] z-[-1] lg:w-[150px] rounded-full left-80 top-2"></div>
       
        <div className="circle absolute bg-orange-100 h-[100px] w-[100px] md:h-[120px] md:w-[120px] lg:h-[150px] z-[-1] lg:w-[150px] rounded-full top-[0px] right-[40px] md:right-1/4"></div>
        */}

        <div className="text-center md:max-w-[800px]">
          <h5 className="text-gray-600 font-semibold"><Link href='/'><u className="text-violet-700">Home /</u></Link> Events</h5>
          <h1 className="my-3 text-xl md:text-5xl font-medium text-violet-700">
            Join Us at Our Next Event
          </h1>
          <p className="my-3 text-sm md:text-base text-gray-600 text-justify md:text-center">
            Explore our upcoming events and be part of something special. We
            regularly host a variety of activities, from community outreach
            programs to educational workshops and health initiatives. Check out
            the details below and mark your calendar. We can't wait to see you
            there!
          </p>
        </div>
      </div>
    </div>
  );
};

export default EventHero;
