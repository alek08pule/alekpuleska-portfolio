import education from "../Assets/education.svg";
import courses from "../Assets/courses.svg";

const About = () => {
  return (
    <main>
      <div id="about">
        <h1 className="title">About Me</h1>
        <div className="section_container">
          <div className="about-details-container">
            <div className="details-container">
              <div className="sub-title">
                <img src={education} alt="Education" className="icon" />
                <h3>Education</h3>
              </div>
              <p>Natural-mathematical gymnasium</p>
            </div>
            <div class="details-container">
              <div class="sub-title">
                <img src={courses} alt="Courses" className="icon" />
                <h3>Courses</h3>
              </div>
              <p>Qinshift Academy - Software Developer</p>
              <p>
                YOUTH WORKSHOP FOR FUTURE VISUAL DESIGNERS VOL.2-Course for
                Graphic Designers
              </p>
            </div>
          </div>
          <div className="text-container">
            <p>
              Hey! I'm Alex, a passionate junior software developer with a knack
              for creating user-friendly websites. I fell in love with web
              development's blend of creativity and problem-solving, and I'm
              committed to crafting engaging digital experiences.
              <br />
              <br />
              During my studies and personal projects, I've learned the value of
              collaboration and teamwork. Working with diverse teams has taught
              me the importance of effective communication and understanding
              different perspectives to deliver successful projects.
              <br />
              <br />
              Outside of coding, you can find me exploring the outdoors, or
              reading a book.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default About;
