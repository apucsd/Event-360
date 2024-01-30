export type TService = {
  _id?: string;
  serviceName: string;
  image: FileList;
  description: string;
  price: string | number;
  features: string[];
};
