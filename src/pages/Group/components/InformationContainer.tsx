import aespa from "../../../assets/4.jpg";
export function InformationContainer() {
  return (
    <div className="w-full p-10 bg-black  text-white flex flex-col gap-4 lg:flex-row items-center lg:items-start justify-evenly">
      <img
        src={aespa}
        alt=""
        className="w-[400px] h-[400px] rounded-xl object-cover"
      />
      <div className="max-w-[400px] flex flex-col gap-4 bg-zinc-800 rounded-xl p-4 font-bold">
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
          <span className="font-normal bg-zinc-500 px-2 py-[2px] rounded-sm">
            Heejin
          </span>
          <span className="font-normal bg-zinc-500 px-2 py-[2px] rounded-sm">
            Heejin
          </span>
          <span className="font-normal bg-zinc-500 px-2 py-[2px] rounded-sm">
            Heejin
          </span>
          <span className="font-normal bg-zinc-500 px-2 py-[2px] rounded-sm">
            Heejin
          </span>
          <span className="font-normal bg-zinc-500 px-2 py-[2px] rounded-sm">
            Heejin
          </span>
          <span className="font-normal bg-zinc-500 px-2 py-[2px] rounded-sm">
            Heejin
          </span>
          <span className="font-normal bg-zinc-500 px-2 py-[2px] rounded-sm">
            Heejin
          </span>
          <span className="font-normal bg-zinc-500 px-2 py-[2px] rounded-sm">
            Heejin
          </span>
          <span className="font-normal bg-zinc-500 px-2 py-[2px] rounded-sm">
            Heejin
          </span>
          <span className="font-normal bg-zinc-500 px-2 py-[2px] rounded-sm">
            Heejin
          </span>
          <span className="font-normal bg-zinc-500 px-2 py-[2px] rounded-sm">
            Heejin
          </span>
          <span className="font-normal bg-zinc-500 px-2 py-[2px] rounded-sm">
            Heejin
          </span>
          <span className="font-normal bg-zinc-500 px-2 py-[2px] rounded-sm">
            Heejin
          </span>
          <span className="font-normal bg-zinc-500 px-2 py-[2px] rounded-sm">
            Heejin
          </span>
          <span className="font-normal bg-zinc-500 px-2 py-[2px] rounded-sm">
            Heejin
          </span>
          <span className="font-normal bg-zinc-500 px-2 py-[2px] rounded-sm">
            Heejin
          </span>
          <span className="font-normal bg-zinc-500 px-2 py-[2px] rounded-sm">
            Heejin
          </span>
          <span className="font-normal bg-zinc-500 px-2 py-[2px] rounded-sm">
            Heejin
          </span>
          <span className="font-normal bg-zinc-500 px-2 py-[2px] rounded-sm">
            Heejin
          </span>
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
