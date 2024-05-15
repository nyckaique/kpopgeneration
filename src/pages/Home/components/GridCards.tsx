import { Card, CardHeader, CardFooter } from "@/components/ui/card";
import aespa from "../../../assets/4.jpg";

export function GridCards() {
  return (
    <div className="scroll-snap snap-none grid-container">
      <Card className="card">
        <CardHeader className="card-header">
          <img src={aespa} className="rounded-xl" alt="" />
        </CardHeader>
        <CardFooter className="card-footer">aespa</CardFooter>
      </Card>
    </div>
  );
}
