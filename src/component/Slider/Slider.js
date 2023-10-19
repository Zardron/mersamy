import React, { useRef } from "react";
import Slider from "react-slick";
import Project from "./Project";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import styled from "styled-components";

let data = [
  {
    img: "https://img1.wsimg.com/isteam/ip/9755c703-8de1-49b2-81ad-32fd85aa4630/4-205e703.png/:/",
  },
  {
    img: "https://img1.wsimg.com/isteam/ip/9755c703-8de1-49b2-81ad-32fd85aa4630/IMG_9403.JPG/:/rs=w:1160,h:1449",
  },
  {
    img: "https://img1.wsimg.com/isteam/ip/9755c703-8de1-49b2-81ad-32fd85aa4630/IMG_9383.JPG/:/rs=w:1160,h:1450",
  },
  {
    img: "https://img1.wsimg.com/isteam/ip/9755c703-8de1-49b2-81ad-32fd85aa4630/IMG_0323.JPG/:/rs=w:1160,h:1160",
  },
  {
    img: "https://img1.wsimg.com/isteam/ip/9755c703-8de1-49b2-81ad-32fd85aa4630/IMG_9465.JPG/:/rs=w:1160,h:1449",
  },
  {
    img: "https://img1.wsimg.com/isteam/ip/9755c703-8de1-49b2-81ad-32fd85aa4630/IMG_9875.JPG/:/rs=w:1160,h:1160",
  },
  {
    img: "https://img1.wsimg.com/isteam/ip/9755c703-8de1-49b2-81ad-32fd85aa4630/IMG_0574.JPG/:/rs=w:1160,h:1160",
  },
  {
    img: "https://img1.wsimg.com/isteam/ip/9755c703-8de1-49b2-81ad-32fd85aa4630/IMG_9464.JPG/:/rs=w:1160,h:1160",
  },

  {
    img: "https://img1.wsimg.com/isteam/ip/9755c703-8de1-49b2-81ad-32fd85aa4630/IMG_9031.JPG/:/rs=w:1160,h:725",
  },
  {
    img: "https://img1.wsimg.com/isteam/ip/9755c703-8de1-49b2-81ad-32fd85aa4630/IMG_0253.JPG/:/rs=w:1160,h:1449",
  },
  {
    img: "https://img1.wsimg.com/isteam/ip/9755c703-8de1-49b2-81ad-32fd85aa4630/IMG_9270.JPG/:/rs=w:1160,h:1450",
  },
  {
    img: "https://img1.wsimg.com/isteam/ip/9755c703-8de1-49b2-81ad-32fd85aa4630/IMG_0594.JPG/:/rs=w:1160,h:1450",
  },
  {
    img: "https://img1.wsimg.com/isteam/ip/9755c703-8de1-49b2-81ad-32fd85aa4630/IMG_0562.JPG/:/rs=w:1160,h:1450",
  },
  {
    img: "https://img1.wsimg.com/isteam/ip/9755c703-8de1-49b2-81ad-32fd85aa4630/IMG_9883.JPG/:/rs=w:1160,h:1449",
  },
  {
    img: "https://img1.wsimg.com/isteam/ip/9755c703-8de1-49b2-81ad-32fd85aa4630/IMG_9026.JPG/:/rs=w:984,h:1966",
  },
];

var settings = {
  className: "center",
  centerMode: true,
  dots: false,
  infinite: true,
  autoplay: true,
  speed: 2000,
  autoplaySpeed: 4000,
  slidesToShow: 3,
  slidesToScroll: 1,
  initialSlide: 0,
  arrows: false,
  responsive: [
    {
      breakpoint: 990,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
        centerMode: false,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
        centerMode: false,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: false,
      },
    },
  ],
};
const SliderComp = () => {
  const arrowRef = useRef(null);
  let sliderProject = "";
  sliderProject = data.map((item, i) => <Project item={item} key={i} />);
  return (
    <Container>
      <Slider ref={arrowRef} {...settings}>
        {sliderProject}
      </Slider>
      <Buttons>
        <button onClick={() => arrowRef.current.slickPrev()} className="back">
          <IoIosArrowBack />
        </button>
        <button onClick={() => arrowRef.current.slickNext()} className="next">
          <IoIosArrowForward />
        </button>
      </Buttons>
    </Container>
  );
};

export default SliderComp;

const Container = styled.div`
  position: relative;
`;

const Buttons = styled.div`
  button {
    width: 2rem;
    height: 2rem;
    background-color: rgba(255, 255, 255, 0.1);
    cursor: pointer;
    color: #01be96;
    border: none;
    position: absolute;
    top: 45%;
    right: -1rem;
  }

  .back {
    left: -1rem;
  }
`;
