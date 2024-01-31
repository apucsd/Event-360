import { axiosInstance } from "@/lib/axiosInstance";
import { TService } from "@/types/types";
import { useQuery } from "@tanstack/react-query";
const useServicesData = () => {
  const { data: services } = useQuery<TService[]>({
    queryKey: ["services"],
    queryFn: async () => {
      const res = await axiosInstance("/services");
      return res.data.result;
    },
  });
  return { services };
};

export default useServicesData;
