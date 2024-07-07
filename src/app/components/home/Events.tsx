'use client'
import EventCard from "./event_sub/EventCard";
import events from "./eventsData";
import { usePathname } from "next/navigation";
export default function Events() {
  const path  = usePathname();
  const ev = events.map((event)=>(
        <EventCard 
        photo={event.photo} 
        heading={event.heading} 
        description={event.description} 
        link={event.link}
        key={event.heading}
        />
  ))
  return (
    <div className={`py-3 md:py-10 ${path==='/'&& 'md:my-12'}`}>
      <div className="flex justify-center items-center p-3 md:p-4 max-w-[800px] mx-auto">
        <div className="">
          <h2
            className={`md:text-3xl mt-3  text-xl md:text-center font-bold text-violet-700`}
          >
            {path==='/'?'Our Impactful Events':'Our Events'}
          </h2>
          {path==='/' && <p className={`md:mt-4 md:text-center mt-2 text-gray-600 mb-4`}>
            Explore our diverse range of events designed to uplift, educate, and
            nourish our community. From celebrating children's happiness to
            offering career guidance, we are dedicated to creating positive
            change and spreading smiles through every event we organize.
          </p>}
        </div>
      </div>
      <div className="container lg:max-w-[1400px] mx-auto grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 items-center my-5">
        {/*Cards here*/}
        {ev}
      </div>
    </div>
  );
}
