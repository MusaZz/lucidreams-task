import React from "react";

const Information = () => {
  return (
    <div className="flex items-center justify-between py-2 pl-5 pr-4 bg-gray-100 jss12 rounded-b">
      <div className="flex items-center">
        <div className=" text-2xl ">1,650</div>
      </div>
      <div className="cursor-pointer">
        <div className="rounded bg-gray-900 bg-opacity-5 px-2 py-1 text-12">
          Mar 2024
        </div>
      </div>
    </div>
  );
};

export default Information;
