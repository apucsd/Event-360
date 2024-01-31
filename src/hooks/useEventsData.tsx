import { axiosInstance } from "@/lib/axiosInstance";
import { TEvent } from "@/types/types";
import { useQuery } from "@tanstack/react-query";

const useEventsData = () => {
  const { data: events } = useQuery<TEvent[]>({
    queryKey: ["events"],
    queryFn: async () => {
      const res = await axiosInstance("/events");
      return res.data.result;
    },
  });

  return { events };
};
export default useEventsData;
