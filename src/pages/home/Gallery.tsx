import SectionTitles from "@/components/ui/SectionTitles";

const Gallery = () => {
  const galleryBulletPoints = [
    "Discover defining moments.",
    "Immerse in visually stunning Decor.",
    "Experience genuine joy Moments.",
    "Explore unique settings in Venues.",
    "Engage with dynamic performances.",
  ];
  return (
    <div className="relative my-20 py-10">
      <div className="grid grid-cols-12 justify-center place-items-center gap-5">
        <div className="col-span-12 md:col-span-6 lg:col-span-5 md:mt-20 p-4">
          <SectionTitles
            className="text-start space-y-6"
            heading="Gallery"
            subHeading="Explore the diversity of event locations in our Venue & Settings gallery. From elegant ballrooms to picturesque outdoor landscapes, each image tells a story of unique settings"
          ></SectionTitles>
          <div>
            <ul className="mt-6 space-y-1.5">
              {galleryBulletPoints.map((point, index) => (
                <li
                  key={index}
                  className="flex items-center gap-1.5 font-medium"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="flex-shrink-0 w-5 h-5 text-green-600 bg-white rounded-full p-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="col-span-12 md:col-span-6 lg:col-span-7 p-5 sm:p-8">
          <div className="columns-1 gap-5 sm:columns-2 sm:gap-8 md:columns-3 lg:columns-4 [&>img:not(:last-child)]:mt-8">
            <img
              className="md:hover:scale-[3] hover:rotate-2 transition-all duration-300 border shadow-2xl cursor-zoom-in"
              src="https://images.unsplash.com/photo-1480455454781-1af590be2a58?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
            <img
              className="md:hover:scale-[3] hover:rotate-2 transition-all duration-300 border shadow-2xl cursor-zoom-in"
              src="https://images.unsplash.com/photo-1439539698758-ba2680ecadb9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
            <img
              className="md:hover:scale-[3] hover:rotate-2 transition-all duration-300 border shadow-2xl cursor-zoom-in"
              src="https://images.unsplash.com/photo-1525352064100-c6a0fbfec4a5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
            <img
              className="md:hover:scale-[3] hover:rotate-2 transition-all duration-300 border shadow-2xl cursor-zoom-in"
              src="https://plus.unsplash.com/premium_photo-1681841639344-360d2a3afcf6?q=80&w=1789&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
            <img
              className="md:hover:scale-[3] hover:rotate-2 transition-all duration-300 border shadow-2xl cursor-zoom-in"
              src="https://media.istockphoto.com/id/1127706701/photo/hindi-wedding-ceremony.jpg?s=612x612&w=0&k=20&c=j3CikM6l_xjD3OG8Tm3QYgANNKtc-Zr40kHGlJbQY9g="
            />
            <img
              className="md:hover:scale-[3] hover:rotate-2 transition-all duration-300 border shadow-2xl cursor-zoom-in"
              src="https://media.istockphoto.com/id/1130344289/photo/indian-wedding-stage-decorations-with-colorful-flowers.jpg?s=612x612&w=0&k=20&c=VjJ9Yn013fF9VMIQdhDPk2kuzme1vqapRTb4meHQDrI="
            />
            <img
              className="md:hover:scale-[3] hover:rotate-2 transition-all duration-300 border shadow-2xl cursor-zoom-in"
              src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
            <img
              className="md:hover:scale-[3] hover:rotate-2 transition-all duration-300 border shadow-2xl cursor-zoom-in"
              src="https://media.istockphoto.com/id/1060437216/photo/desi-wedding.jpg?s=612x612&w=0&k=20&c=e1FOHKa3af44QYZeiDvMspNNVpREaBEDNcVdfeh-kKU="
            />
            <img
              className="md:hover:scale-[3] hover:rotate-2 transition-all duration-300 border shadow-2xl cursor-zoom-in"
              src="https://media.istockphoto.com/id/1334681862/photo/indian-couple-in-traditional-wedding-event-very-beautiful-moment.jpg?s=1024x1024&w=is&k=20&c=7SzRVdN4LFqyrRp9GghRfkdgl8NTDa2kZvl-k-qAy3Q="
            />
            <img
              className="md:hover:scale-[3] hover:rotate-2 transition-all duration-300 border shadow-2xl cursor-zoom-in"
              src="https://media.istockphoto.com/id/910335712/photo/family-having-indian-food.jpg?s=1024x1024&w=is&k=20&c=E8YU_GqCgSyE_Om9FNPPqk-AqzEOeDNVaPcLBI9UndE="
            />
            <img
              className="md:hover:scale-[3] hover:rotate-2 transition-all duration-300 border shadow-2xl cursor-zoom-in"
              src="https://source.unsplash.com/DFt3T5r_4FE"
            />
            <img
              className="md:hover:scale-[3] hover:rotate-2 transition-all duration-300 border shadow-2xl cursor-zoom-in"
              src="https://media.istockphoto.com/id/914807286/photo/indian-family-celebrating-a-birthday-party.jpg?s=1024x1024&w=is&k=20&c=bD6q4sQ0McSzMP98WQvJpGzl873FOkUOq4MHFMbOmQ8="
            />
          </div>
        </div>
      </div>
      <div className="md:w-[800px] h-full rounded-[999px] md:absolute hidden top-0 right-0 -z-10 blur-3xl bg-opacity-70 bg-gradient-to-r from-indigo-200 via-purple-200 to-fuchsia-400"></div>
    </div>
  );
};

export default Gallery;
