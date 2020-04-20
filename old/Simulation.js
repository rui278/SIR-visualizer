module.exports = {
	
	SIR: function(PopulationSize, betaVal, gammaVal, DaysToSimulate, StartingInfectionPercentage){

		let N = ((PopulationSize === undefined) ? 100 : PopulationSize);
		//let N=100

		let beta = ((betaVal === undefined) ? 1.5 : betaVal);//infection probability modifier per cycle
		//let beta=1.5

		let gamma = ((gammaVal === undefined) ? 1.5 : gammaVal);//recovery probabilty modifier per cicle
		//let gamma=(1/21)

		let Days = ((DaysToSimulate === undefined) ? 100 : DaysToSimulate);
		//let Days = 75

		let StartingIPercentage = ((StartingInfectionPercentage === undefined) ? 0.05 : StartingInfectionPercentage);


		let S=N*(1-StartingIPercentage);
		let I=StartingIPercentage*N;
		let R=0;

		let	Output=S+";"+I+";"+R+"\n";

		let dailyS = new Array();
		let dailyI = new Array();
		let dailyR = new Array();

		for (let i=0; i <Days; i++){
			
			let infectionProbability = beta*(I/N);
			let recoveryProbability = gamma;

			let STemp=S-(infectionProbability*S);
			if (STemp<1){
				STemp=0;
			};
			
			let ITemp=I+(infectionProbability*S)-(recoveryProbability*I);
			if (ITemp < 1){
				ITemp = 0;
			}


			let RTemp=R+(recoveryProbability*I);
			if (RTemp<1){
				RTemp=0;
			}

			let	NTemp=S+R+I

			
			S=STemp;
			dailyS[i]=STemp;
			I=ITemp;
			dailyI[i]=ITemp;
			R=RTemp;
			dailyR[i]=RTemp;

			
			//text=text+S+";"+I+";"+R+"<br>"
			Output=Output+S+";"+I+";"+R+";"+infectionProbability+";"+recoveryProbability+"\n";
		}

		return Output;
	},

	DailySIR: function(PopulationSize, betaVal, gammaVal, DaysToSimulate, StartingInfectionPercentage){

		let N = ((PopulationSize === undefined) ? 100 : PopulationSize);
		//let N=100

		let beta = ((betaVal === undefined) ? 1.5 : betaVal);//infection probability modifier per cycle
		//let beta=1.5

		let gamma = ((gammaVal === undefined) ? 1.5 : gammaVal);//recovery probabilty modifier per cicle
		//let gamma=(1/21)

		let Days = ((DaysToSimulate === undefined) ? 100 : DaysToSimulate);
		//let Days = 75

		let StartingIPercentage = ((StartingInfectionPercentage === undefined) ? 0.05 : StartingInfectionPercentage);


		let S=N*(1-StartingIPercentage);
		let I=StartingIPercentage*N;
		let R=0;

		let	Output = new Array(3);

		let dailyS = new Array();
		let dailyI = new Array();
		let dailyR = new Array();

		for (let i=0; i <Days; i++){
			
			let infectionProbability = beta*(I/N);
			let recoveryProbability = gamma;

			let STemp=S-(infectionProbability*S);
			if (STemp<1){
				STemp=0;
			};
			
			let ITemp=I+(infectionProbability*S)-(recoveryProbability*I);
			if (ITemp < 1){
				ITemp = 0;
			}


			let RTemp=R+(recoveryProbability*I);
			if (RTemp<1){
				RTemp=0;
			}

			let	NTemp=S+R+I

			
			S=STemp;
			dailyS[i]=STemp;
			I=ITemp;
			dailyI[i]=ITemp;
			R=RTemp;
			dailyR[i]=RTemp;

			
		}

		Output[1]=dailyS;
		Output[2]=dailyI;
		Output[3]=dailyR;

		return Output;
	}
}