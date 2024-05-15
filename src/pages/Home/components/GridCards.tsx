import { Card, CardHeader, CardFooter } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { Context, grupo } from "@/context";
export function GridCards() {
  const { grupos, filteredGrupos, search, setSearch } = useContext(Context)!;
  const navigate = useNavigate();
  function navegar(id: string) {
    setSearch("");
    navigate(`/${id}`);
  }

  return (
    <div className="bg-black min-h-[90vh]">
      <div className="scroll-snap snap-none grid-container">
        {search.length > 0
          ? filteredGrupos?.map((grupo: grupo) => (
              <Card
                className="card"
                key={grupo.id}
                onClick={() => navegar(grupo.id)}
              >
                <CardHeader className="card-header">
                  <img
                    src={grupo.image_url}
                    className="card-header-image"
                    alt=""
                  />
                </CardHeader>
                <CardFooter className="card-footer">{grupo.name}</CardFooter>
              </Card>
            ))
          : grupos?.map((grupo: grupo) => (
              <Card
                className="card"
                key={grupo.id}
                onClick={() => navegar(grupo.id)}
              >
                <CardHeader className="card-header">
                  <img
                    src={grupo.image_url}
                    className="card-header-image"
                    alt=""
                  />
                </CardHeader>
                <CardFooter className="card-footer">{grupo.name}</CardFooter>
              </Card>
            ))}
      </div>
    </div>
  );
}
