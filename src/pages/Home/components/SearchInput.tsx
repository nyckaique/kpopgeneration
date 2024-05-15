import { Input } from "@/components/ui/input";
import { Context } from "@/context";
import { useContext } from "react";
export function SearchInput() {
  const { setSearch } = useContext(Context)!;
  return (
    <div className="scroll-snap search-input-container">
      <Input
        className="search-input"
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
}
