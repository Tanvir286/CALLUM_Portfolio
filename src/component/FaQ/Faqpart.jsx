
const Faqpart = (props) => {
 
    let{icon,title} = props;

    return (
        <div className="flex items-center text-3xl mt-10 text-[#8B8682] pb-5 border-b-4 mr-14">
            <span className="mr-5">{icon}</span>
            <span className=""> {title}</span> 
        </div>
    );
};

export default Faqpart;