import React, { Component } from "react";
import { rooms } from "./data";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export class Rooms extends Component {
  render() {
    const settings = {
      dots: true,
      fade: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      arrows: true,
      slidesToScroll: 1,
      className: "slides",
      autoplay: true,
      autoplaySpeed: 5000,
    };
    return (
      <section>
        <Slider {...settings}>
          {rooms.map((room) => {
            const { id, title, about, image, bigImage } = room;
            return (
              <div key={id}>
                <div className="rooms-slider">
                  <div
                    style={{
                      backgroundImage: `url(${image})`,
                      backgroundRepeat: "no-repeat",
                    }}
                    className="image-wrapper small-image"
                  ></div>
                  <div
                    style={{
                      backgroundImage: `url(${bigImage})`,
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "100% 100%",
                    }}
                    className="image-wrapper big-image"
                  ></div>
                  <div className="rooms-details">
                    <h1>{title}</h1>
                    <p>{about}</p>
                    <button class="cta">
                      <span class="hover-underline-animation"> Shop now </span>
                      <svg
                        id="arrow-horizontal"
                        xmlns="http://www.w3.org/2000/svg"
                        width="30"
                        height="10"
                        viewBox="0 0 46 16"
                      >
                        <path
                          id="Path_10"
                          data-name="Path 10"
                          d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z"
                          transform="translate(30)"
                        ></path>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </Slider>
      </section>
    );
  }
}
