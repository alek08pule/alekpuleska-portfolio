import Taxi_app01 from "../Assets/Taxi_app01.jpg";
import WalletHomePage from "../Assets/Wallet-homePage.jpg";
import LandingPageLibrary from "../Assets/LandingPage-library.jpg";
import News from "../Assets/News.jpg";

const Projects = () => {
  return (
    <main>
      <div id="projects">
        <p className="section_text_p1">Browse My Recent</p>
        <h1 className="title">Projects</h1>
        <div className="experience-details-container">
          <div className="project-containers">
            <div className="project-details">
              <div className="imageDiv">
                <img src={Taxi_app01} alt="Project 1" />
              </div>
              <div className="project-title">
                <h2 className="experience-sub-title">Taxi</h2>
              </div>
              <div className="btn-container">
                <button
                  className="btn btn-color-1 project-btn"
                  onClick={() =>
                    window.open(
                      "https://www.figma.com/proto/Vla3N4EiAOvDsX32aENtKy/taxi?page-id=0%3A1&type=design&node-id=2-23&viewport=458%2C112%2C0.32&t=DqmN3k2Ci1Uf6QFb-1&scaling=scale-down&starting-point-node-id=2%3A2&mode=design",
                      "_blank"
                    )
                  }
                >
                  Live Demo
                </button>
              </div>
            </div>
            <div className="project-details">
              <div className="imageDiv">
                <img src={News} alt="Project 2" className="project-img" />
              </div>
              <div className="project-title">
                <h3 className="experience-sub-title">News</h3>
              </div>
              <div className="btn-container">
                <button
                  className="btn btn-color-1 project-btn"
                  onClick={() =>
                    window.open(
                      "https://www.figma.com/proto/NvPwJlXPRSsbfW3qKCs3ba/Tech-News?type=design&node-id=1-2&t=CANOowfGQkqlCFIs-1&scaling=scale-down&page-id=0%3A1&starting-point-node-id=1%3A2&mode=design",
                      "_blank"
                    )
                  }
                >
                  Live Demo
                </button>
              </div>
            </div>
            <div className="project-details">
              <div className="imageDiv">
                <img
                  src={LandingPageLibrary}
                  alt="Project 4"
                  className="project-img"
                />
              </div>
              <div className="project-title">
                <h3 className="experience-sub-title">Toy Library</h3>
              </div>
              <div className="btn-container">
                <button
                  className="btn btn-color-1 project-btn"
                  onClick={() =>
                    window.open(
                      "https://www.figma.com/design/swsUhDJaA2opIKb76wIR42/ToyLibrary-design?node-id=101%3A2&t=4vU8FaNL4soTt4uJ-1",
                      "_blank"
                    )
                  }
                >
                  Live Demo
                </button>
              </div>
            </div>
            <div className="project-details">
              <div className="imageDiv">
                <img
                  src={WalletHomePage}
                  alt="Project 3"
                  className="project-img"
                />
              </div>
              <div className="project-title">
                <h3 className="experience-sub-title">My Wallet</h3>
              </div>
              <div className="btn-container">
                <button
                  className="btn btn-color-1 project-btn"
                  onClick={() => (
                    (window.location.href =
                      "https://github.com/alek08pule/My_Wallet.git"),
                    "_blank"
                  )}
                >
                  Github
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Projects;
