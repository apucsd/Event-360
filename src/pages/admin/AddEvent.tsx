import { Button } from "@/components/ui/button";
import { eventOptions } from "@/constant/constant";
import { axiosInstance } from "@/lib/axiosInstance";
import getImageURL from "@/lib/getImageURL";
import { TEvent } from "@/types/types";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

import CreatableSelect from "react-select/creatable";
import { toast } from "sonner";

const AddEvent = () => {
  const [loading, setLoading] = useState(false);
  const { mutate } = useMutation<TEvent, void, TEvent>({
    mutationFn: (data) => {
      return axiosInstance.post("/events", data);
    },
    onMutate: () => {
      setLoading(true);
    },
    onError: () => {
      setLoading(false);
      toast.error("Error while adding event");
    },
    onSuccess: () => {
      setLoading(false);
      toast.success("Event added successfully");
    },
  });
  const { reset, handleSubmit, setValue, register } = useForm<TEvent>();

  const onSubmit: SubmitHandler<TEvent> = async (data: TEvent) => {
    const imageURL = await getImageURL(data.image[0]);
    data.image = imageURL;
    if (imageURL) {
      mutate(data);

      reset();
    } else {
      toast.error("Something went wrong while updating the image");
    }
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white lg:max-w-3xl md:max-w-4xl w-full mx-auto shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col my-2"
      >
        <div className="-mx-3 md:flex mb-6">
          <div className="md:w-1/2 px-3 mb-6 md:mb-0">
            <label className="label" htmlFor="grid-first-name">
              Event Name
            </label>
            <input
              {...register("eventName")}
              className="input"
              type="text"
              placeholder="Corporate event..."
              required
            />
          </div>
          <div className="md:w-1/2 px-3">
            <label className="label" htmlFor="grid-last-name">
              Date/Time
            </label>
            <input
              className="input"
              {...register("date")}
              id="price"
              type="date"
              placeholder="01/01/2030"
              required
            />
          </div>
        </div>
        <div className="-mx-3 md:flex mb-6">
          <div className="md:w-1/2 px-3 mb-6 md:mb-0">
            <label className="label" htmlFor="grid-first-name">
              Organizer Name
            </label>
            <input
              {...register("organizerName")}
              className="input"
              type="text"
              placeholder="Corporate event..."
              required
            />
          </div>
          <div className="md:w-1/2 px-3">
            <label className="label" htmlFor="grid-last-name">
              Organizer Email
            </label>
            <input
              className="input"
              {...register("organizerEmail")}
              id="price"
              type="email"
              placeholder="01/01/2030"
              required
            />
          </div>
        </div>
        <div className="-mx-3 md:flex mb-6">
          <div className="md:w-1/2 px-3 mb-6 md:mb-0">
            <label className="label">Event Image/Logo</label>
            <input
              {...register("image")}
              type="file"
              className="input py-2.5"
            />
          </div>
          <div className="md:w-1/2 px-3">
            <label className="label" htmlFor="grid-last-name">
              Location
            </label>
            <input
              className="input"
              {...register("location")}
              id="price"
              type="text"
              placeholder="Gulshan 1"
              required
            />
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
              required
            />
          </div>
        </div>
        <div className="-mx-3 md:flex mb-6">
          <div className="md:w-full px-3">
            <label className="label" htmlFor="description">
              Features
            </label>
            {/* <input type="hidden" {...register("features")} /> */}
            <CreatableSelect
              options={eventOptions}
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
          </div>
        </div>
        <p className="text-red text-xs italic">Please fill out this field.</p>
        <div className="-mx-3 md:flex mb-2">
          <Button className="w-full md:w-[20%] ms-auto" type="submit">
            {loading ? "Adding Event..." : " Add Event"}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default AddEvent;
