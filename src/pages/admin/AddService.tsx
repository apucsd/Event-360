import { Button } from "@/components/ui/button";
import getImageURL from "@/lib/getImageURL";
import { useMutation } from "@tanstack/react-query";
import { SubmitHandler, useForm } from "react-hook-form";
import CreatableSelect from "react-select/creatable";
import { toast } from "sonner";
import { useState } from "react";
import { TService } from "@/types/types";
import { axiosInstance } from "@/lib/axiosInstance";
import { serviceOptions } from "@/constant/constant";
const AddService = () => {
  const [loading, setLoading] = useState(false);
  const { handleSubmit, reset, setValue, register } = useForm<TService>();
  const { mutate } = useMutation<TService, void, TService>({
    mutationFn: (data) => {
      return axiosInstance.post("/services", data);
    },
    onSuccess: () => {
      toast.success("Service added successfully");
    },
    onError: () => {
      toast.error("something went wrong");
    },
  });
  const onSubmit: SubmitHandler<TService> = async (data: TService) => {
    setLoading(true);
    data.price = parseFloat(data.price as string);
    const imageURL = await getImageURL(data.image[0] as File);
    data.image = imageURL;
    if (imageURL) {
      mutate(data);
      setLoading(false);
      reset();
    } else {
      setLoading(false);
      toast.error("Something went wrong");
    }
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white shadow-md lg:max-w-3xl md:max-w-4xl w-full mx-auto rounded px-8 pt-6 pb-8 mb-4 flex flex-col my-2"
      >
        <div className="-mx-3 md:flex mb-6">
          <div className="md:w-1/2 px-3 mb-6 md:mb-0">
            <label className="label" htmlFor="grid-first-name">
              Service Name
            </label>
            <input
              {...register("serviceName")}
              className="input"
              type="text"
              placeholder="Corporate event..."
              required
            />
          </div>
          <div className="md:w-1/2 px-3">
            <label className="label" htmlFor="grid-last-name">
              Price
            </label>
            <input
              className="input"
              {...register("price")}
              id="price"
              type="number"
              placeholder="1000 ৳"
              required
            />
          </div>
        </div>
        <div className="-mx-3 md:flex mb-6">
          <div className="md:w-1/2 px-3">
            <label className="label" htmlFor="description">
              Features
            </label>

            <CreatableSelect
              options={serviceOptions}
              onChange={(selectedOptions) => {
                setValue(
                  "features",
                  selectedOptions.map((option) => option.label)
                );
              }}
              isMulti
              styles={{
                control: (baseStyles, state) => ({
                  ...baseStyles,
                  borderColor: state.isFocused ? "grey" : "#5901CB",
                  padding: state.isFocused ? "10px" : "10px",
                }),
              }}
            />
            <p className="text-red text-xs italic mt-2">
              You can create custom features.
            </p>
          </div>

          <div className="md:w-1/2 px-3">
            <label className="label">Event Image/Logo</label>
            <input {...register("image")} type="file" className="input" />
          </div>
        </div>

        <div className="-mx-3 md:flex mb-6">
          <div className="md:w-full px-3">
            <label className="label" htmlFor="description">
              Description
            </label>
            <textarea
              {...register("description")}
              className="input"
              placeholder="******************"
              rows={4}
              required
            />
          </div>
        </div>
        <p className="text-red text-xs italic">Please fill out this field.</p>
        <div className="-mx-3 md:flex mb-2">
          <Button
            disabled={loading}
            className="w-full md:w-[20%] ms-auto"
            type="submit"
          >
            {loading ? "Adding Service..." : "Add Service"}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default AddService;
