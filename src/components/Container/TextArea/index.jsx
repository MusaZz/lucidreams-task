import React from "react";

const TextArea = () => {
  return (
    <div className="w-full">
      <div className="p-4 flex flex-col gap-4">
        <input className=" w-full focus:outline-none  border rounded leading-8 p-2"></input>
        <div className=" flex w-fit cursor-pointer gap-2 items-center text-blue-600 hover:text-blue-700">
          <svg viewBox="0 0 16 16" className=" w-6" fill="#3D7CFF">
            <path d="M13 9H9v4H7V9H3V7h4V3h2v4h4v2z"></path>
          </svg>
          <div>Add Time Segment</div>
        </div>
      </div>
    </div>
  );
};

export default TextArea;
