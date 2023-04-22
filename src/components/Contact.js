import React, { useRef, useState } from 'react';

// import contact data
import { contact } from '../data';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [isEmailSent, setIsEmailSent] = useState(false);
  const form = useRef();
  const emailInputRef = useRef(null);
  const nameInputRef = useRef(null);
  const messageInputRef = useRef(null);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_rez0ohb',
       'template_pzkx6tr',
        form.current, 'Zl6lFONuKH00AeTaW')
      .then((result) => {
          console.log(result.text);
          // console.log("message sent")
      }, (error) => {
          console.log(error.text);
      });
      setIsEmailSent(true);
      emailInputRef.current.value = ""; // Clear the email input field
      nameInputRef.current.value = ""; // Clear the email input field
      messageInputRef.current.value = ""; // Clear the email input field
      // Set a timeout to hide the message after 3 seconds
        setTimeout(() => {
          setIsEmailSent(false);
        }, 4000);
  };

  return (
    <section className='section bg-primary' id='contact'>
      <div className='container mx-auto'>
        <div className='flex flex-col items-center text-center'>
          <h2 className='section-title before:content-contact relative before:absolute before:opacity-40 before:-top-7 before:-left-40 before:hidden before:lg:block'>
            Contact us
          </h2>
          <p className='subtitle'>
            contact us
          </p>
        </div>
        <div
          className='flex flex-col lg:gap-x-8 lg:flex-row'
        >
          <div
            className='flex flex-1 flex-col items-start space-y-8 mb-12 lg:mb-0 lg:pt-2'
          >
            {contact.map((item, index) => {
              const { icon, title, subtitle, description , phone, phone2} = item;
              return (
                <div className='flex flex-col lg:flex-row gap-x-4' key={index}>
                  <div className='text-accent rounded-sm w-14 h-14 flex items-start justify-center mt-2 mb-4 lg:mb-0 text-2xl'>
                    {icon}
                  </div>
                  <div>
                    <h4 className='font-body text-xl mb-1'>{title}</h4>
                    <p className='mb-1 text-paragraph'>{subtitle}</p>
                    <p className='text-accent font-normal '>{description}</p>
                    <p className='text-accent font-normal '>{phone2}</p>
                    <p className='text-accent font-normal '>{phone}</p>
                  </div>
                </div>
              );
            })}
          </div>
          <form
            ref={form} onSubmit={sendEmail}
            className='space-y-8 w-full max-w-[780px]'
          >
            <div className='flex gap-8'>
              <input className='input' type='text' placeholder='Your name' name="user_name" ref={nameInputRef}/>
              <input className='input' type='email' placeholder='Your email'name="user_email"ref={emailInputRef} />
            </div>
            {/* <input className='input' type='text' placeholder='Subject' /> */}
            <textarea
              name="message"
              className='textarea'
              placeholder='Your message'
              ref={messageInputRef}
            ></textarea>
            <button type="submit" value="Send" className='btn btn-lg bg-accent hover:bg-secondary-hover'>
              Send message
            </button>
          </form>
               {/* Display the alert message if email is sent successfully */}
                  {isEmailSent && (
                    <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative" role="alert">
                      <strong className="font-bold">Email sent successfully! we will respond soon!</strong>
                     
                    </div>
                  )}
        </div>
      </div>
    </section>
  );
};

export default Contact;
