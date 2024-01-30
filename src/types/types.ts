export type TService = {
  _id?: string;
  serviceName: string;
  image: FileList | string;
  description: string;
  price: string | number;
  features: string[];
};
export type TEvent = {
  _id?: string;
  eventName: string;
  image: FileList | string;
  date: string;
  location: string;
  description: string;
  features: string[];
  organizerEmail: string;
  organizerName: string;
};
