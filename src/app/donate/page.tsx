import Image from "next/image";
import donate from "../assets/img/main/3d-hand-puts-gold-coin-donation-box.png";
import DonationForm from "./components/DonationForm";
export default function Donate() {
  return (
    <>
      <div className="min-h-[100vh] mx-auto  container pt-[90px] p-3">
        <div className="lg:grid lg:grid-cols-2 ">
          <div className="">
            <Image src={donate} alt="adsf" />
          </div>
          
            <DonationForm />
        </div>
      </div>
    </>
  );
}
