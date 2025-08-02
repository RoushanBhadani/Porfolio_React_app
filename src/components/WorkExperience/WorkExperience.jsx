import "./WorkExperience.css";
import { WORK_EXPERIENCE } from "../../utils/data";
import ExperienceCard from "./ExperienceCard/ExperienceCard";
import { Carousel } from "primereact/carousel";

const WorkExperience = () => {
  const responsiveOptions = [
    {
      breakpoint: "1024px",
      numVisible: 1,
      numScroll: 1,
    },
    {
      breakpoint: "768px",
      numVisible: 1,
      numScroll: 1,
    },
    {
      breakpoint: "425px",
      numVisible: 1,
      numScroll: 1,
    },
  ];

  const experienceTemplate = (item) => {
    return <ExperienceCard key={item.title} details={item} />;
  };

  return (
    <section className="experience-container">
      <h5>Work Experience</h5>

      <div className="experience-content">
        <Carousel
          value={WORK_EXPERIENCE}
          itemTemplate={experienceTemplate}
          numVisible={2}
          numScroll={1}
          responsiveOptions={responsiveOptions}
          circular
          showIndicators={false}
          showNavigators
        />
      </div>
    </section>
  );
};

export default WorkExperience;
