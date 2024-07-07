import Image from "next/image";
import data from "./components/EventData";
import Link from "next/link";
import { notFound } from "next/navigation";
interface Parameters {
  params: { event: string };
}
export default function Event({ params }: Parameters) {
  try {
    var x = params.event;
    const { photo, heading, description } = data[x];
    const d = description.map((d: string) => (
      <>
        <p>{d}</p>
        <br />
      </>
    ));
    return (
      <div className="p-2 pb-10">
        <div className="min-h-[20vh] bg-volet-50 flex items-center justify-center">
          <div className="md:text-center">
            <h5 className="text-gray-600 font-semibold py-3 text-center">
              <Link href="/">
                <u className="text-violet-700">Home /</u>
              </Link>{" "}
              <Link href="/events">
                <u className="text-violet-700">Events /</u>
              </Link>{" "}
              {x}
            </h5>
            <h1 className="text-xl md:text-2xl font-semibold text-violet-700">
              {heading}
            </h1>
          </div>
        </div>
        <div className="container mx-auto max-w-[95%] md:max-w-[900px]">
          <Image src={photo} alt="" className="w-auto mx-auto py-3 md:py-5" />
          <div className="text-justify my-3">{d}</div>
          <div className="text-center">
            <Link
              href={`/about`}
              className="mx-auto mb-4 bg-violet-700 shadow-lg font-medium hover:bg-violet-600 rounded-full w-200 text-white px-5 py-2"
            >
              Donate Now
            </Link>
          </div>
        </div>
      </div>
    );
  } catch {
    return notFound();
  }
}
