// import React, { useRef } from 'react';
// import './WorkExperience.css';
// import { WORK_EXPERIENCE } from '../../utils/data';
// import ExperienceCard from './ExperienceCard/ExperienceCard';
// import Slider from 'react-slick';

// const WorkExperience = () => {


//     const sliderRef = useRef();

//     const settings = {
//         dots: false,
//         infinite: true,
//         speed: 500,
//         slidesToShow: 2,
//         slidesToScroll: 1,
//         arrows: false,
//         responsive: [
//             {
//                 breakpoint: 769,
//                 settings: {
//                     slidesToShow: 1,
//                     slidesToScroll: 1,
//                 },
//             },
//         ],
//     };

//     const sliderRight = () => {
//         sliderRef.current.slickNext();
//     }

//     const sliderLeft = () => {
//         sliderRef.current.slickPrev();
//     }

//   return (
//     <section className='experience-container'>
//         <h5>Work Experience</h5>

//         <div className='experience-content'>

//             <div className='arrow-right' onClick={sliderRight}>
//                 <span className='material-symbols-outlined'>chevron_right</span>
//             </div>

//             <div className='arrow-left' onClick={sliderLeft}>
//                 <span className='material-symbols-outlined'>chevron_left</span>
//             </div>

//             <Slider ref={sliderRef} {...settings}>
//                 {
//                     WORK_EXPERIENCE.map((item) => (
//                         <ExperienceCard key={item.title} details={item} />
//                     ))
//                 }
//             </Slider>
//         </div>
//     </section>
//   )
// }

// export default WorkExperience




import React from 'react';
import './WorkExperience.css';
import { WORK_EXPERIENCE } from '../../utils/data';
import ExperienceCard from './ExperienceCard/ExperienceCard';
import { Carousel } from 'primereact/carousel';
// import 'primereact/resources/themes/lara-light-indigo/theme.css';
// import 'primereact/resources/primereact.min.css';
// import 'primeicons/primeicons.css';

const WorkExperience = () => {
    const responsiveOptions = [
        {
            breakpoint: '769px',
            numVisible: 1,
            numScroll: 1
        }
    ];

    const experienceTemplate = (item) => {
        return <ExperienceCard key={item.title} details={item} />;
    };

    return (
        <section className='experience-container'>
            <h5>Work Experience</h5>

            <div className='experience-content'>
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
