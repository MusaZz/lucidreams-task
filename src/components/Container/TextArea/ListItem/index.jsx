// Component
import Button from "./Button";

// React Hooks
import { useState } from "react";

const ListItem = ({ item, countInput, counter, setCounter }) => {
  const [activeInput, setActiveInput] = useState(false);

  const countInputFocused = () => {
    countInput.current.focus();
  };

  return (
    <li className=" bg-gray-900 flex items-center gap-2 w-fit bg-opacity-10 px-2 py-1 rounded border leading-8 font-medium border-gray-300 text-gray-900 ">
      <span>{item}</span>
      <span className=" w-0.5 h-4 bg-[#A0A6B3]"></span>
      {activeInput ? (
        <input
          ref={countInput}
          className="h-4 w-16 rounded border outline-none focus:outline-none border-gray-300"
          value={counter}
          onChange={(event) => {
            setCounter(event.target.value);
          }}
        ></input>
      ) : (
        <Button
          click={() => {
            setActiveInput(true);
            countInputFocused();
          }}
        />
      )}
    </li>
  );
};

export default ListItem;
