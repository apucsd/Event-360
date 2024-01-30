/* eslint-disable @typescript-eslint/no-explicit-any */
import { serviceOptions } from "@/constant/constant";
import CreatableSelect from "react-select/creatable";
import { Button } from "./button";
import { AlertDialogCancel } from "./alert-dialog";
type TServiceForm = {
  onSubmit: any;
  handleSubmit: any;
  register: any;
  setValue: any;
  loading: any;
};
const ServiceForm = ({
  onSubmit,
  handleSubmit,
  register,
  setValue,
  loading,
}: TServiceForm) => {
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-white shadow-md h-full w-full mx-auto rounded px-8 pt-6 pb-8 flex flex-col"
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
          />
        </div>
      </div>
      <p className="text-red text-xs italic">Please fill out this field.</p>
      <div className="-mx-3 md:flex justify-end mb-2">
        <div className="flex items-center justify-end gap-2">
          <AlertDialogCancel className="ms-auto">Cancel</AlertDialogCancel>
          <Button disabled={loading} className="w-full  ms-auto" type="submit">
            {loading ? "Updating Service..." : "Update Service"}
          </Button>
        </div>
      </div>
    </form>
  );
};

export default ServiceForm;
