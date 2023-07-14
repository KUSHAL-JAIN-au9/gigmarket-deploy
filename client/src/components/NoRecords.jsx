import React from "react";

const NoRecords = ({ title }) => {
  return (
    <div
      className=" bg-white h-[300px] dark:bg-gray-800  dark:text-white text-black text-center grid place-items-center"
      key={"no-records"}
    >
      <h1 className="font-bold text-lg">{`No ${title} found`}</h1>
    </div>
  );
};

export default NoRecords;
