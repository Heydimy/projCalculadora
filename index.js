const express = require('express')
const Calculadora = require("./Controller/Rotas")

const app = express()
const porta = process.env.PORT || 3000
app.listen(porta, ()=>{
    console.log("Iniciamos o Sistema!")
})

Calculadora.router(app)https://docs.github.com/articles/using-pull-requests
