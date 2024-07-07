import user from "../../assets/img/main/user.jpg";
import founder from "../../assets/img/main/founder.jpg";
import PeopleCard from "./PeopleCard";
export default function People() {
  const data = [
    {
      photo: founder,
      heading: "Founder",
      description: "Mr. Nandineedi Satya Lakshman",
    },
  ];
  const admins = data.map((admin) => (
    <PeopleCard
      photo={admin.photo}
      heading={admin.heading}
      description={admin.description}
      key={admin.heading}
    />
  ));
  return (
    <div className="py-3 container mx-auto md:grid md:grid-cols-2 md:py-10 md:my-12">
      <div className="flex items-center p-3 md:p-4  mx-auto">
      <div>
            <h2
              className={`md:text-3xl mt-3 text-xl font-semibold text-violet-700`}
            >
              The Vissionary
            </h2>
            <p className={`md:mt-4 mt-2 text-base text-justify max-w-[600px] text-gray-600 mb-4`}>
              Spreading Smiles Foundation, NGO was initiated by the Founder "Mr. N. Satya lakshman" who has full
              of commitment and compassion in any kind of Activity or part of experiencing With his outstanding wisdom
              and excellence, he accomplished APSCHE Excellent awards - 2023 in the category of community service of 3<sup>rd</sup>
              ranked person. He serves the donations like food, masks and career guidance programs from past 5 years within single
              handled measures. Not only that, he earned a special position in his college ata a peak that nobody ever does it as student.
              He always knows and learns something new, approaches with clear cut way for any demandful situations.
            </p>
          </div>
      </div>
      <div className="mx-auto  gap-0 container  justify-center my-1">
        {/*Cards here*/}
        {admins}
      </div>
    </div>
  );
}
