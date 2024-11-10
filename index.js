let wins = 60
let losses = 5
let heroName = "Tiago"
"
function result(){
    let result = wins - losses
}

let nivel

if (result <= 10){
    nivel = "Ferro"
} else if (result <= 20){
    nivel = "Bronze"
} else if (result <= 50){
    nivel = "Prata"
} else if (result <= 80){
    nivel = "Ouro"
} else if (result <= 90){
    nivel = "Diamante"
} else if (result < 100){
    nivel = "Lendário"
} else (result >= 100){
    nivel = "Imortal"
}

console.log(`O herói de nome "${heroName}" tem o saldo de ${result} e está no nível de ${nivel}`)