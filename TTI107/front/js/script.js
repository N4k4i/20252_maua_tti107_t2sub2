const protocolo = "http://"
const baseURL = "localhost:3000"
const filmesEndpoint = "/filmes"

async function obeterFilmes() {
   /* console.log("teste"); */
   const URLcompleta = `$(protocolo)$(baseURL)$(filmesEndpoint)`
   const filmes = (await axios.get(URLcompleta))
}