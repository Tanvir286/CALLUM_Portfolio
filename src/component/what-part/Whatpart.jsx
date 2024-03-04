

const Whatpart = (props) => {

    let{icon,title1,title2} = props;
    return (
        <div className="text-center  py-10 px-8 ">
            <div className="text-8xl text-primary inline-block">{icon}</div>

            <h1 className="font-open text-3xl font-bold mt-4 ">{title1}</h1>
            <p className="font-open text-2xl text-center mt-2">{title2}</p>
        </div>
    );
};

export default Whatpart;
