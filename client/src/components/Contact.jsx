import React from "react";
import emailjs from "emailjs-com";
  
const Contact = () => {
  function sendEmail(e) {
    e.preventDefault();
    emailjs.sendForm('service_evvqisb', 'template_btkf894', e.target, 'bPo3LB0wy2TiFiyFy')
      .then((result) => {
          window.location.reload()  
      }, (error) => {
          console.log(error.text);
      });
  }
  return (
  <>
    <section class="contact-page" id="contact-page">
      <div class="contact-tag">
        <p>contact me.</p>
      </div>
      <form id="contact-form" action="/" onSubmit={sendEmail} method="POST">
        <div class="contact-menu" >
          <div class="align-input">
            <input type="text" name="from_name" placeholder="name" class="contact-name"  onfocus="this.value=''" autocomplete="off"/>
          </div>
          <div class="align-input">
            <input type="email" name="from_email" placeholder="email" class="contact-email" onfocus="this.value=''"autocomplete="off"/>
          </div>
          <div class="align-input">
            <input type="text" name="subject" placeholder="subject" class="contact-subject" onfocus="this.value=''" autocomplete="off"/>
          </div>
          <div class="align-input">
            <input type="textarea" name="message" placeholder="body" class="contact-text"  onfocus="this.value=''" autocomplete="off"/>
          </div>
        </div>
        <div class="submit-btn">
          <input type="submit" placeholder="submit" class="submit-btn-value" name="submit"/>
        </div>
      </form>
    </section>
  </>
  )
};
  
export default Contact;