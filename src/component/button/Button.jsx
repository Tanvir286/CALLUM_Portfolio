

const Button = (props) => {

    let{title,btnStyle} = props;

    return (
        
    <a className={` ${btnStyle}  text-center font-open font-bold text-lg px-7 py-3 bg-blue text-red-400  capitalize  my-8 inline-block`} href="">{title}</a>
           
    );
};

export default Button;