import { createContext, useState, useEffect, ReactNode } from "react";
import { listarGrupos, listarGrupo, listarGeracao } from "@/api";

export interface grupo {
  id: string;
  name: string;
  image_url: string;
}
export interface grupoCompleto {
  id: string;
  name: string;
  description: string;
  members: string[];
  generation: string[];
  debut_date: Date;
  status: boolean;
  company: string;
  spotify: string;
  image_url: string;
}
interface ProviderProps {
  children: ReactNode;
}
interface ContextType {
  search: string;
  setSearch: (search: string) => void;
  grupos: grupo[] | undefined;
  filteredGrupos: grupo[] | undefined;
  montarGrupo: (id: string) => Promise<grupoCompleto>;
  montarGrupos: () => Promise<void>;
  geracao: string;
  setGeracao: (geracao: string) => void;
  montarGeracao: (generation: string) => void;
}

export const Context = createContext<ContextType | undefined>(undefined);
export default function Provider({ children }: ProviderProps) {
  const [search, setSearch] = useState<string>("");
  const [grupos, setGrupos] = useState<grupo[]>();
  const [geracao, setGeracao] = useState<string>("all");

  const filteredGrupos =
    search.length > 0
      ? grupos?.filter((grupo) =>
          grupo.name.toLowerCase().includes(search.toLowerCase())
        )
      : [];

  useEffect(() => {
    montarGrupos();
  }, []);

  async function montarGrupos() {
    const g = await listarGrupos();
    setGrupos(g);
  }
  async function montarGrupo(id: string) {
    const g: grupoCompleto = await listarGrupo(id);
    return g;
  }
  async function montarGeracao(generation: string) {
    if (generation === "all") {
      montarGrupos();
      return;
    }
    const g = await listarGeracao(generation);
    setGrupos(g);
  }

  return (
    <Context.Provider
      value={{
        search,
        setSearch,
        grupos,
        filteredGrupos,
        montarGrupo,
        montarGrupos,
        montarGeracao,
        geracao,
        setGeracao,
      }}
    >
      {children}
    </Context.Provider>
  );
}
