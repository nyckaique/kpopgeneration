import { BrowserRouter } from "react-router-dom";
import { Routes } from "./routes";
import Provider from "@/context";
function App() {
  return (
    <Provider>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
