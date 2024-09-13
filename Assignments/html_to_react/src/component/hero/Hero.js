import heroImage from "../../assets/images/hero.png";
import Button from "../button/Button";

function Hero() {
  return (
    <div className="hero">
      <div className="container">
        <div className="left">
          <h1 className="h1">
            Hi, I'm <b>Julia&nbsp;Walker</b>.
            <br />Web Developer
          </h1>
          <p className="h3">
            Specialized in <abbr title="Accessibility">a11y</abbr> and Core Web Vitals
          </p>

          <div className="btn-group">
            <span><Button title="About Me" className='btn-primary' btn='btn' /></span>
            <span><Button title="Contact Me" className='btn-secondary' btn='btn' /></span>
            
          </div>
        </div>

        <div className="right">
          <div className="pattern-bg"></div>
          <div className="img-box">
            <img src={heroImage} alt="Julia Walker" className="hero-img" />
            <div className="shape shape-1"></div>
            <div className="shape shape-2"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
