import CTA from "./CTA";
import Event from "./Event";
import NewHero from "./NewHero";

 const HomePage = () => {
  return (
    <div className="overflow-x-hidden">
      {/* <Hero /> */}
      <NewHero/>  
      <CTA/>
      <Event/>
      {/* <Map/> */}
    </div>
  );
}

export default HomePage;