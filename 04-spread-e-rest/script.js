// function showList(empresa, ...clientes) {
//   console.log(empresa);
//   console.log(clientes);
// }

// showList("Origamid", "João", "Maria", 10);

// const numeros = [1, 2, 4, 29, 32, 2, 45, 3];

// console.log(Math.max(...numeros));

// const items = document.querySelectorAll("li");

// [...items].map(item => {
//   console.log(item);
// });

// console.log(items);

// const carro = { cor: "Azul", portas: 4, ano: 2020 };

// const cloneCarro2 = carro;

// const cloneCarro = { ...carro, turbo: true };

class Transporte {
  constructor() {
    this.terrestre = true;
  }
  andar() {
    console.log("andou");
  }
}

class Carro extends Transporte {
  constructor(cor, portas) {
    super();
    this.cor = cor;
    this.portas = portas;
  }
}

const carro = new Carro("vermelho", 4);

const cloneCarro = { ...carro };

console.log(carro);
console.log(cloneCarro);
