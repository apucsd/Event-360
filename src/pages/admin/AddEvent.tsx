import { Button } from "@/components/ui/button";
import getImageURL from "@/lib/getImageURL";
import { SubmitHandler, useForm } from "react-hook-form";

import CreatableSelect from "react-select/creatable";
type TEvent = {
  eventName: string;
  image: FileList;
  date: Date;
  location: string;
  description: string;
  features: string[];
  organizerEmail: string;
  organizerName: string;
};
const AddEvent = () => {
  const { handleSubmit, setValue, register } = useForm<TEvent>();

  const onSubmit: SubmitHandler<TEvent> = async (data: TEvent) => {
    const imageURL = await getImageURL(data.image[0]);
    data.image = imageURL;
    console.log(imageURL);
    console.log(data);
  };
  const eventOptions = [
    { value: "catering", label: "Catering Service" },
    { value: "photography", label: "Photography Service" },
    { value: "audio-visual", label: "Audio-Visual Setup" },
    { value: "decorations", label: "Decorations Service" },
    { value: "transportation", label: "Transportation Service" },
    { value: "entertainment", label: "Entertainment Booking" },
  ];
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
            Add Event
          </Button>
        </div>
      </form>
    </div>
  );
};

export default AddEvent;
