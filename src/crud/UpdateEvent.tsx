import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { TEvent } from "@/types/types";
import { axiosInstance } from "@/lib/axiosInstance";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { SquarePen } from "lucide-react";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "sonner";
import getImageURL from "@/lib/getImageURL";
import EventForm from "@/components/ui/EventForm";
const UpdateEvent = ({ id }: { id: string }) => {
  const [loading, setLoading] = useState(false);
  const { reset, handleSubmit, setValue, register } = useForm<TEvent>();
  const queryClient = useQueryClient();

  const { mutate } = useMutation<TEvent, void, TEvent>({
    mutationFn: (data) => {
      return axiosInstance.patch(`/events/${id}`, data);
    },
    onMutate: () => {
      setLoading(true);
    },
    onSuccess: () => {
      setLoading(false);
      toast.success("Event updated successfully");
      return queryClient.invalidateQueries({ queryKey: ["events"] });
    },
    onError: () => {
      toast.error("Something went wrong while updating");
      setLoading(false);
    },
  });

  const onSubmit: SubmitHandler<TEvent> = async (data: TEvent) => {
    const imageURL = await getImageURL(data.image[0] as File);
    data.image = imageURL;
    if (imageURL) {
      mutate(data);

      reset();
    } else {
      toast.error("Something went wrong while uploading image");
    }
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button
          variant="ghost"
          className="w-full flex items-center justify-start"
        >
          <SquarePen className="text-green-500 text-xs p-1"></SquarePen>
          <span>Update</span>
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent className=" w-full max-w-5xl h-[98vh] overflow-auto">
        <EventForm
          onSubmit={onSubmit}
          register={register}
          handleSubmit={handleSubmit}
          setValue={setValue}
          loading={loading}
        ></EventForm>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default UpdateEvent;
