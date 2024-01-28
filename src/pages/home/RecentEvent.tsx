import SectionTitles from "@/components/ui/SectionTitles";

const RecentEvent = () => {
  return (
    <div>
      <SectionTitles
        heading="Recent Events"
        subHeading="Step into the world of our latest events, where each moment tells a unique story of joy, connection, and celebration."
      ></SectionTitles>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
        <div className="w-72 mx-auto bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
          <img
            src="https://images.unsplash.com/photo-1646753522408-077ef9839300?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NjZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
            alt="Product"
            className="h-[220px] w-full mx-auto object-cover rounded-md"
          />
          <div className="my-2">
            <p className="text-lg font-bold k truncate block capitalize">
              Product Name
            </p>
            <div className="flex items-center">
              <p className="my-3 text-[#475569]">By someone</p>
            </div>
          </div>
        </div>
        <div className="w-72 mx-auto bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
          <img
            src="https://images.unsplash.com/photo-1646753522408-077ef9839300?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NjZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
            alt="Product"
            className="h-[220px] w-[266px] mx-auto object-cover rounded-md"
          />
          <div className=" w-72">
            <p className="text-lg font-bold k truncate block capitalize">
              Product Name
            </p>
            <div className="flex items-center">
              <p className="my-3 text-[#475569]">By someone</p>
            </div>
          </div>
        </div>
        <div className="w-72 mx-auto bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
          <img
            src="https://images.unsplash.com/photo-1646753522408-077ef9839300?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NjZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
            alt="Product"
            className="h-[220px] w-[266px] mx-auto object-cover rounded-md"
          />
          <div className=" w-72">
            <p className="text-lg font-bold k truncate block capitalize">
              Product Name
            </p>
            <div className="flex items-center">
              <p className="my-3 text-[#475569]">By someone</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentEvent;
