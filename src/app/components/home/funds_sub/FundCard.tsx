import { IonIcon } from "@ionic/react";

interface Props{
    heading:string,
    data:string,
    icon:string
}
interface ic{
    icon:string
}

export default function FundCard(props:Props){
    const {heading,data,icon} = props;
    return(
        <div className="bg-white h-[250px] shadow-lg my-10 rounded-lg overflow-hidden">
                <div className="w-full h-[40%] bg-violet-200 flex items-center justify-center">
                  <IonIcon
                    icon={icon}
                    className="text-[40px] text-violet-700"
                  />
                </div>
                <div className="m-3">
                  <h5 className="text-base font-semibold text-violet-700 mb-2">
                    {heading}
                  </h5>
                  <p className=" md:text-xs text-xs text-gray-500">
                    {data}
                  </p>
                </div>
              </div>
    );
}