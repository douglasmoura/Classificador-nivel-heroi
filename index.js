const nome = "DougDESTRUIDOR"
const xp = 1000;


// Variável para armazenar o nível do herói
var nivel = "unranked";

// Estrutura de decisão para determinar o nível com base na quantidade de XP
if (xp <= 1000) {
    nivel = "Ferro";
} else if (xp >= 1001 && xp <= 2000) {
    nivel = "Bronze";
} else if (xp >= 2001 && xp <= 5000) {
    nivel = "Prata";
} else if (xp >= 5001 && xp <= 7000) {
    nivel = "Ouro";
} else if (xp >= 7001 && xp <= 8000) {
    nivel = "Platina";
} else if (xp >= 8001 && xp <= 9000) {
    nivel = "Ascendente";
} else if (xp >= 9001 && xp <= 10000) {
    nivel = "Imortal";
} else { // xp >= 10001
    nivel = "Radiante";
}

// Mensagem final
console.log(`O Herói de nome ${nome} está no nível de ${nivel}.`);