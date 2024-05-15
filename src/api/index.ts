import axios from "axios";

const api = axios.create({
  baseURL: "https://kpopgenerationapi.onrender.com/",
});

async function listarGrupos() {
  const response = await api.get("/groups");
  const grupos = response.data;
  return grupos;
  console.log(grupos);
}

export { listarGrupos };
