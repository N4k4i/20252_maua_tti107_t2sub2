const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const dotenv = require("dotenv")
const uniqueValidator = requre('mongoose-unique-validator')
const bcrypt = require('bcrypt')
const app = express()
dotenv.config()
app.use(express.json())
app.use(cors())

const stringConexao = process.env.CONEXAO_BD
async function conectarAoMongoDB() {
    await mongoose.connect(stringConexao)
}

const Filme = mongoose.model("filme", mongoose.Schema({
    titulo: { type: String },
    sinopse: { type: String }
}))

const usuarioSchema = mongoose.Schema({
    login: { type: string, required: true },
    password: { type: string, required: true }
})

usuarioSchema.plugin(uniqueValidator)
const Usuario = mongoose.model("Usuario", usuarioSchema)


app.get("/oi", (req, res) => {
    res.send('olá')
})

app.listen(3000, () => {
    try {
        conectarAoMongoDB()
        console.log("up and running")
    }
    catch (e) {
        console.log("erro:" + e)
    }
})

// cadastrar novo filme: post filmes; http://localhost.3000/filmes
app.post('/filmes', async (req, res) => {
    //montar um objetvo json filme com as ifnformaçõs recebidas
    const titulo = req.body.titulo
    const sinopse = req.body.sinopse
    // construir um objeto da classe filme
    const filme = new Filme({ titulo: titulo, sinopse: sinopse })
    // enviar o filme p o banco 
    await filme.save()
    // buscar a coleção do banco atualizada 
    const filmes = await Filme.find()
    // só para verificar: envia a base aualizada
    res.json(filmes)
})

app.post('/singup', async (req, res) => {
    try {
        const login = req.body.login
        const password = req.body.password
        //criptografar a senha
        const passwordCriptografada = await bcrypt.hash(password, 10);
        //constroi o objeto usuário
        const usuario = new Usuario({
            login: login,
            password: passwordCriptografada
        })
        //salvar o usuário, capturando a resposto do Mongo
        const respostaMongo = await usuario.save()
        console.log(respostaMongo);
        res.status(201).end()
    }
    catch (exception) {
        console.log(exception)
        res.status(409).end()
    }
})

//  endpoint para atender um get filmes: http//localhost:3000/filmes

app.get('/filmes', async (req, res) => {
    const filmes = await Filme.find()
    res.json(filmes)
})

// let filmes = [{
//     titulo: "Forrest Gump - O Contador de Histórias",
//     sinopse:
//         "Quarenta anos da história dos Estados Unidos, vistos pelos olhos de Forrest Gump (Tom Hanks), um rapaz com QI abaixo da média e boas intenções."
// },
// {
//     titulo: "Um Sonho de Liberdade",
//     sinopse:
//         "Em 1946, Andy Dufresne (Tim Robbins), um jovem e bem sucedido banqueiro, tem a sua vida radicalmente modificada ao ser condenado por um crime que nunca cometeu, o homicídio de sua esposa e do amante dela"
// }
// ];















// Aqui está nossa string de conexão com o banco de dados
// mongodb+srv://nakaidbuser:54779274885@cluster01.ea7a9tr.mongodb.net/?retryWrites=true&w=majority&appName=Cluster01

// console.log('Hello, NodeJS')
