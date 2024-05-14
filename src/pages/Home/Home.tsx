import { HeroBanner, SearchInput, Accordion, GridCards } from "./components";
import { Footer } from "../../components/footer";

export function Home() {
  return (
    <div>
      <HeroBanner />
      <Accordion />
      <SearchInput />
      <GridCards />
      <Footer />
    </div>
  );
}
