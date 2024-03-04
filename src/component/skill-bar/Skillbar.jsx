// Skillbar.js
const Skillbar = ({ percent1, percent2,percent3 }) => {
    return (
      <div className='w-full bg-[#e9ecef] h-[10px] rounded-3xl relative mb-10'>
        <div className={`w-[${percent1}] h-full rounded-3xl bg-primary`}>
          <div className="span absolute bottom-[5px] left-0 -top-12 text-2xl font-semibold">{percent3}</div>
          <div className="span absolute bottom-[5px] right-0 -top-12 text-2xl font-semibold">{percent2}</div>
        </div>
      </div>
    );
  };
  
  export default Skillbar;