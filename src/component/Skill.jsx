import Skillbar from "./skill-bar/Skillbar";
import Button from './button/Button';

const Skill = () => {
  return (
    <div className="container mx-auto py-20">
      <h3 className="mb-20 text-5xl font-bold text-start">My Skills</h3>
      <div className="skills flex justify-between items-center flex-wrap w-full">
        <div className="skill-bar w-[48%] text-start mb-[17px]">
          <Skillbar percent1="100%" percent2="100%" percent3="Web Design"/>
        </div>
        <div className="skill-bar w-[48%] text-start mb-[17px]">
          <Skillbar percent1="100%" percent2="100%"  percent3="HTML/CSS"/>
        </div>
        <div className="skill-bar w-[48%] text-start mb-[17px]">
          <Skillbar percent1="100%" percent2="100%" percent3="Javascript" />
        </div>
        <div className="skill-bar w-[48%] text-start mb-[17px]">
          <Skillbar percent1="100%" percent2="100%" percent3="React JS" />
        </div>
        <div className="skill-bar w-[48%] text-start mb-[17px]">
          <Skillbar percent1="100%" percent2="100%"  percent3="Angular Js"/>
        </div>
        <div className="skill-bar w-[48%] text-start mb-[17px]">
          <Skillbar percent1="100%" percent2="100%"  percent3="Next Js"/>
        </div>
      </div>
      <div className="text-center">
      <Button title="Download CV"
        btnStyle=" border border-4 !text-black !text-2xl border-black hover:bg-red-500 text-center"
      />
      </div>
      
    </div>
  );
};

export default Skill;