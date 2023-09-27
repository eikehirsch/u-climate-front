import React from "react";
import StyledHome from "./style.ts";
import NavBar from "../../components/navBar/NavBar";
import HomeFirstSection from "../../components/homeFirstSection/HomeFirstSection.jsx";
import HomeSecondSection from "../../components/homeSecondSection/HomeSecondSection.jsx";
import HomeThirdSection from "../../components/homeThirdSection/HomeThirdSection.jsx";
import HomeFourthSection from "../../components/homeFourthSection/HomeFourthSection.jsx";
import HomeFifthSection from "../../components/homeFifthSection/HomeFifthSection.jsx";
import HomeFooter from "../../components/homeFooter/HomeFooter.jsx";

const Home = () => {
  return (
    <StyledHome>
      <div className="flexCenter innerWidth home-wrapper">
        <NavBar />
        <HomeFirstSection />
        <HomeSecondSection />
        <HomeThirdSection />
        <HomeFourthSection />
        <HomeFifthSection />
      </div>
      <HomeFooter />
    </StyledHome>
  );
};

export default Home;
