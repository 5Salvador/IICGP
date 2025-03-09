import React from "react";
import ProgramCard from "./ProgramCard";


const ProgramCardList = ({ programs, title }) => {
  return (

    <div className="flex flex-col md:p-20 my-20">
      <p className="font-semibold text-2xl md:text-3xl text-start p-2">{title}</p>
      <div className='flex flex-col md:flex-row md:flex-wrap gap-10 justify-center items-center p-6'>
    {/* // <div
    //   style={{
    //     display: "grid",
    //     gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    //     gap: "20px",
    //     padding: "10%",
    //     justifyContent: "center",
    //     alignItems: "center",
    //   }}
    // > */}
    
      {programs.map((program, index) => (
        <ProgramCard
          key={index}
          img={program.img}
          programName={program.programName}
          description={program.description}
        />
      ))}
    </div>

    </div>
  );
};

export default ProgramCardList;
