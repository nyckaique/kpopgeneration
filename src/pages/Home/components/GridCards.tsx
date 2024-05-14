import { Card, CardHeader, CardFooter } from "@/components/ui/card";
import aespa from "../../../assets/4.jpg";

export function GridCards() {
  return (
    <div className="scroll-snap snap-none grid-container">
      <Card className="rounded-none py-2 bg-zinc-900 text-white font-bold flex flex-col justify-evenly items-center  hover:scale-[1.05] border-none cursor-pointer w-[200px] max-w-[200px] m-auto">
        <CardHeader className="p-0 px-2 max-w-[200px] max-h-[200px]">
          <img src={aespa} className="rounded-xl overflow-hidden" alt="" />
        </CardHeader>
        <CardFooter className="p-0 px-2 pt-2 text-wrap ">aespa</CardFooter>
      </Card>
      <Card className="rounded-none py-2 bg-zinc-900 text-white font-bold flex flex-col justify-evenly items-center  hover:scale-[1.05] border-none cursor-pointer w-[200px] max-w-[200px] m-auto">
        <CardHeader className="p-0 px-2 max-w-[200px] max-h-[200px]">
          <img src={aespa} className="rounded-xl overflow-hidden" alt="" />
        </CardHeader>
        <CardFooter className="p-0 px-2 pt-2 text-wrap ">aespa</CardFooter>
      </Card>
      <Card className="rounded-none py-2 bg-zinc-900 text-white font-bold flex flex-col justify-evenly items-center  hover:scale-[1.05] border-none cursor-pointer w-[200px] max-w-[200px] m-auto">
        <CardHeader className="p-0 px-2 max-w-[200px] max-h-[200px]">
          <img src={aespa} className="rounded-xl overflow-hidden" alt="" />
        </CardHeader>
        <CardFooter className="p-0 px-2 pt-2 text-wrap ">aespa</CardFooter>
      </Card>
      <Card className="rounded-none py-2 bg-zinc-900 text-white font-bold flex flex-col justify-evenly items-center  hover:scale-[1.05] border-none cursor-pointer w-[200px] max-w-[200px] m-auto">
        <CardHeader className="p-0 px-2 max-w-[200px] max-h-[200px]">
          <img src={aespa} className="rounded-xl overflow-hidden" alt="" />
        </CardHeader>
        <CardFooter className="p-0 px-2 pt-2 text-wrap ">aespa</CardFooter>
      </Card>
      <Card className="rounded-none py-2 bg-zinc-900 text-white font-bold flex flex-col justify-evenly items-center  hover:scale-[1.05] border-none cursor-pointer w-[200px] max-w-[200px] m-auto">
        <CardHeader className="p-0 px-2 max-w-[200px] max-h-[200px]">
          <img src={aespa} className="rounded-xl overflow-hidden" alt="" />
        </CardHeader>
        <CardFooter className="p-0 px-2 pt-2 text-wrap ">aespa</CardFooter>
      </Card>
      <Card className="rounded-none py-2 bg-zinc-900 text-white font-bold flex flex-col justify-evenly items-center  hover:scale-[1.05] border-none cursor-pointer w-[200px] max-w-[200px] m-auto">
        <CardHeader className="p-0 px-2 max-w-[200px] max-h-[200px]">
          <img src={aespa} className="rounded-xl overflow-hidden" alt="" />
        </CardHeader>
        <CardFooter className="p-0 px-2 pt-2 text-wrap ">aespa</CardFooter>
      </Card>
      <Card className="rounded-none py-2 bg-zinc-900 text-white font-bold flex flex-col justify-evenly items-center  hover:scale-[1.05] border-none cursor-pointer w-[200px] max-w-[200px] m-auto">
        <CardHeader className="p-0 px-2 max-w-[200px] max-h-[200px]">
          <img src={aespa} className="rounded-xl overflow-hidden" alt="" />
        </CardHeader>
        <CardFooter className="p-0 px-2 pt-2 text-wrap ">aespa</CardFooter>
      </Card>
    </div>
  );
}
