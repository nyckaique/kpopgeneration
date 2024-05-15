import aespa from "../../../assets/4.jpg";
export function InformationContainer() {
  return (
    <div className="information-container">
      <img src={aespa} alt="" className="information-image" />
      <div className="information-text">
        <p className="text-3xl">AESPA</p>
        <p className="font-normal">
          ARTMS is a five-member South Korean girl group under MODHAUS. The
          group consists of JinSoul, HaSeul, Kim Lip, HeeJin, and Choerry from
          the girl group LOONA. The group first re-debuted the sub-unit ODD EYE
          CIRCLE on July 12, 2023. They will debut on May 31, 2024 with their
          first full-length album, DALL.
        </p>
        <p className="flex flex-wrap gap-2">
          {"Membros: "}
          <span className="information-badge">Heejin</span>
        </p>
        <p>
          {"Geração: "}
          <span className="font-normal">5ª</span>
        </p>
        <p>
          {"Debut: "}
          <span className="font-normal">31/05/2024</span>{" "}
        </p>
        <p>
          {"Status: "}
          <span className="font-normal">grupo ativo</span>{" "}
        </p>
        <p>
          {"Empresa: "} <span className="font-normal">MODHAUS</span>
        </p>
      </div>
    </div>
  );
}
