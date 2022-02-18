import "../css/Hero.css";
import HeroImage from "../images/hero.jpg";
export default function Hero() {
  const style = {
    backgroundImage: `url(${HeroImage})`,
    backgroundSize: `cover`,
    width: `100%`,
  };

  return (
    <section id="hero" style={style}>
      <div className="hero-text text-center">
        <h1>Yanis JEDRZEJCZAK</h1>
        <h3>Web-developper</h3>
      </div>
    </section>
  );
}
