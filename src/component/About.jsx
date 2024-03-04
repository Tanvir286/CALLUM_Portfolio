
import Heading from './heading/Heading';
import Aboutbottom from './about-bottom/Aboutbottom';

const About = () => {
    return (
        <div className='py-20'>

             {/*=================
                  Heading Part 
              =================*/}
            <Heading title1="About Me"  title2="Know Me More"/>

             {/*=================
                  Heading Part 
              =================*/}


             {/*==========================
                  About middel Part 
            ===========================*/}
            <div className="container mx-auto mt-10">
            <div className="flex justify-between">
                <div className='w-[65%]'>
                   <h3 className='text-5xl font-open'>Hi, I'm <span className='font-bold'>Callum Smith</span></h3>
                   <p className="text-3xl mt-3 font-open">I'm a designer & developer with a passion for web design. I enjoy developing simple, clean and slick websites that provide real value to the end user. Thousands of clients have procured exceptional results while working with me. Delivering work within time and budget which meets client’s requirements is our moto.</p>
                </div>
                <div className='w-[35%]  text-center relative after:content-["] after:absolute after:top-[50%] after:left-[50%] after:-translate-x-[50%] after:-translate-y-[50%]  after:bg-primary after:w-[140px] after:h-[140px] after:rounded-full after:-z-10'>
                      <h1 className='text-52'> 22</h1>
                      <h1 className='text-3xl'>Years of <span className="font-bold">Experiance</span></h1>
                      
                </div>
            </div>
            </div>
        
             {/*==========================
                  About middel Part 
            ===========================*/}

             {/*==========================
                   About  Last Part  
            ===========================*/}



            <div className="container mx-auto mt-24">
                 <div className="flex justify-between flex-start">
                 <Aboutbottom  title1="Name" title2="Callum Smith"/>
                 <Aboutbottom title1="Email" title2="chat@callum.com" title2Style="underline"/>
                 
                 <Aboutbottom title1="Date of birth" title2="11 November,1987"/>
                 <Aboutbottom title1="From" title2="Los Angeles,USA"/>
                 </div>
            </div>
            
    
        </div>
    );
};

export default About;