

const Resumepart = (props) => {

   let{title1, title2,para} = props;

    return (
        <div>
              <h1 className="font-open font-semibold text-3xl mb-4"> {title1}</h1>
              <h2 class="font-open text-2xl mb-4">{title2}</h2>
              <p className="font-open text-2xl mb-4 pr-4 pb-6 border-b-4 text-slate-400">{para}</p>   
                
        </div>
    );
};

export default Resumepart;