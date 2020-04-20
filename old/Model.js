console.log('1')
//const simulate = require('./Simulation.js');
console.log('2')
const Char = require('chart.js')
console.log('3')

//function(PopulationSize, betaVal, gammaVal, DaysToSimulate, StartingInfectionPercentage){
//let text = simulate.SIR(60000000, 0.5, 0.05, 50, 1/600);

/*const parser = parse({
  delimiter: ';'
})*/


//parser.on()


let S = [];
let I = [];
let R = [];

for(let j = 0; j < 100; j++){

	let output=simulate.DailySIR(300000000, 0.1+(j/100), 0.05, 150, 1/600)
	
	S = output[1];
	I = output[2]
	R = output[3]

}


let dados = '['+ I[0]

for(let j=1; j<I.length; j++){
	
	dados = dados + ',' + I[j]

}

dados = dados + ']'



let ctx = document.getElementById('myChart');

let myChart = new Chart(ctx, {type:'line',data:dados,options:{}});
