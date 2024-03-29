import Container from "@/components/ui/Container";
import Banner from "./Banner";
import Services from "./Services";
import EventItems from "./EventItems";
import Gallery from "./Gallery";
import Pricing from "./Pricing";
import Review from "./Review";
import RecentEvent from "./RecentEvent";
import InfoCard from "./InfoCard";
import { FAQ } from "./FAQ";

const Home = () => {
  return (
    <div className="">
      <Container>
        <Banner></Banner>
        <Services></Services>
        <EventItems></EventItems>
        <Gallery></Gallery>
        <Pricing></Pricing>
        <Review></Review>
        <RecentEvent></RecentEvent>
        <InfoCard></InfoCard>
        <FAQ></FAQ>
      </Container>
    </div>
  );
};

export default Home;
