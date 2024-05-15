import { useState, useEffect } from "react";
import { Card, CardHeader, CardFooter } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { Context, grupo } from "@/context";
import { Button } from "@/components/ui/button";

export function GridCards() {
  const {
    grupos,
    filteredGrupos,
    search,
    setSearch,
    setGeracao,
    montarGrupos,
  } = useContext(Context)!;

  const navigate = useNavigate();

  const [paginaAtual, setPaginaAtual] = useState(1);
  const gruposPorPagina = 15;
  const maxNumeroPaginas = 5;

  useEffect(() => {
    setPaginaAtual(1);
  }, [grupos, filteredGrupos]);

  function navegar(id: string) {
    navigate(`/${id}`);
    setSearch("");
    setGeracao("all");
    montarGrupos();
  }

  const totalGrupos =
    search.length > 0 ? filteredGrupos?.length : grupos?.length;
  const indexUltimoGrupo = paginaAtual * gruposPorPagina;
  const indexPrimeiroGrupo = indexUltimoGrupo - gruposPorPagina;
  const gruposAtuais =
    search.length > 0
      ? filteredGrupos?.slice(indexPrimeiroGrupo, indexUltimoGrupo)
      : grupos?.slice(indexPrimeiroGrupo, indexUltimoGrupo);

  function paginate(pageNumber: number) {
    setPaginaAtual(pageNumber);
  }

  const totalPaginas = Math.ceil(totalGrupos! / gruposPorPagina);

  const paginasParaMostrar = [];
  const metadePaginasParaMostrar = Math.floor(maxNumeroPaginas / 2);
  let paginaInicial = Math.max(1, paginaAtual - metadePaginasParaMostrar);
  let paginaFinal = Math.min(
    totalPaginas,
    paginaInicial + maxNumeroPaginas - 1
  );

  if (totalPaginas > maxNumeroPaginas) {
    paginaInicial = Math.max(1, paginaAtual - metadePaginasParaMostrar);
    paginaFinal = Math.min(totalPaginas, paginaInicial + maxNumeroPaginas - 1);
  }

  for (let i = paginaInicial; i <= paginaFinal; i++) {
    paginasParaMostrar.push(i);
  }

  return grupos ? (
    <div className="bg-black min-h-[90vh]">
      <div className="scroll-snap grid-container">
        {gruposAtuais?.map((grupo: grupo) => (
          <Card
            className="card"
            key={grupo.id}
            onClick={() => navegar(grupo.id)}
          >
            <CardHeader className="card-header">
              <img src={grupo.image_url} className="card-header-image" alt="" />
            </CardHeader>
            <CardFooter className="card-footer">{grupo.name}</CardFooter>
          </Card>
        ))}
      </div>

      <div className="pagination">
        {paginasParaMostrar.map((pageNumber) => (
          <Button
            variant="outline"
            key={pageNumber}
            onClick={() => paginate(pageNumber)}
            className={
              pageNumber === paginaAtual
                ? "text-white bg-zinc-600"
                : "text-white bg-zinc-900"
            }
          >
            {pageNumber}
          </Button>
        ))}
      </div>
    </div>
  ) : (
    <div className="bg-black min-h-[100vh]">
      <div className="bg-black text-center w-full text-white font-bold">
        Carregando
      </div>
      <div className="loader  m-auto"></div>
    </div>
  );
}
