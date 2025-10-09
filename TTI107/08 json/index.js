const express = require('express')
const app = express()
app.use(express.json())

//endpoint para atender um get oi http://localhost:3000/oi
//app.listen(porta, ação)
//app.get(endpoint, ação)
app.get('/oi', (req, res) => [
    res.send('oi')
])
//endpoint para atender um get filmes: http://localhost:3000/filmes
app.get("/filme", (req, res) => {
    res.json(filme)
})

//cadastrar um nome filme: post filme: http://localhost:3000/filmes
app.post("/filme", (req, res) => {
    const titulo = req.body.titulo
    const sinopse = req.body.sinopse
    const filme = {titulo: titulo, sinopse: sinopse}
    //inserir o novo filme na base filmes, NA MEMÓRIA
    filmes.push(filme)
    //so para verificar, envia a base atualizada
    res.send(filme)
})





app.listen(3000, () => console.log("Server up & running!"))