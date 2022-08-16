
let Coxinha = prompt(`Deseja uma coxinha?
digite (S) para sim
digite (N) para não `).toUpperCase()

let conta = 0
let valorCoxinha = 0

while(Coxinha !== `N`){
    valorCoxinha = 2.50;
    conta = conta + valorCoxinha;
    Coxinha = prompt(`Deseja uma coxinha?
digite (S) para sim
digite (N) para não `).toUpperCase();

}
console.log(`Aqui está a sua Conta Sr: R$`, conta, `Reais.`);