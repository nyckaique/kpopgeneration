import axios from "axios";

const api = axios.create({
  baseURL: "https://kpopgenerationapi.onrender.com/",
});

async function listarGrupos() {
  const response = await api.get("/groups");
  const grupos = response.data;
  return grupos;
}

async function listarGrupo(id: string) {
  const response = await api.get(`/group?id=${id}`);
  const grupo = response.data;
  return grupo;
}

async function listarGeracao(generation: string) {
  const response = await api.get(`/groups/generation?generation=${generation}`);
  const grupo = response.data;
  return grupo;
}

export { listarGrupos, listarGrupo, listarGeracao };
