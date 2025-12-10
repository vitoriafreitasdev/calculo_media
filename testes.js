
const objeto = [
    {
        nome: "Vitoria",
        idade: 22,
        altura: 1.60
    },
    {
        nome: "Amanda",
        idade: 19,
        altura: 1.56
    },
    {
        nome: "Mario",
        idade: 30,
        altura: 1.76
    },
]

const objeto_ordenado = objeto.sort((a, b) => {
    if (a.nome < b.nome) {
        return -1;
    }
    if (a.nome > b.nome) {
        return 1;
    }
    return 0;
});

console.log(objeto_ordenado)