class Animal {
    constructor(nome, idade) {
    this.nome = nome; 
    this.idade = idade;
    }

    fazerSom() {
    return `${this.nome} faz um som genérico.`; 
    }

    descricao() {
    return `${this.nome} tem ${this.idade} anos.`; 
    }
}

class Cachorro extends Animal {
    constructor(nome, idade, raca) {
    super(nome, idade);
    this.raca = raca; 
    }

    fazerSom() {
    return `${this.nome}, ${this.raca}, late`; 
    }
}

class Gato extends Animal {
    constructor(nome, idade, cor) {
    super(nome, idade); 
    this.cor = cor;
    }

    fazerSom() {
    return `${this.nome}, gato de cor ${this.cor}, mia`; 
    }
}

const cachorro1 = new Cachorro("Teca", 3, "Beagle");
const cachorro2 = new Cachorro("Tpol", 4, "Beagle");
const gato1 = new Gato("Napoleão", 6, "cinza");

console.log(cachorro1.fazerSom()); 
console.log(cachorro2.descricao()); 
console.log(gato1.fazerSom()); 
