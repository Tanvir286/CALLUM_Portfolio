


const Heading = (props) => {

    let{title1,title2} = props;
    return (
        <div className="text-center">
             <span className="bg-secondary py-1 px-2">{title1}</span>
             <h3 className="font-open text-6xl mt-3 font-bold">{title2}</h3>
        </div>
    );
};

export default Heading;