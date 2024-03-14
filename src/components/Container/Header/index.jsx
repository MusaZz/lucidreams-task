// Zustand
import { useToggleStore } from "../../../store";

const Header = () => {
  const isEnable = useToggleStore((state) => state.isEnable);
  const toggleEnable = useToggleStore((state) => state.toggleEnable);

  return (
    <div className="flex h-8 items-center rounded-t pr-2 bg-gray-900 bg-opacity-10 text-gray-900">
      <button
        onClick={toggleEnable}
        className={`m-1 p-1 text-gray-600 hover:text-gray-700 focus:outline-none transform transition-transform duration-100 ${
          isEnable ? "rotate-0" : "-rotate-90"
        } `}
      >
        <svg viewBox="0 0 16 16" className="h-4 w-4 fill-current">
          <path d="M13 6l-5 5-5-5h10z"></path>
        </svg>
      </button>
      <div className="flex-grow overflow-hidden truncate whitespace-nowrap py-3 pr-3 text-12 font-medium">
        <div className="flex flex-col">
          <div className="flex">
            <div className="cursor-pointer">Revenue</div>
          </div>
        </div>
      </div>
      <div className=" flex items-center gap-2">
        <button className=" w-4 h-4">
          <svg viewBox="0 0 16 16" className="icon-16" fill="#909DAE">
            <path
              fillRule="evenodd"
              d="M8 0a8 8 0 100 16A8 8 0 008 0zm1.909 3.858c-.137.516-.442 1.062-1.462 1.062-.746 0-1.097-.295-1.097-.767 0-.177.046-.414.092-.59.137-.517.441-1.063 1.462-1.063.746 0 1.096.295 1.096.767 0 .177-.046.413-.091.59zM8.494 13l.303-1.495h-.813L9.128 5.99h-1.93l-1.157 5.607a1.565 1.565 0 00-.041.334C6 12.572 6.496 13 7.24 13h1.254z"
            ></path>
          </svg>
        </button>
        <button className="w-4 h-4  ">
          <svg viewBox="0 0 16 16" className="icon-16" fill="#909DAE">
            <path d="M4 8c0-1.1-.9-2-2-2s-2 .9-2 2 .9 2 2 2 2-.9 2-2zm2 0c0 1.1.9 2 2 2s2-.9 2-2-.9-2-2-2-2 .9-2 2zm8 2c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"></path>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Header;
