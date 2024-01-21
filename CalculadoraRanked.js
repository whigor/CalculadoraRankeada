function CalcXp() {
    console.log("Seja Bem vindo(a) à calculadora de Xp de herói!");
    console.log("---------------------------------------------------");
    let nomeheroi = prompt("Digite o nome do herói: ");
    console.log("---------------------------------------------------");
    let xp = parseInt(prompt("Digite o XP:"));
    console.log("----------------------------------------------------");
    let nivel;

    if (xp > 0 && xp <= 1000) {
        nivel = "Ferro. Sua jornada ainda está começando!";
    } else if (xp >= 1001 && xp <= 2000) {
        nivel = "Bronze. Você está ficando mais forte!";
    } else if (xp >= 2001 && xp <= 6000) {
        nivel = "Prata. Um herói reluzente!";
    } else if (xp >= 6001 && xp <= 7000) {
        nivel = "Ouro. Parabéns!!";
    } else if (xp >= 7001 && xp <= 8000) {
        nivel = "Platina. Ascenda!!";
    } else if (xp >= 8001 && xp <= 9000) {
        nivel = "Ascendente. Parabéns! Mas pode ficar ainda mais forte!";
    } else if (xp >= 9001 && xp <= 10000) {
        nivel = "Imortal. Quando poder!!";
    } else if (xp >= 10001) {
        nivel = "Radiante. Não há mais limites para você!!";
    }

    console.log("O Herói " + nomeheroi + " está no nível de " + nivel);
    console.log("--------------------------------------");
    console.log("Obrigado por usar a calculadora de Xp!!");
return nivel;
}

function VitDer() {
    let vitorias = prompt("Digite o número de vitórias do seu herói: ");
    let derrotas = prompt("Digite o número de derrotas do seu heroi: ");
    let SaldoVit = vitorias - derrotas;
    return SaldoVit;
}

function RankCheck(SaldoVit) {
    let ranking;

    if (SaldoVit < 10) {
        ranking = "Ferro";
    } else if (SaldoVit >= 11 && SaldoVit <= 20) {
        ranking = "Bronze";
    } else if (SaldoVit >= 21 && SaldoVit <= 50) {
        ranking = "Prata";
    } else if (SaldoVit >= 51 && SaldoVit <= 80) {
        ranking = "Ouro";
    } else if (SaldoVit >= 81 && SaldoVit <= 90) {
        ranking = "Diamante";
    } else if (SaldoVit >= 91 && SaldoVit <= 100) {
        ranking = "Lendário";
    } else if (SaldoVit > 100) {
        ranking = "Imortal";
    }

    return ranking;
}

console.log ("O Herói " +nomeheroi+ " tem de saldo de " +ranking+ "e está no nível de " +nivel);