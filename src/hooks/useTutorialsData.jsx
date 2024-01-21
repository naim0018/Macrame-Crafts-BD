import { useQuery } from "react-query";
import useAxiosPublic from "./useAxiosPublic";

const useTutorialsData = () => {
  const axiosPublic = useAxiosPublic();
  const tutorials = useQuery({
    queryKey: ["tutorials"],
    queryFn: async () => {
      const { data } = await axiosPublic.get("/tutorials");
      return data;
    },
  });

  return tutorials;
};

export default useTutorialsData;
