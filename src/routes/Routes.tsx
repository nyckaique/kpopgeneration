import { Routes as Switch, Route } from "react-router-dom";
import { Home, Group } from "../pages";
export function Routes() {
  return (
    <Switch>
      <Route path="/" element={<Home />} />
      <Route path="/:id" element={<Group />} />
    </Switch>
  );
}
