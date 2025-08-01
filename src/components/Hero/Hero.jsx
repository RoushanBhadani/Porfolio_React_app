import React from "react";
import { Carousel } from "primereact/carousel";
import "./Hero.css";

const techIcons = [
  { image: "./assets/images/physics.png", alt: "React" },
  { image: "./assets/images/html.png", alt: "HTML" },
  { image: "./assets/images/css-3.png", alt: "CSS" },
  { image: "./assets/images/js-file.png", alt: "JavaScript" },
  { image: "./assets/images/physics.png", alt: "React" },
  { image: "./assets/images/html.png", alt: "HTML" },
  { image: "./assets/images/css-3.png", alt: "CSS" },
  { image: "./assets/images/js-file.png", alt: "JavaScript" },
  { image: "./assets/images/physics.png", alt: "React" },
  { image: "./assets/images/html.png", alt: "HTML" },
  { image: "./assets/images/css-3.png", alt: "CSS" },
  { image: "./assets/images/js-file.png", alt: "JavaScript" },
  { image: "./assets/images/physics.png", alt: "React" },
  { image: "./assets/images/html.png", alt: "HTML" },
  { image: "./assets/images/css-3.png", alt: "CSS" },
  { image: "./assets/images/js-file.png", alt: "JavaScript" },
];

const techTemplate = (item) => {
  return (
    <div className="p-d-flex p-ai-center p-jc-center tech-icon">
      <img
        src={item.image}
        alt={item.alt}
        style={{ width: "60px", height: "60px" }}
      />
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
      breakpoint: "767px",
      numVisible: 3,
      numScroll: 1,
    },
    {
      breakpoint: "575px",
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
      <div className="tech-carousel">
        <Carousel
          value={techIcons}
          numVisible={4}
          numScroll={4}
          autoplayInterval={2000}
          showIndicators={false}
          itemTemplate={techTemplate}
          responsiveOptions={responsiveOptions}
        />
      </div>
    </>
  );
};

export default Hero;
