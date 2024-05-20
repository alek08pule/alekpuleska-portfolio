import Profile_photo from "../Assets/Profile_photo..jpg";
import linkedin from "../Assets/linkedin.png";
import github from "../Assets/github.png";
import { Link } from "react-router-dom";
import resume from "../Assets/resume.pdf";
const Home = () => {
  const downloadCV = () => {
    window.open(resume, "_blank");
  };
  return (
    <div id="profile">
      <div className="section_pic-container">
        <img src={Profile_photo} alt="A.P. profile picture" />
      </div>
      <div className="section_text">
        <h1 className="title">Puleska Aleksandra</h1>
        <p className="section_text_p">Software Developer</p>
        <div className="btn-container">
          <button className="btn btn-color-1" onClick={downloadCV}>
            Download CV
          </button>
          <Link to="Contact">
            <button className="btn btn-color-2">Contact Info</button>
          </Link>
        </div>
        <div id="social-container">
          <img
            src={linkedin}
            alt="my LinkedIn
          profile"
            class="icon"
            onClick={() =>
              window.open(
                "https://www.linkedin.com/in/aleksandra-puleska-123890240/",
                "_blank"
              )
            }
          />
          <img
            src={github}
            alt="my github profile"
            class="icon"
            onClick={() =>
              window.open("https://github.com/alek08pule", "_blank")
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
