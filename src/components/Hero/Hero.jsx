import React from "react";
import { Carousel } from "primereact/carousel";
import "./Hero.css";

const techIcons = [
  { image: "./assets/images/physics.png", alt: "React" },
  { image: "./assets/images/html.png", alt: "HTML" },
  { image: "./assets/images/css-3.png", alt: "CSS" },
  { image: "./assets/images/js-file.png", alt: "JavaScript" },
  { image: "./assets/images/redux.png", alt: "React" },
  { image: "./assets/images/nodejs.png", alt: "HTML" },
  { image: "./assets/images/reactnative.png", alt: "CSS" },
  { image: "./assets/images/typescript.png", alt: "JavaScript" },
  { image: "./assets/images/reactnativepapersvg.svg", alt: "React" },
];

const techTemplate = (item) => {
  return (
    <div className="flex align-items-center justify-content-center tech-icon">
      <img src={item.image} alt={item.alt} className="tech-image" />
    </div>
  );
};

const Hero = () => {
  const responsiveOptions = [
    {
      breakpoint: "1400px",
      numVisible: 5,
      numScroll: 1,
    },
    {
      breakpoint: "1199px",
      numVisible: 4,
      numScroll: 1,
    },
    {
      breakpoint: "991px",
      numVisible: 3,
      numScroll: 1,
    },
    {
      breakpoint: "767px",
      numVisible: 2,
      numScroll: 1,
    },
    {
      breakpoint: "480px",
      numVisible: 2,
      numScroll: 1,
    },
  ];

  return (
    <>
      <section className="hero-container">
        <div className="hero-content">
          <h2>
            Hi, I'm <span className="hero-name">ROUSHAN</span>
          </h2>
          <h4>Transforming Ideas into Digital Reality</h4>
          <p className="experience-text">
            Working Experience
          </p>
          <p className="experience-text">
            Contact Number: <a href="tel:7484030370" className="highlight">7484030370</a>
          </p>
          <p>
            <span className="first-p">
              Innovative Frontend Creator | Building Sleek and User-Friendly Web
              Applications
            </span>
          </p>
        </div>

        <div className="hero-img">
          <div>
            <img src="./assets/images/boss.png" alt="Avtar" />
          </div>
        </div>
      </section>

      <div className="tech-carousel-wrapper">
        <div className="tech-carousel">
          <Carousel
            value={techIcons}
            numVisible={6}
            numScroll={1}
            autoplayInterval={2000}
            showIndicators={false}
            circular
            itemTemplate={techTemplate}
            responsiveOptions={responsiveOptions}
          />
        </div>
      </div>
    </>
  );
};

export default Hero;
