import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter, // Twitter 아이콘은 free-brands-svg-icons에 있습니다.
  faInstagram,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons"; // 브랜딩 아이콘을 import 해야 합니다.

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__sub-box">
        <small className="footer__title">MY SHOP</small>
        <small className="footer__text">사업자등록번호: 000-0000-0000</small>
        <small className="footer__text">주소: 서울특별시 강남구</small>
        <small className="footer__text footer__copy-right">
          &copy; All right reserved by dy
        </small>
      </div>
      <div className="footer__sub-box footer__social-box">
        <div className="footer__icon">
          <FontAwesomeIcon icon={faTwitter} size="2xl" />
        </div>
        <span className="footer__text footer__icon">
          <FontAwesomeIcon icon={faInstagram} size="2xl" />
        </span>
        <span className="footer__text footer__icon">
          <FontAwesomeIcon icon={faFacebook} size="2xl" />
        </span>
      </div>
    </div>
  );
};

export default Footer;
