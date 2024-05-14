import { Link } from "react-router-dom";
import logo from "../../../assets/kpopgen-logo-inverter.png";

export function HeroBanner2() {
  return (
    <div className="hero-banner2">
      <div className="hero-banner-faixa"></div>
      <Link to="/">
        <img
          src={logo}
          className="hero-banner-logo"
          alt="Kpop Generation Logo"
        />
      </Link>
    </div>
  );
}
