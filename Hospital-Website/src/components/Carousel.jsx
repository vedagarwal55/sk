import React, { useState } from "react";
import { RxDoubleArrowLeft, RxDoubleArrowRight } from "react-icons/rx";
import { FiPhoneCall, FiMapPin } from "react-icons/fi";

import "./carousel.css";

export const Carousel = ({ data }) => {
  const [slide, setSlide] = useState(0);

  const nextSlide = () => {
    setSlide(slide === data.length - 1 ? 0 : slide + 1);
  };

  const prevSlide = () => {
    setSlide(slide === 0 ? data.length - 1 : slide - 1);
  };

  return (
     <>
    <section className="carousel">
      <RxDoubleArrowLeft onClick={prevSlide} className="arrow arrow-left" />
      {data.map((item, idx) => {
        return (
          <img
            src={item.src}
            alt={item.alt}
            key={idx}
            className={slide === idx ? "slide" : "slide slide-hidden"}
          />
        );
      })}
      <RxDoubleArrowRight
        onClick={nextSlide}
        className="arrow arrow-right"
      />
      <span className="indicators">
        {data.map((_, idx) => {
          return (
            <button
              key={idx}
              className={
                slide === idx ? "indicator" : "indicator indicator-inactive"
              }
              onClick={() => setSlide(idx)}
            ></button>
          );
        })}
      </span>
    </section>

    <section className="hospital-info">
      <div className="hospital-name">
        <h2>Fortis OP Jindal Hospital & Research Centre</h2>  
      </div>
      <div className="hospital-contact-info">
        <div className="icons">
          <a href="tel:">
            <FiPhoneCall className="map_pin"/>
          </a>
          <a className="hospital_map" target="blank" href="">
            <FiMapPin className="map_pin"/>
          </a>
        </div>
        <div className="button_wrap">
          <a className="button" href="">Find a Doctor</a>
        </div>
      </div>
    </section>
   </>
  );
};