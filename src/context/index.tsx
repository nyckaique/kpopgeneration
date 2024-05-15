import { createContext, useState, useEffect, ReactNode } from "react";
import { listarGrupos, listarGrupo } from "@/api";

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
}

export const Context = createContext<ContextType | undefined>(undefined);
export default function Provider({ children }: ProviderProps) {
  const [search, setSearch] = useState<string>("");
  const [grupos, setGrupos] = useState<grupo[]>();
  const filteredGrupos =
    search.length > 0
      ? grupos?.filter((grupo) => grupo.name.includes(search))
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

  return (
    <Context.Provider
      value={{ search, setSearch, grupos, filteredGrupos, montarGrupo }}
    >
      {children}
    </Context.Provider>
  );
}
