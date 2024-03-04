import React from 'react';
import Faqpart from './FaQ/Faqpart';
import { FaChevronDown } from "react-icons/fa";
import { AiFillChrome } from "react-icons/ai";

const Faq = () => {
    return (
        <div className="container mx-auto py-28">
             <div className='flex justify-between'>
             
             <div className="w-[60%]">
                <span className='bg-primary px-6 py-2 text-xl'>FAQ</span>
                <h1 className='font-open text-6xl font-semibold mt-4 mb-20'>Have any questions?</h1>
                <div className="div">
                     <Faqpart title="What is Callum?" icon= {<FaChevronDown />} />
                     <Faqpart title="How Can I Help You?" icon= {<FaChevronDown />}/>
                     <Faqpart title="Simple process for workflow" icon= {<FaChevronDown />}/>
                     <Faqpart title="Is Callum a Multi-purpose templete" icon= {<FaChevronDown />}/>
                     <Faqpart title="Why responsive one page templte" icon= {<AiFillChrome />}/>
                </div>
                
             </div>
             <div className="w-[40%] mt-20">
                <img  className='w-full' src="https://harnishdesign.net/demo/react/callum/demo/images/faq.png" alt="" />
             </div>
            
             </div>
        </div>
        
    );
};

export default Faq;