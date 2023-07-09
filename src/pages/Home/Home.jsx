import "./Home.css";
import VeneziaLandscape from "../../assets/images/pexels-jarod-barton.jpg";
import GirlWithSuitcase from "../../assets/images/pexels-tranmautritam.jpg";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const explore = () => {
    if (localStorage.getItem("user")) {
      navigate("/my-posts");
    } else {
      navigate("/login");
    }
  };
  return (
    <div>
      <img
        src={VeneziaLandscape}
        className="main-image"
        alt="venezia-landscape"
      />
      <div className="d-flex content-div">
        <div className="half cropped">
          <img
            src={GirlWithSuitcase}
            className="sub-image main-image"
            alt="girl with suitcase"
          />
        </div>
        <div className="half second d-flex flex-column justify-content-center">
          <h1>
            WELCOME TO <br /> 360 <span>&#176;</span> TRAVEL <br /> INSPIRATIONS
          </h1>
          <p className="mt-5">
            You're travel lover? It's perfect place for you! This blog is about
            my travel experiences and tips. Do you want to join this trip?
          </p>
          <button className="p-3 mt-5 main-btn" onClick={explore}>
            Expole the Blog
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
