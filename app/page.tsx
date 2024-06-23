import Footer from "@/components/home/Footer";
import Hero from "@/components/home/Hero";
import NavigationBar from "@/components/home/Nabar";
import Services from "@/components/home/Services";

export const runtime = "edge";

const Home = async () => {
  return (
    <>
      <NavigationBar />
      <Hero />
      <Services />
      <Footer />
    </>
  );
};

export default Home;
