import React, { useState } from 'react';
import './Skills.css';
import { SKILLS } from '../../utils/data';
import SkillsCard from './SkillsCard/SkillsCard';
import SkillsInfoCard from './SkillsInfoCard/SkillsInfoCard';
const Skills = () => {

    const [selectSkills, setSelectSkills] = useState(SKILLS[0]);

    const handleSelectSkill = (data) => {
        setSelectSkills(data);
    };

  return (
    <section className='skills-container'>
        <h5 className='skills-title'>Technical Proficiency</h5>
        <div className='skills-content'>
            <div className='skills'>
                {
                    SKILLS.map((item) => (
                        <SkillsCard 
                            key={item.title}
                            iconUrl={item.icon}
                            title={item.title}
                            isActive={selectSkills.title === item.title}
                            onClick={() => {
                                handleSelectSkill(item);
                            }}
                        />
                    ))
                }
            </div>
            <div className='skills-info'>
                <SkillsInfoCard 
                heading={selectSkills.title}
                skills={selectSkills.skills}

                />
            </div>
        </div>
    </section>
  )
}

export default Skills