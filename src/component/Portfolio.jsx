
import Heading from './heading/Heading';

const Portfolio = () => {
    return (
        <div className='py-32 bg-third'>

         {/*=================
              Heading Part 
          =================*/}
            <Heading title1="Portfolio"  title2="Some of my most recent projects"/>

          {/*=================
             Heading Part 
          =================*/}
          <div className="container mx-auto">
         
          <div className="mt-16 flex gap-6 justify-center font-open text-2xl font-bold p-4">
              <a href="" className=' border-b-8  border-primary'>Deatils</a>
              <a href="">Totall</a>
              <a href="">Mockups</a>
              <a href="">Youtube Videos</a>
              <a href="">Vimeo Videos</a>
          </div>

          <div className="flex justify-between mt-8 gap-y-5 flex-wrap">
              <div className="w-[30%]">
                   <img src="https://harnishdesign.net/demo/react/callum/demo/images/projects/project-1.jpg" alt="" />
              </div>
              <div className="w-[30%]">
                    <img src="https://harnishdesign.net/demo/react/callum/demo/images/projects/project-5.jpg" alt="" />
              </div>
              <div className="w-[30%]">
                <img src="https://harnishdesign.net/demo/react/callum/demo/images/projects/project-2.jpg" alt="" />

              </div>
              <div className="w-[30%]">
              <img src="https://harnishdesign.net/demo/react/callum/demo/images/projects/project-2.jpg" alt="" />
              </div>
              <div className="w-[30%]">
                    <img src="https://harnishdesign.net/demo/react/callum/demo/images/projects/project-1.jpg" alt="" />
              </div>
              <div className="w-[30%]">
                <img src="https://harnishdesign.net/demo/react/callum/demo/images/projects/project-5.jpg" alt="" />

              </div>
          </div>
          
          </div>

         


        </div>
    );
};

export default Portfolio;