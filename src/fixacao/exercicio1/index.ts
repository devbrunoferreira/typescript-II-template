/* EXERCÍCIO DE FIXAÇÃO
1. Crie um novo objeto. Este objeto é uma pessoa e deve possuir três propriedades:
  a. nome, que é uma string;
  b. idade, que é um número;
  c. corFavorita, que é uma string.

2. Crie mais três objetos, que também precisam ter apenas os campos definidos acima. Crie um type Pessoa para garantir
que todos os objetos tenham as mesmas propriedades.

3. Modifique o type Pessoa para que possamos escolher apenas entre as cores do arco-íris. Utilize um enum para isso.
*/

enum Rainbow {
  RED = "Red",
  ORANGE = "Orange",
  YELLOW = "Yellow",
  GREEN = "Green",
  BLUE = "Blue",
  VIOLET = "Violet"
}

type Person = {
  name: string,
  age: number,
  favoriteColor: Rainbow
}

const person1: Person = {
  name: "Bruno",
  age: 31,
  favoriteColor: Rainbow.BLUE
}

const person2: Person = {
  name: "Duda",
  age: 8,
  favoriteColor: Rainbow.YELLOW
}

const person3: Person = {
  name: "Wanessa",
  age: 36,
  favoriteColor: Rainbow.RED
}

const person4: Person = {
  name: "Nadia",
  age: 29,
  favoriteColor: Rainbow.VIOLET
}

const all: Person[] = []

all.push(person1);
all.push(person2);
all.push(person3);
all.push(person4);

console.table(all)