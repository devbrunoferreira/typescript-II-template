/* PRÁTICA GUIADA - Parte 1
Crie um sistema de cadastro de usuários que contenha:

1. Type Alias para uma pessoa (Person) com as propriedades id, name, email, password e role;
2. Type Aliases de conta, com as propriedades account e permission: 
  a. AdminAccount 
  b. NormalAccount
*/

import { table } from "console";

console.log("Olares <3");

// Admin | Normal

enum Role {
  ADMIN = "Admin",
  NORMAL = "Normal"
}

type Person = {
  id: string,
  name: string,
  email: string,
  password: string,
  role: Role
}

type AdminAccount = {
  account: string,
  permission: boolean
}

type NormalAccount = {
  account: string,
  permission: boolean
}

type AdminUser = Person & AdminAccount

type NormalUser = Person & NormalAccount

const admins: AdminUser[] = []

const commons: NormalUser[] = []


const user1: AdminUser = {
  id: "01",
  name: "Bruno",
  email: "bruno@email.com",
  password: "@bruno123",
  role: Role.ADMIN,
  account: "001",
  permission: true
}

const user2: NormalUser = {
  id: "02",
  name: "Rocio",
  email: "rocio@email.com",
  password: "@rocio123",
  role: Role.NORMAL,
  account: "002",
  permission: false
}

const user3: Person & AdminAccount = {
  id: "03",
  name: "Melisa",
  email: "melisa@email.com",
  password: "@melisa123",
  role: Role.ADMIN,
  account: "003",
  permission: true
}

const user4: Person & NormalAccount = {
  id: "04",
  name: "Maëvea",
  email: "maevea@email.com",
  password: "@maevea123",
  role: Role.NORMAL,
  account: "004",
  permission: false
}



// commons.push(user1)

// console.log(commons);

function validarUsuario(usuario: any) {
  if (usuario.role !== Role.ADMIN) {
    commons.push(usuario)
  } else {
    admins.push(usuario)
  }
}

validarUsuario(user1)
validarUsuario(user2)
validarUsuario(user3)
validarUsuario(user4)

console.table(commons)
console.table(admins)
















/* PRÁTICA GUIADA - Parte 2
Vamos continuar nosso sistema de cadastro de usuários criando:

1. Enum com valores ADMIN e NORMAL;
2. Tipo Intersection unindo: pessoa(Person) + permissão (Role);
3. Um array de usuários que permite guardar apenas usuários do tipo Person + Role;
4. Crie duas pessoas, uma com permissão normal e a outra admin;
5. Guarde essas pessoas no array de usuários.

*/ 