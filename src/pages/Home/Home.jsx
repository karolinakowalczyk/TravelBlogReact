import "./Home.css";
import VeneziaLandscape from "../../assets/images/pexels-jarod-barton.jpg";
import GirlWithSuitcase from "../../assets/images/pexels-tranmautritam.jpg";
import { useNavigate } from "react-router-dom";
import SeoHeader from "../../components/SeoHeader/SeoHeader.jsx";

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
      <SeoHeader
        title={"Travel Blog React - 360 Travel Inspirations"}
        description={
          "Discover the most interesting corners of the world on Travel Blog. Where are the cheap flights now, and where are the most beutiful views?"
        }
      ></SeoHeader>
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
            <br /> 360 <span>&#176;</span> TRAVEL <br /> INSPIRATIONS
          </h1>
          <p className="mt-5">
            You're travel lover? It's perfect place for you! This blog is about
            my travel experiences and tips. Do you want to join this trip?
          </p>
          <p className="fw-bold">Discover a World of Adventures:</p>
          <p>
            At TravelBlog, we believe that travel is not just a hobby; it&apos;s
            a way of life. Our travel blog showcases a diverse range of
            destinations, from the snow-capped peaks of the Himalayas to the
            sun-kissed beaches of the Maldives. Whether you seek
            adrenaline-pumping escapades, cultural immersions, or serene
            retreats, our blog offers a vast array of travel guides and
            itineraries to suit every explorer&apos;s taste.
          </p>
          <p className="fw-bold">Immerse Yourself in Engaging Narratives:</p>
          <p>
            We pride ourselves on our engaging storytelling, which brings
            destinations to life through the eyes of passionate globetrotters.
            Our experienced team of travel writers and contributors craft each
            article with meticulous attention to detail, giving you an authentic
            glimpse into the heart and soul of each location. From enthralling
            encounters with local communities to thrilling anecdotes of wildlife
            encounters, our blog ensures that you are a part of every adventure.
          </p>
          <p className="fw-bold">Inspiring Photography:</p>
          <p>
            A picture is worth a thousand words, and at TravelBlog.com, we
            curate stunning visual experiences to complement our narratives.
            Immerse yourself in breathtaking photographs that capture the
            essence of each destination, transporting you to far-off lands
            without leaving your seat. Our images will make you feel as though
            you are standing atop ancient ruins, strolling through bustling
            markets, or gazing at magnificent sunsets.
          </p>
          <p className="fw-bold">Expert Tips and Travel Hacks:</p>
          <p>
            As avid globetrotters ourselves, we know that planning a trip can be
            both exciting and daunting. That&apos;s why our travel blog goes
            beyond inspiring stories, providing practical tips and travel hacks
            to enhance your travel planning. Whether it&apos;s advice on finding
            the best accommodation deals, packing like a pro, or navigating
            through foreign customs, we&apos;ve got you covered.
          </p>
          <p className="fw-bold">Join Our Thriving Travel Community:</p>
          <p>
            TravelBlog.com isn&apos;t just a blog; it&apos;s a vibrant community
            of fellow travelers. Engage with our passionate readers and
            contributors through comments, forums, and social media. Share your
            own experiences, exchange valuable insights, and build lasting
            connections with like-minded adventurers from all corners of the
            globe.
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
