import email from "../Assets/email.png";
import linkedin from "../Assets/linkedin.png";

const Contact = () => {
  return (
    <main>
      <div id="contact">
        <p className="section_text_p1">Get In Touch</p>
        <h1 className="title">Contact Me</h1>
        <div className="contact-info-upper-container">
          <div className="contact-info-container">
            <img src={email} alt="Email icon" className="icon contact-icon" />
            <p>
              <a href="mailto:aleksandra.puleska@gmail.com">
                aleksandra.puleska@gmail.com
              </a>
            </p>
          </div>
          <div class="contact-info-container">
            <img src={linkedin} alt="Linkedin icon" class="icon contact-icon" />
            <p>
              <a href="https://www.linkedin.com/in/aleksandra-puleska-123890240/">
                Linkedin
              </a>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Contact;
