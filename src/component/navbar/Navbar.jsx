import { FaBars } from "react-icons/fa6";

const Navbar = () => {
    return (
        <div className="container mx-auto  ">
              <div className="flex justify-between">
                <div className="w-1/2 mt-10 text-white text-4xl font-bold">
                    <h1>CALLUM</h1>
                </div>
                <div className="w-1/2 mt-10 text-white text-3xl font-semibold text-right">
                    <span>Menu ☴ </span>
                    
                </div>
              </div>
        </div>
    );
};

export default Navbar;