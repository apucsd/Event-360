const SectionTitles = ({
  heading = "This is Heading",
  subHeading = "This is Subheading",
}: {
  heading: string;
  subHeading: string;
}) => {
  return (
    <div className="text-center space-y-3 my-4">
      <h1 className="text-[64px] font-bold">{heading}</h1>
      <p className="text-[#566B84] max-w-[80ch] mx-auto">{subHeading}</p>
    </div>
  );
};

export default SectionTitles;
