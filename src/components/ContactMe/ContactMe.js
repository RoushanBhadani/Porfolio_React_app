import React from 'react';
import './ContactMe.css';
import ContactInfoCard from './ContactInfoCard/ContactInfoCard';
import ContactForm from './ContactForm/ContactForm';

const ContactMe = () => {
  return (
    <section className='contact-container'>
        <h5>Contact Me</h5>

        <div className='contact-content'>
            <div style={{flex: 1}}>
                <a href='mailto:roushanbhadani0209@gmail.com'>
                    <ContactInfoCard
                    iconUrl="./assets/images/mail.png"
                    text="roushanbhadani0209@gmail.com"
                />
                </a>
                <a href='https://github.com/RoushanBhadani' target='_blank'>
                    <ContactInfoCard
                    iconUrl="./assets/images/github.png"
                    text="https://github.com/RoushanBhadani"
                />
                </a>
                <a href='https://www.linkedin.com/in/roushan-bhadani-09659221a/' target='_blank'>
                    <ContactInfoCard
                    iconUrl="./assets/images/linkedin.png"
                    text="https://www.linkedin.com/in/roushan-bhadani-09659221a/"
                />
                </a>
            </div>
            <div style={{flex: 1}}>
                <ContactForm />
            </div>
        </div>
    </section>
  )
}

export default ContactMe