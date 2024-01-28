import Container from "@/components/ui/Container";
import Banner from "./Banner";
import Services from "./Services";
import EventItems from "./EventItems";
import Gallery from "./Gallery";
import Pricing from "./Pricing";

const Home = () => {
  return (
    <div className="">
      <Container>
        <Banner></Banner>
        <Services></Services>
        <EventItems></EventItems>
        <Gallery></Gallery>
        <Pricing></Pricing>
      </Container>
    </div>
  );
};

export default Home;
