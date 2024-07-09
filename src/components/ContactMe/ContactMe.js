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
                <ContactInfoCard
                    iconUrl="./assets/images/mail.png"
                    text="roushanbhadani0209@gmail.com"
                />
                <ContactInfoCard
                    iconUrl="./assets/images/github.png"
                    text="https://github.com/RoushanBhadani"
                />
                <ContactInfoCard
                    iconUrl="./assets/images/linkedin.png"
                    text="https://www.linkedin.com/in/roushan-bhadani-09659221a/"
                />
            </div>
            <div style={{flex: 1}}>
                <ContactForm />
            </div>
        </div>
    </section>
  )
}

export default ContactMe