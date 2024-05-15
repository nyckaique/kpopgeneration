import { grupoCompleto } from "@/context";
// Definição do tipo das props para o componente SpotifyContainer
interface InformationContainerProps {
  grupo: grupoCompleto; // Definindo spotifyUrl como uma prop do tipo string
}

export function InformationContainer({ grupo }: InformationContainerProps) {
  const date = new Date(grupo.debut_date);
  date.setHours(date.getHours() + 4);
  return (
    <div className="information-container">
      <img src={grupo?.image_url} alt="" className="information-image" />
      <div className="information-text">
        <p className="text-3xl">{grupo?.name}</p>
        <p className="font-normal">{grupo?.description}</p>
        <p className="flex flex-wrap gap-2">
          {"Membros: "}
          {grupo?.members.map((member, index) => (
            <span key={index} className="information-badge">
              {member}
            </span>
          ))}
        </p>
        <p>
          {"Geração: "}
          <span className="font-normal">{grupo?.generation}ª</span>
        </p>
        <p>
          {"Debut: "}
          <span className="font-normal">
            {date.toLocaleDateString("pt-br")}
          </span>
        </p>
        <p>
          {"Status: "}
          <span className="font-normal">
            {grupo?.status ? "Grupo ativo" : "Disband"}
          </span>
        </p>
        <p>
          {"Empresa: "} <span className="font-normal">{grupo?.company}</span>
        </p>
      </div>
    </div>
  );
}
