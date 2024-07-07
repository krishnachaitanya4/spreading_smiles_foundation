import { IonIcon } from '@ionic/react';
import {fastFoodOutline,close,bookOutline,trophyOutline,medicalOutline, medical} from 'ionicons/icons'
export default function SubHero(){
    return(<div className='py-2 container mx-auto bg-black-50 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
        <div className='text-center max-w-[300px] p-5 m-5 mx-auto' >
                    <span className='text-violet-700 h-[25px]'><IonIcon icon={fastFoodOutline} className='text-5xl'/></span>
                    <h5 className='text-lg font-extrabold text-violet-700'>Healthy Food</h5>
                    <p className='text-sm text-center'>Filling plates with nourishment, one smile at a time.</p>
        </div>

        <div className='text-center max-w-[300px] p-5 m-5 mx-auto' >
                    <span className='text-violet-700 h-[25px]'><IonIcon icon={bookOutline} className='text-5xl'/></span>
                    <h5 className='text-lg font-extrabold text-violet-700'>Education</h5>
                    <p className='text-sm text-center'>Empowering futures through quality education and scholarships.</p>
        </div>

        <div className='text-center max-w-[300px] p-5 m-5 mx-auto' >
                    <span className='text-violet-700 h-[25px]'><IonIcon icon={trophyOutline} className='text-5xl'/></span>
                    <h5 className='text-lg font-extrabold text-violet-700'>Awareness programs</h5>
                    <p className='text-sm text-center'>Inspiring change with awareness campaigns on vital issues.</p>
        </div>

        <div className='text-center max-w-[300px] p-5 m-5 mx-auto' >
                    <span className='text-violet-700 h-[25px]'><IonIcon icon={medicalOutline} className='text-5xl'/></span>
                    <h5 className='text-lg font-extrabold text-violet-700'>Medicine</h5>
                    <p className='text-sm text-center'>Ensuring healthcare access for all through clinics and assistance.</p>
        </div>
    </div>);
}