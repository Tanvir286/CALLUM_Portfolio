import Heading from "./heading/Heading";

import Whatpart from './what-part/Whatpart';
import { LuPaintbrush } from "react-icons/lu";
import { GiAbstract050,GiBasketballBall} from "react-icons/gi";
import { HiAcademicCap,HiComputerDesktop,HiMiniVideoCamera  } from "react-icons/hi2";

const What = () => {
    return (
        <div className="py-20 bg-third">
              
            {/*=================
                  Heading Part 
              =================*/}
            <Heading title1="What i DO?"  title2="How I can help your next project"/>

            {/*=================
                Heading Part 
             =================*/}
          <div className="container text-center mx-auto mt-10">
            <div className="flex justify-between ">

                <div clasName="w-1/3 ">
                   <Whatpart title1="Graphic Design" title2="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text."  icon={<LuPaintbrush />} />
                </div>
                <div clasName="w-1/3">
                <Whatpart title1="Education Design" title2="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text." icon={<HiAcademicCap />} />

                </div>
                <div clasName="w-1/3">
                <Whatpart title1="Computer Design" title2="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text." icon={<HiComputerDesktop />} />

                </div>
              
              
             
            </div>
            <div className="flex justify-between ">

                <div clasName="w-1/3 ">
                <Whatpart title1="Videos Design" title2="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text." icon={<HiMiniVideoCamera />}/>

                </div>
                <div clasName="w-1/3">
                <Whatpart title1="Operating Design" title2="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text."  icon={<GiAbstract050 />} />

                </div>
                <div clasName="w-1/3">
                <Whatpart title1="Sporting Design" title2="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text."  icon={<GiBasketballBall />}/>

                </div>
              
              
             
            </div>
           
            </div>
        
       
           
         
          {/*=================
             Heading Part 
          =================*/}


        </div>
    );
};

export default What;