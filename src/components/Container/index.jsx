// Components
import Header from "./Header";
import Information from "./Information";
import TextArea from "./TextArea";

// Zustand
import { useToggleStore } from "../../store";
import { useQuery } from "@tanstack/react-query";

const Container = () => {
  // Zustank State
  const isEnable = useToggleStore((state) => state.isEnable);

  const { data } = useQuery({
    queryKey: ["data"],
    queryFn: () => {
      fetch(`https://652f91320b8d8ddac0b2b62b.mockapi.io/autocomplete`)
        .then((response) => response.json())
        .then((data) => console.log(data));
    },
  });
  return (
    <div className=" w-1/2 flex flex-col rounded border border-solid bg-white">
      <Header />
      <Information />
      {isEnable && <TextArea />}
    </div>
  );
};

export default Container;
