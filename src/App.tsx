import MainLayout from "./layouts/MainLayout";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    AOS.init({
      // Global settings here...
    });
  }, []);
  return (
    <>
      <MainLayout></MainLayout>
    </>
  );
}

export default App;
