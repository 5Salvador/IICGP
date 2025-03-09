import React from "react";

const ProgramCard = ({ img, programName, description }) => {
  return (
    <div className="flex flex-col  justify-around w-96 h-[620px] shadow-lg space-y-4 p-4">
      <div className="w-full flex items-center justify-center">
        <img src={img} alt="" className="w-full hover:shadow-2xl" />
      </div>
      <div className="flex flex-col justify-center p-2 space-y-2">
        <p className="text-2xl font-light text-center">{programName}</p>
        <p className="text-center font-medium  text-xl">{description}</p>
      </div>
    </div>
  );
};

export default ProgramCard;
