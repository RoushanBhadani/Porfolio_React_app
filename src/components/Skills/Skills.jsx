// import React, { useState } from 'react';
// import './Skills.css';
// import { SKILLS } from '../../utils/data';
// import SkillsCard from './SkillsCard/SkillsCard';
// import SkillsInfoCard from './SkillsInfoCard/SkillsInfoCard';
// const Skills = () => {

//     const [selectSkills, setSelectSkills] = useState(SKILLS[0]);

//     const handleSelectSkill = (data) => {
//         setSelectSkills(data);
//     };

//   return (
//     <section className='skills-container'>
//         <h5 className='skills-title'>Technical Proficiency</h5>
//         <div className='skills-content'>
//             <div className='skills'>
//                 {
//                     SKILLS.map((item) => (
//                         <SkillsCard 
//                             key={item.title}
//                             iconUrl={item.icon}
//                             title={item.title}
//                             isActive={selectSkills.title === item.title}
//                             onClick={() => {
//                                 handleSelectSkill(item);
//                             }}
//                         />
//                     ))
//                 }
//             </div>
//             <div className='skills-info'>
//                 <SkillsInfoCard 
//                 heading={selectSkills.title}
//                 skills={selectSkills.skills}

//                 />
//             </div>
//         </div>
//     </section>
//   )
// }

// export default Skills







import React, { useState, useEffect } from 'react';
import './Skills.css';
import { SKILLS } from '../../utils/data';
import SkillsCard from './SkillsCard/SkillsCard';
import SkillsInfoCard from './SkillsInfoCard/SkillsInfoCard';

const Skills = () => {
  const [selectSkills, setSelectSkills] = useState(SKILLS[0]);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [openSkill, setOpenSkill] = useState(SKILLS[0].title);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleSelectSkill = (title) => {
    if (isMobile) {
      setOpenSkill((prev) => (prev === title ? null : title));
    } else {
      const skill = SKILLS.find((item) => item.title === title);
      setSelectSkills(skill);
    }
  };

  return (
    <section className='skills-container'>
      <h5 className='skills-title'>Technical Proficiency</h5>

      <div className='skills-content'>
        {/* Skills list */}
        <div className='skills'>
          {SKILLS.map((item) => (
            <div key={item.title} className='skill-item'>
              <SkillsCard
                iconUrl={item.icon}
                title={item.title}
                isActive={
                  isMobile ? openSkill === item.title : selectSkills.title === item.title
                }
                onClick={() => handleSelectSkill(item.title)}
              />

              {/* Show info below clicked skill (mobile only) */}
              {isMobile && openSkill === item.title && (
                <div className='mobile-skill-info'>
                  <SkillsInfoCard heading={item.title} skills={item.skills} />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Desktop - show info in side panel */}
        {!isMobile && (
          <div className='skills-info'>
            <SkillsInfoCard heading={selectSkills.title} skills={selectSkills.skills} />
          </div>
        )}
      </div>
    </section>
  );
};

export default Skills;
