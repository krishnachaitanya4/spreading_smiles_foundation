import {
  checkmarkCircle,
  nutritionOutline,
  bookOutline,
  desktopOutline,
  easelOutline,
  book,
} from "ionicons/icons";
import FundCard from "./funds_sub/FundCard";
import FundPoint from "./funds_sub/FundPoint";
export default function Funds() {
  return (
    <div className="py-6 bg-violet-50 w-full">
      <div className="container md:grid grid-cols-2 h-full mx-auto">
        <div className="h-full px-3">
          <div className="flex justify-center">
            <div className="w-[220px] mt-10  me-2 md:me-10 ">
              <FundCard 
                heading="Nutritious Meals for All"
                data="providing nourishing meals to orphanages, old age homes, and vulnerable communities."
                icon= {nutritionOutline}
              />
              <FundCard 
                heading="Education for Every Child"
                data="Through book donations and educational resources, we're shaping a brighter future."
                icon={bookOutline}
              />
            </div>
            <div className="w-[220px] ">
              
            <FundCard 
                heading="Raising Awareness"
                data="We conduct awareness programs on crucial issues, empowering communities with knowledge and inspiring positive action.                "
                icon={easelOutline}
              />
            <FundCard 
                heading="Education as a Lifeline"
                data="Education breaks the cycle of poverty. We're investing in the future by offering scholarships, tutoring, and educational resources"
                icon={desktopOutline}
              />
              
            </div>
          </div>
        </div>
        <div className="h-full flex items-center p-3 md:p-4 max-w-[600px] mx-auto">
          <div>
            <h2
              className={`md:text-3xl mt-3 text-xl font-bold text-violet-700`}
            >
              How We Use Your Donations?
            </h2>
            <p className={`md:mt-4 mt-2 text-gray-600 mb-4`}>
              Your donations make a direct impact by providing food to those in
              need, books to underprivileged children, supporting awareness
              programs, tackling child malnutrition, and enabling education for
              disadvantaged youth.
            </p>
            <FundPoint data='Providing Nutritious Meals to Those in Need' />
            <FundPoint data='Donating Books for Underprivileged Children' />
            <FundPoint data='Supporting Awareness Programs on Critical Issues' />
            <FundPoint data='Empowering Disadvantaged Youth Through Education' />
            
            <button className="bg-violet-700 mt-5 shadow-lg font-medium hover:bg-violet-600 rounded-full w-200 text-white px-5 py-2">
              Donate Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
