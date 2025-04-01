import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import {
  faMagnifyingGlass,
  faUser,
  faCartShopping,
  faBars,
} from "@fortawesome/free-solid-svg-icons"; // solid 아이콘들
import "./Header.css";

const Header = () => {
  const nav = useNavigate();

  return (
    <div>
      <header className="header">
        <div className="header__top">
          <nav className="header__nav-box">
            <ul className="header__list-box">
              <li className="header__content">BRAND</li>
              <li className="header__content">EVENT</li>
              <li className="header__content">LOOKBOOK</li>
              <li className="header__content">COMMUNITY</li>
            </ul>
          </nav>
          <h1 className="header__title">MY SHOP</h1>
          <ul className="header__menu">
            <li className="header__content">
              <FontAwesomeIcon icon={faMagnifyingGlass} size="lg" />
            </li>
            <li className="header__content  header__content--badge-box">
              <div className="header_user-badge">
                <span>+1,000p</span>
              </div>
              <FontAwesomeIcon
                icon={faUser}
                size="lg"
                onClick={() => {
                  nav("/login");
                }}
              />
            </li>
            <li className="header__content  header__content--badge-box">
              <div className="header_cart-badge">
                <span>2</span>
              </div>
              <FontAwesomeIcon icon={faCartShopping} size="lg" />
            </li>
            <li className="header__content">
              <FontAwesomeIcon icon={faBars} size="lg" />
            </li>
          </ul>
        </div>
        <div className="header__bottom">
          <ul className="header__category">
            <li className="header__content">BEST</li>
            <li className="header__content">NEW5%</li>
            <li className="header__content">1+1</li>
            <li
              className="header__content"
              onClick={() => {
                nav("/outer");
              }}
            >
              OUTER
            </li>
            <li className="header__content">TOP</li>
            <li className="header__content">SHIRTS</li>
            <li className="header__content">DRESS</li>
            <li className="header__content">PANTS</li>
            <li className="header__content">ACC</li>
          </ul>
        </div>
      </header>
    </div>
  );
};

export default Header;
