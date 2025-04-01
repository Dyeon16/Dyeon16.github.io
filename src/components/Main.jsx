import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";
import mainImage from "../assets/main-slider.jpg";
import intro_1 from "../assets/intro-01.jpg";
import intro_2 from "../assets/intro-02.jpg";
import intro_3 from "../assets/intro-03.jpg";

import "./Main.css";

const Main = () => {
  return (
    <div className="main">
      <section className="main__slider">
        <h2 className="main__slider-title">MY SHOP</h2>
        <span className="main__slider-btn">
          <FontAwesomeIcon icon={faChevronLeft} size="xl" />
        </span>

        <div className="main__slider-container">
          <span className="main__slider-text">STYLE IN EVERY DAY</span>
          <div className="main__slider-image-container">
            <img
              className="main__slider-image"
              src={mainImage}
              alt="main slider image"
            />
          </div>
          <span className="main__slider-text">FOR SPRING SET-UP</span>
        </div>

        <span className="main__slider-btn">
          <FontAwesomeIcon icon={faChevronRight} size="xl" />
        </span>

        <div className="main__progress-bar">
          <div className="main__progress-bar-item main__progress-bar-item--visible"></div>
          <div className="main__progress-bar-item main__progress-bar-item--invisible"></div>
          <div className="main__progress-bar-item main__progress-bar-item--invisible"></div>
        </div>
      </section>
      <section className="main__introduction">
        <div className="main__intro-container-img">
          <img className="main__intro-image" src={intro_1} alt="" />
          <div className="main__intro-text-container">
            <h2 className="main__intro-title">OPEN EVENT</h2>
            <span className="main__intro-description">
              클론코딩 사이트입니다
            </span>
          </div>
        </div>
        <div className="main__intro-container">
          <h2 className="main__intro-title main__intro-title-black">
            OPEN EVENT
          </h2>
          <span className="main__intro-description main__intro-description-black">
            글자만 들어갈 칸
          </span>
        </div>
        <div className="main__intro-container-img">
          <img className="main__intro-image" src={intro_2} alt="" />
          <div className="main__intro-text-container">
            <h2 className="main__intro-title ">OPEN EVENT</h2>
            <span className="main__intro-description">
              클론코딩 사이트입니다
            </span>
          </div>
        </div>
        <div className="main__intro-container-img">
          <img className="main__intro-image" src={intro_3} alt="" />
          <div className="main__intro-text-container">
            <h2 className="main__intro-title">OPEN EVENT</h2>
            <span className="main__intro-description">
              클론코딩 사이트입니다
            </span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Main;
