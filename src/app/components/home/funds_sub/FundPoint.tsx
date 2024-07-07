import { IonIcon } from "@ionic/react"
import { checkmarkCircle } from "ionicons/icons"
interface Props{
    data:string
}
export default function FundPoint(props:Props){
    const {data} = props;
    return(
        <div className="flex my-3 items-center text-gray-600 text-sm">
              <IonIcon
                icon={checkmarkCircle}
                className="text-base font-bold text-violet-700"
              />
              &nbsp;&nbsp;{data}
            </div>
    )
}