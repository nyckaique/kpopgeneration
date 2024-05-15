import { useContext } from "react";
import { Context } from "@/context";
export function Accordion() {
  const { montarGeracao, geracao, setGeracao, montarGrupos } =
    useContext(Context)!;
  function handleGeracao(generation: string) {
    if (geracao === generation) {
      setGeracao("all");
      montarGrupos();
      return;
    }
    setGeracao(generation);
    montarGeracao(generation);
  }
  return (
    <div className="accordion-container ">
      <button
        className={
          geracao === "1"
            ? "accordion-btn-atv accordion-btn-1"
            : "accordion-btn accordion-btn-1"
        }
        onClick={() => handleGeracao("1")}
      >
        <span>1ª Geração</span>
      </button>
      <button
        className={
          geracao === "2"
            ? "accordion-btn-atv accordion-btn-2"
            : "accordion-btn accordion-btn-2"
        }
        onClick={() => handleGeracao("2")}
      >
        <span>2ª Geração</span>
      </button>
      <button
        className={
          geracao === "3"
            ? "accordion-btn-atv accordion-btn-3"
            : "accordion-btn accordion-btn-3"
        }
        onClick={() => handleGeracao("3")}
      >
        <span>3ª Geração</span>
      </button>
      <button
        className={
          geracao === "4"
            ? "accordion-btn-atv accordion-btn-4"
            : "accordion-btn accordion-btn-4"
        }
        onClick={() => handleGeracao("4")}
      >
        <span>4ª Geração</span>
      </button>
      <button
        className={
          geracao === "5"
            ? "accordion-btn-atv accordion-btn-5"
            : "accordion-btn accordion-btn-5"
        }
        onClick={() => handleGeracao("5")}
      >
        <span>5ª Geração</span>
      </button>
    </div>
  );
}
