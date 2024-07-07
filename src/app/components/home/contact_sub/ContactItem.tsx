import { locationSharp } from "ionicons/icons"
import { IonIcon } from "@ionic/react"
interface Data{
    icon:string,
    value: string
}
export default function ContactItem(props:Data){
    const {icon,value} = props;
    return(
        <div className="flex py-2 items-center ">
            <div className="rounded-full bg-violet-700 h-[45px] w-[45px] flex justify-center items-center">
                <IonIcon 
                icon={icon}
                className="font-bold text-violet-50 text-xl"
                />
            </div>
            <p className="ps-3 text-gray-600 text-sm">{value}</p>
        </div>
    )
}