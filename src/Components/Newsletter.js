import React from 'react'
import '../Style/newsletter.css'
import emailIcon from "../Assets/icons/email.svg"

const Newsletter = () => {
    return (
        <div className='newsletter_section'>
            <div className="text_form">
                <div className='newsletter_section_text'>
                    <h1 className='newsletter_main_header'>Subscribe on our newsletter</h1>
                    <p className='newsletter_main_parag'>Get daily news on upcoming offers from many suppliers all over the world</p>
                </div>
                <div className='newsletter_section_form'>
                    <div className="newsletter_email_input_body">
                        <img src={emailIcon} alt="Email" className='newsletter_form_email_icon' />
                        <input type='text' placeholder='Email' className='newsletter_email_input' />
                    </div>
                    <button className='newsletter_submit_btn'>Subscribe</button>
                </div>
            </div>
        </div>
    )
}

export default Newsletter