// Aqui está nossa string de conexão com o banco de dados
// mongodb+srv://nakaidbuser:54779274885@cluster01.ea7a9tr.mongodb.net/?retryWrites=true&w=majority&appName=Cluster01

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");
const dotenv = require("dotenv");
const bcrypt = require("bcrypt");
const app = express();
app.use(express.json());
app.use(cors());
dotenv.config();

const Filme = mongoose.model("Filme", mongoose.Schema({
  titulo: {type: String},
  sinopse: {type: String}
}))


let filmes = [
  {
    titulo: "Forrest Gump - O Contador de Histórias",
    sinopse:
      "Quarenta anos da história dos Estados Unidos, vistos pelos olhos de Forrest Gump (Tom Hanks), um rapaz com QI abaixo da média e boas intenções.",
  },
  {
    titulo: "Um Sonho de Liberdade",
    sinopse:
      "Em 1946, Andy Dufresne (Tim Robbins), um jovem e bem sucedido banqueiro, tem a sua vida radicalmente modificada ao ser condenado por um crime que nunca cometeu.",
  },
];


// GET http://localhost:3000/oi
app.get("/oi", (req, res) => {
  res.send("oi");
});


// GET http://localhost:3000/filmes
app.get("/filmes", (req, res) => {
  res.json(filmes);
});


// POST http://localhost:3000/filmes
app.post("/filmes", (req, res) => {
  const { titulo, sinopse } = req.body;
  const novoFilme = { titulo, sinopse };
  filmes.push(novoFilme);
  res.json(filmes);
});


async function conectarAoMongoDB() {
  try {
    const stringConexao =
      process.env.CONEXAO_DB ||
      "mongodb+srv://nakaidbuser:54779274885@cluster01.ea7a9tr.mongodb.net/?retryWrites=true&w=majority&appName=Cluster01";

    await mongoose.connect(stringConexao);
    console.log("✅ Conectado ao MongoDB com sucesso!");
  } catch (e) {
    console.error("Erro ao conectar ao MongoDB:", e);
  }
}

// Inicialização do servidor
app.listen(3000, async () => {
  await conectarAoMongoDB();
  console.log("Servidor rodando em http://localhost:3000");
});
