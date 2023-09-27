import React, { useState, useEffect } from "react";
import StyleHomeFourthSection from "./style.ts";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import { sliderSettings } from "../../utils/common.js";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const HomeFourthSection = () => {
  const [usersFeedback, setUsersFeedback] = useState([]);

  const getUsersFeedback = async () => {
    const url = `http://localhost:8000/api/v1/usersFeedback`;

    try {
      await fetch(url)
        .then((response) => response.json())
        .then((data) => setUsersFeedback(data.data));
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getUsersFeedback();
  }, []);

  return (
    <StyleHomeFourthSection>
      <div className="flexColCenter">
        <h1 className="title">Feedback</h1>
        <p className="description">
          Levamos sempre o feedback do público como um norte para lapidar
          constantemente nossos serviços
        </p>
        <div className="flexCenter section-container">
          <Swiper
            autoplay={{
              delay: 10000,
              disableOnInteraction: false,
            }}
            modules={[Autoplay, Pagination, Navigation]}
            className="swiper"
            {...sliderSettings}
          >
            {usersFeedback !== undefined &&
              usersFeedback.length > 0 &&
              usersFeedback.map((user, index) => (
                <SwiperSlide key={index}>
                  <div className="flexStart swiper-card">
                    <img className="swiper-card-image" src={user.img} alt="" />
                    <div>
                      <h1 className="swiper-card-name">{user.name}</h1>
                      <h4 className="swiper-card-occupation">
                        {user.occupation}
                      </h4>
                      <p className="swiper-card-description">
                        "{user.feedback}"
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            <SliderButtons />
          </Swiper>
        </div>
      </div>
    </StyleHomeFourthSection>
  );
};

export default HomeFourthSection;

const SliderButtons = () => {
  const swiper = useSwiper();
  return (
    <div className="flexCenter swiper-buttons">
      <button onClick={() => swiper.slidePrev()}>&lt;</button>
      <button onClick={() => swiper.slideNext()}>&gt;</button>
    </div>
  );
};
