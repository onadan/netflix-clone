import { useState } from "react";
import Hero from "../components/Hero";
import PageLoader from "../components/Loader";
import "../scss/home.scss";

const Home = () => {
  const [loader, setLoader] = useState(true);
  return (
    <>
      {loader && <PageLoader onLoad={setLoader} />}

      <Hero />

      {/* <div className="home">hello</div> */}
    </>
  );
};

export default Home;
