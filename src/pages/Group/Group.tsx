import {
  HeroBanner2,
  InformationContainer,
  SpotifyContainer,
} from "./components";

import { useContext, useEffect, useState } from "react";
import { Context, grupoCompleto } from "@/context";
import { useParams } from "react-router-dom";
export function Group() {
  const { montarGrupo } = useContext(Context)!;
  const { id } = useParams();
  const [grupo, setGrupo] = useState<grupoCompleto | undefined>();

  useEffect(() => {
    async function searchGrupo() {
      if (id) {
        const response = await montarGrupo(id!);
        setGrupo(response);
      }
    }
    searchGrupo();
  }, []);

  return grupo ? (
    <div>
      <HeroBanner2 />
      <InformationContainer grupo={grupo!} />
      <SpotifyContainer spotifyUrl={grupo!.spotify} />
      <div className="bg-black text-center text-white py-4">
        <p>
          Desenvolvido por{" "}
          <a
            href="https://linkedin.com/in/nycollaskaique"
            target="_blank"
            className="underline"
          >
            Nycollas Kaique
          </a>
        </p>
      </div>
    </div>
  ) : (
    <div className="bg-black min-h-[100vh]">
      <HeroBanner2 />
      <div className="bg-black text-center w-full text-white font-bold">
        Carregando
      </div>
      <div className="loader  m-auto"></div>

      <div className="bg-black text-center text-white py-4">
        <p>
          Desenvolvido por{" "}
          <a
            href="https://linkedin.com/in/nycollaskaique"
            target="_blank"
            className="underline"
          >
            Nycollas Kaique
          </a>
        </p>
      </div>
    </div>
  );
}
