const express = require("express");
const router = express.Router();

function adicao(a, b) {
    return a + b;
}

function subtracao(a, b) {
    return a - b;
}

function multiplicacao(a, b) {
    return a * b;
}

function divisao(a, b) {
    if (b === 0) {
        return "Erro: divisão por zero!";
    }
    return a / b;
}

router.get("/adicao", (req, res) => {
    res.send("Você está na rota adição");
});
router.post("/adicao", (req, res) => {
    const { a, b } = req.body;
    res.json({ resultado: adicao(Number(a), Number(b)) });
});

router.get("/subtracao", (req, res) => {
    res.send("Você está na rota subtração");
});
router.post("/subtracao", (req, res) => {
    const { a, b } = req.body;
    res.json({ resultado: subtracao(Number(a), Number(b)) });
});

router.get("/multiplicacao", (req, res) => {
    res.send("Você está na rota multiplicação");
});
router.post("/multiplicacao", (req, res) => {
    const { a, b } = req.body;
    res.json({ resultado: multiplicacao(Number(a), Number(b)) });
});

router.get("/divisao", (req, res) => {
    res.send("Você está na rota divisão");
});
router.post("/divisao", (req, res) => {
    const { a, b } = req.body;
    res.json({ resultado: divisao(Number(a), Number(b)) });
});

module.exports = {
    adicao,
    subtracao,
    multiplicacao,
    divisao,
    router
};
