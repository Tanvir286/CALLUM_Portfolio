

const Aboutbottom = (props) => {
 
     let{title1,title2,title2Style} = props

    return (
        <div>
            <p className="text-slate-400 text-2xl">{title1}</p>
            <h4 className={`${title2Style} text-3xl font-bold`}>{title2}</h4>
        </div>
    );
};

export default Aboutbottom;