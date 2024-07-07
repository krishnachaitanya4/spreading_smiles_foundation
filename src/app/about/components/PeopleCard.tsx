import Image, { StaticImageData } from "next/image";
import Link from "next/link";
interface Data{
    photo:StaticImageData,
    heading:string,
    description:string
}
export default function PeopleCard(props:Data) {
    const {photo,heading,description} = props;
  return (
    <>
      <div className="min-h-[318px] md:min-h-[600px] p-3 text-center relative w-[90%] my-3 md:w-[490px] overflow-hidden bg-gray-100 shadow-2xl rounded-lg mx-auto">
        {/* Image */}
        <div className="h-[70%]  rounded-lg overflow-hidden">
          <Image
            src={photo}
            alt="alt img"
            className="rounded-lg"
            style={{ objectFit: "cover" }}
          />
        </div>
        <p className="font-bold text-xl text-gray-600 py-2">{heading}</p>
        <p className="text-base font-semibold text-gray-600">{description}</p>
      </div>
    </>
  );
}
