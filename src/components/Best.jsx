import React from "react";
import best_1 from ".././assets/best-01.jpg";
import "./product-list.css";
// import best_2 from ".././assets/best-02.jpg";
// import best_3 from ".././assets/best-03.jpg";
// import best_4 from ".././assets/best-04.jpg";
// import best_5 from ".././assets/best-05.jpg";
// import best_6 from ".././assets/best-06.jpg";
// import best_7 from ".././assets/best-07.jpg";
// import best_8 from ".././assets/best-08.jpg";

const Best = () => {
  return (
    <div className="main__product-list">
      <h3 className="main__product-list-title ">Best of the month</h3>
      <span className="main__product-list-sub-title">
        이달의 베스트 상품이에요
      </span>
      <div className="main__product-list-sub-container">
        <article className="main__product-list-article">
          <div className="main__article-img-container">
            <img className="main__article-img" src={best_1} alt="베스트1" />
          </div>
          <div className="main__article-container">
            <div className="main__article-color-item main__article-color-item--01"></div>
            <div className="main__article-color-item main__article-color-item--02"></div>
            <div className="main__article-color-item main__article-color-item--03"></div>
            <div className="main__article-color-item main__article-color-item--04"></div>
            <div className="main__article-color-item main__article-color-item--05"></div>
          </div>
          <div className="main__article-container">
            <h4 className="main__article-product-name">
              모던트 베이직 슬림 무지 티셔츠
            </h4>
          </div>
          <div className="main__article-container">
            <span className="main__article-product-description">
              #편하게 입을 수 있어요 #간편해요 #데일리룩
            </span>
          </div>
          <div className="main__article-container">
            <span className="main__article-total-price">15,000원</span>
            <small className="main__article-previous-price">23,000원</small>
            <span className="main__article-discount-rate">40%</span>
          </div>
        </article>

        <article className="main__product-list-article">
          <div className="main__article-img-container">
            <img className="main__article-img" src={best_1} alt="베스트1" />
          </div>
          <div className="main__article-container">
            <div className="main__article-color-item main__article-color-item--01"></div>
            <div className="main__article-color-item main__article-color-item--02"></div>
            <div className="main__article-color-item main__article-color-item--03"></div>
            <div className="main__article-color-item main__article-color-item--04"></div>
            <div className="main__article-color-item main__article-color-item--05"></div>
          </div>
          <div className="main__article-container">
            <h4 className="main__article-product-name">
              모던트 베이직 슬림 무지 티셔츠
            </h4>
          </div>
          <div className="main__article-container">
            <span className="main__article-product-description">
              #편하게 입을 수 있어요 #간편해요 #데일리룩
            </span>
          </div>
          <div className="main__article-container">
            <span className="main__article-total-price">15,000원</span>
            <small className="main__article-previous-price">23,000원</small>
            <span className="main__article-discount-rate">40%</span>
          </div>
        </article>

        <article className="main__product-list-article">
          <div className="main__article-img-container">
            <img className="main__article-img" src={best_1} alt="베스트1" />
          </div>
          <div className="main__article-container">
            <div className="main__article-color-item main__article-color-item--01"></div>
            <div className="main__article-color-item main__article-color-item--02"></div>
            <div className="main__article-color-item main__article-color-item--03"></div>
            <div className="main__article-color-item main__article-color-item--04"></div>
            <div className="main__article-color-item main__article-color-item--05"></div>
          </div>
          <div className="main__article-container">
            <h4 className="main__article-product-name">
              모던트 베이직 슬림 무지 티셔츠
            </h4>
          </div>
          <div className="main__article-container">
            <span className="main__article-product-description">
              #편하게 입을 수 있어요 #간편해요 #데일리룩
            </span>
          </div>
          <div className="main__article-container">
            <span className="main__article-total-price">15,000원</span>
            <small className="main__article-previous-price">23,000원</small>
            <span className="main__article-discount-rate">40%</span>
          </div>
        </article>

        <article className="main__product-list-article">
          <div className="main__article-img-container">
            <img className="main__article-img" src={best_1} alt="베스트1" />
          </div>
          <div className="main__article-container">
            <div className="main__article-color-item main__article-color-item--01"></div>
            <div className="main__article-color-item main__article-color-item--02"></div>
            <div className="main__article-color-item main__article-color-item--03"></div>
            <div className="main__article-color-item main__article-color-item--04"></div>
            <div className="main__article-color-item main__article-color-item--05"></div>
          </div>
          <div className="main__article-container">
            <h4 className="main__article-product-name">
              모던트 베이직 슬림 무지 티셔츠
            </h4>
          </div>
          <div className="main__article-container">
            <span className="main__article-product-description">
              #편하게 입을 수 있어요 #간편해요 #데일리룩
            </span>
          </div>
          <div className="main__article-container">
            <span className="main__article-total-price">15,000원</span>
            <small className="main__article-previous-price">23,000원</small>
            <span className="main__article-discount-rate">40%</span>
          </div>
        </article>
      </div>
    </div>
  );
};

export default Best;
