import { Link } from "react-router-dom";
import IntroImg from "../../../assets/programmer.jpg";

export const HeroImg = () => {
  return (
    <div className="hero">
      <div className="hero__mask">
        <img className="hero__mask__intro-img" src={IntroImg} alt="IntroImg" />
      </div>
      <div className="hero__text-container">
        <p className="hero__text-container__presentation">
          Hej, mitt namn är Tove
        </p>
        <h1 className="hero__text-container__presentation">
          Jag är en blivande webbutvecklare
        </h1>

        <div>
          <Link to="/project" className="hero__text-container__btn">
            Projects
          </Link>
          <Link to="/contact" className="hero__text-container__btn-light">
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};
