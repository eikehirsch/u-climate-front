import React, { useState } from "react";
import StyledHome from "./style.ts";
import NavBar from "../../components/navBar/NavBar";
import HomeFirstSection from "../../components/homeFirstSection/HomeFirstSection.jsx";
import HomeSecondSection from "../../components/homeSecondSection/HomeSecondSection.jsx";
import HomeThirdSection from "../../components/homeThirdSection/HomeThirdSection.jsx";
import HomeFourthSection from "../../components/homeFourthSection/HomeFourthSection.jsx";
import HomeFifthSection from "../../components/homeFifthSection/HomeFifthSection.jsx";
import HomeFooter from "../../components/homeFooter/HomeFooter.jsx";
import CookiesReactModal from "../../components/cookies-modal/cookies-react-modal/CookiesReactModal.jsx";
import { BiCookie } from "react-icons/bi";

const Home = () => {
  const [isCookiesModalOpened, setIsCookiesModalOpened] = useState(false);

  return (
    <StyledHome>
      <div className="flexCenter innerWidth home-wrapper">
        <div
          onClick={() => setIsCookiesModalOpened(true)}
          className="flexCenter cookie-icon"
        >
          <BiCookie />
        </div>
        {isCookiesModalOpened && (
          <CookiesReactModal
            isCookiesModalOpened={isCookiesModalOpened}
            setIsCookiesModalOpened={setIsCookiesModalOpened}
          />
        )}
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
