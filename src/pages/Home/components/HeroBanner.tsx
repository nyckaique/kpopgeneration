import logo from "../../../assets/kpopgen-logo-inverter.png";

export function HeroBanner() {
  return (
    <div className="hero-banner scroll-snap">
      <div className="hero-banner-faixa"></div>
      <img src={logo} className="hero-banner-logo" alt="Kpop Generation Logo" />
      <p className="hero-banner-arrow">
        <i className="arrow down"></i>
      </p>
    </div>
  );
}
