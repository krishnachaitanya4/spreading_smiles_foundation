import Image, { StaticImageData } from "next/image";
import Link from "next/link";
interface Data{
    photo:StaticImageData,
    heading:string,
    description:string,
    link:string
}
export default function EventCard(props:Data) {
    const {photo,heading,description,link} = props;
  return (
    <>
      <div className="min-h-[388px] p-3 relative w-[90%] my-3 md:w-[290px] overflow-hidden bg-violet-50 shadow-lg rounded-lg mx-auto">
        {/* Image */}
        <div className="h-[50%]  rounded-lg overflow-hidden">
          <Image
            src={photo}
            alt="alt img"
            className="rounded-lg"
            style={{ objectFit: "cover" }}
          />
        </div>
        <p className="font-bold text-gray-600 py-3">{heading}</p>
        <p className="text-xs">{description}</p>
        <Link className="text-sm text-violet-700 font-semibold" href={`/events${link}`}><u>Read More</u></Link>
      </div>
    </>
  );
}
