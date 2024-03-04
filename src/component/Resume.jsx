
import Heading from './heading/Heading';
import Resumepart from './resume-part/Resumepart';
const Resume = () => {
    return (
        <div className="py-14">
       {/*=================
            Heading Part 
       =================*/}
        <Heading title1="Resume"  title2="A summary of My Resume"/>

      {/*=================
         Heading Part 
      =================*/}

       <div className="container mx-auto mt-10">
            <div className="flex justify-between">
                <div className="w-1/2">
                    <h3 className="text-5xl font-open mb-8">MY Education</h3>
                    <div className="text-left border-s-8 ps-3 border-primary">
 
                         <Resumepart  
                         title1="Master in Computer Engineering"
                         title2="Harvard University / 2015 - 2017"
                         para="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the dummy text."
                         />
                         <Resumepart  
                         title1="Bachelor in Computer Engineering"
                         title2="University of California / 2014 - 2015"
                         para="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the dummy text."
                         />
                         <Resumepart  
                         title1="International Science"
                         title2="Harvard University / 2013 - 2014"
                         para="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the dummy text."
                         />
                       
                          
                          
                    </div>
                </div>
                <div className="w-1/2 ps-8">
                    <h3 className="text-5xl font-open mb-8">My Experience</h3>
                    <div className="text-left border-s-8 ps-3 border-primary">
                         <Resumepart  
                         title1="Sr. Font End Developer"
                         title2="Apple Inc / 2020 - current"
                         para="Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure."
                         />
                         <Resumepart  
                         title1="Jr. Font End Developer"
                         title2="Dribbble Inc / 2018 - 2020"
                         para="Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure."
                         />
                         <Resumepart  
                         title1="HTML Developer"
                         title2="Adobe Inc / 2017 - 2018"
                         para="Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure."
                         />

                    </div>
                </div>
            </div>
       </div>

        </div>
    );
};

export default Resume;