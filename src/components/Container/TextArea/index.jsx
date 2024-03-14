// Store
import { useSearchStore, useListStore } from "../../../store";

// React Hookss
import { useRef } from "react";

const TextArea = ({ data }) => {
  // Search State
  const search = useSearchStore((state) => state.search);
  const setSearch = useSearchStore((state) => state.setSearch);

  // List State
  const list = useListStore((state) => state.list);
  const setList = useListStore((state) => state.setList);
  const deleteLastItem = useListStore((state) => state.deleteLastItem);

  // Use Ref
  const input = useRef();

  const inputFocused = () => {
    input.current.focus();
  };

  const handleKeyDown = (event) => {
    if (event.key === "Backspace" && search === "") {
      deleteLastItem();
    }
  };
  return (
    <div className="w-full">
      <div className="p-4 flex flex-col gap-4">
        <div className="  items-center flex-wrap border  rounded leading-8 p-2 flex">
          <ul className=" flex items-center flex-wrap">
            {list &&
              list.map((item) => (
                <li
                  className=" bg-gray-900 w-fit bg-opacity-10 px-2 py-1 rounded border leading-8 font-medium border-gray-300 text-gray-900 "
                  key={item}
                >
                  {item}
                </li>
              ))}
            <div className=" relative">
              <input
                ref={input}
                value={search}
                onKeyDown={handleKeyDown}
                onChange={(event) => {
                  setSearch(event.target.value);
                }}
                className=" w-full focus:outline-none leading-10 "
              ></input>
              {search.length > 1 && (
                <ul className=" absolute left-0 flex flex-col py-3 px-2 w-fit bg-white shadow-lg">
                  {data.slice(0, 5).map((d) => (
                    <li
                      onClick={() => {
                        setList(d.name);
                        setSearch("");
                        inputFocused();
                      }}
                      className=" hover:bg-[#B7E0FF] duration-200 cursor-pointer rounded p-2"
                      key={d.id}
                    >
                      <div className=" flex items-center gap-64">
                        <span className=" font-sans">{d.name}</span>
                        <span className=" text-gray-600 texs-sm font-mono">
                          {d.category}
                        </span>
                      </div>
                      <div className=" text-xs text-gray-600 font-mono">
                        value is {d.value}
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </ul>
        </div>
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
