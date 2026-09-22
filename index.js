// ===== Não esquecer =====
// programa simples pra lembrar das minhas atividades

// primeira atividade
const atividade1 = "Atividade de matematica"
const local1 = "casa"
const dias1 = 2

// segunda atividade
const atividade2 = "Ir para monitoria de quimica"
const local2 = "escola"
const dias2 = 0

// terceira atividade
const atividade3 = "estudar para prova de matematica"
const local3 = "casa"
const dias3 = 1

// urgencia1 vai ser definida depois, por isso uso let e nao const
let urgencia1;
if (dias1 <= 3) {
  urgencia1 = "URGENTE"
} else {
  urgencia1 = "normal"
}

let urgencia2;
if (dias2 <= 3) {
  urgencia2 = "URGENTE"
} else {
  urgencia2 = "normal"
}

let urgencia3;
if (dias3 <= 3) {
  urgencia3 = "URGENTE"
} else {
  urgencia3 = "normal"
}

// mostra o titulo do programa
console.log("--- Não esquecer ---")
console.log("")

// mostra as informacoes de cada atividade juntas numa linha
console.log(atividade1 + " | " + local1 + " | " + dias1 + " dias | " + urgencia1)
console.log(atividade2 + " | " + local2 + " | " + dias2 + " dias | " + urgencia2)
console.log(atividade3 + " | " + local3 + " | " + dias3 + " dias | " + urgencia3)

