/* eslint-disable @typescript-eslint/no-explicit-any */
import CreatableSelect from "react-select/creatable";
import { Button } from "./button";
import { AlertDialogCancel } from "./alert-dialog";
import { eventOptions } from "@/constant/constant";
type TEventForm = {
  onSubmit: any;
  handleSubmit: any;
  register: any;
  setValue: any;
  loading: any;
};
const EventForm = ({
  onSubmit,
  handleSubmit,
  register,
  setValue,
  loading,
}: TEventForm) => {
  return (
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
            required
            {...register("eventName")}
            className="input"
            type="text"
            placeholder="Corporate event..."
          />
        </div>
        <div className="md:w-1/2 px-3">
          <label className="label" htmlFor="grid-last-name">
            Date/Time
          </label>
          <input
            required
            className="input"
            {...register("date")}
            id="price"
            type="date"
            placeholder="01/01/2030"
          />
        </div>
      </div>
      <div className="-mx-3 md:flex mb-6">
        <div className="md:w-1/2 px-3 mb-6 md:mb-0">
          <label className="label" htmlFor="grid-first-name">
            Organizer Name
          </label>
          <input
            required
            {...register("organizerName")}
            className="input"
            type="text"
            placeholder="Corporate event..."
          />
        </div>
        <div className="md:w-1/2 px-3">
          <label className="label" htmlFor="grid-last-name">
            Organizer Email
          </label>
          <input
            required
            className="input"
            {...register("organizerEmail")}
            id="price"
            type="email"
            placeholder="example@gmail.com"
          />
        </div>
      </div>
      <div className="-mx-3 md:flex mb-6">
        <div className="md:w-1/2 px-3 mb-6 md:mb-0">
          <label className="label">Event Image/Logo</label>
          <input
            required
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
            required
            className="input"
            {...register("location")}
            id="price"
            type="text"
            placeholder="Gulshan 1"
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
          />
        </div>
      </div>
      <div className="-mx-3 md:flex mb-6">
        <div className="md:w-full px-3">
          <label className="label" htmlFor="description">
            Features
          </label>
          {/* <input
          required type="hidden" {...register("features")} /> */}
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
      <div className="-mx-3 md:flex justify-end mb-2">
        <div className="flex items-center justify-end gap-2">
          <AlertDialogCancel className="ms-auto">Cancel</AlertDialogCancel>
          <Button disabled={loading} className="w-full  ms-auto" type="submit">
            {loading ? "Updating Event..." : "Update Event"}
          </Button>
        </div>
      </div>
    </form>
  );
};

export default EventForm;
