import Container from "@/components/ui/Container";
import Banner from "./Banner";
import Services from "./Services";
import EventItems from "./EventItems";

const Home = () => {
  return (
    <div className="">
      <Container>
        <Banner></Banner>
        <Services></Services>
        <EventItems></EventItems>
      </Container>
    </div>
  );
};

export default Home;
