import { Card, CardHeader, CardFooter } from "@/components/ui/card";
import { listarGrupos } from "@/api";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
interface grupo {
  id: string;
  name: string;
  image_url: string;
}
export function GridCards() {
  const [grupos, setGrupos] = useState<grupo[]>();

  const navigate = useNavigate();
  useEffect(() => {
    montarGrupos();
  });
  async function montarGrupos() {
    const g = await listarGrupos();
    setGrupos(g);
  }
  function navegar(id: string) {
    navigate(`/${id}`);
  }

  return (
    <div className="scroll-snap snap-none grid-container">
      {grupos?.map((grupo: grupo) => (
        <Card className="card" key={grupo.id} onClick={() => navegar(grupo.id)}>
          <CardHeader className="card-header">
            <img src={grupo.image_url} className="card-header-image" alt="" />
          </CardHeader>
          <CardFooter className="card-footer">{grupo.name}</CardFooter>
        </Card>
      ))}
    </div>
  );
}
