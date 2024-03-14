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

  // Fetch the Data
  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ["data"],
    queryFn: async () => {
      const response = await fetch(
        `https://652f91320b8d8ddac0b2b62b.mockapi.io/autocomplete`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await response.json();
      return data;
    },
  });

  return (
    <div className=" w-1/2 flex flex-col rounded border border-solid bg-white">
      <Header />
      <Information />
      {isEnable && <TextArea isLoading={isLoading} data={data} refetch={refetch} />}
    </div>
  );
};

export default Container;
