
let Rain = prompt("How many inches of rain fell?");
let Asteriks = ' ';
let Inches = parseInt(Rain)

for (let i = 1; i <= Inches; i++ ){
    Asteriks += i; 
   }

for (let i = 0; i < Inches; i++){
    Asteriks = Asteriks.replace(Asteriks[i], "*");
}
   console.log(Asteriks);


let Yield = 50;
if (Inches >= 20){
    Yield = (50*.9);
    //yield goes down by 10%
    //20in or more
} else if (Inches < 10){
    Yield = (50*.8);
    //yield goes down by 20%
    //less than 10in
} else if (Inches >= 10 && Inches <= 19){
    //Yield is naturally 50
    Yield = 50;
}
//console.log(Yield);

let FertilizerYN = prompt("Did you use fertilizer?");

if (FertilizerYN == 'yes'){
    FertilizerYN = 'True';
} else if (FertilizerYN == 'no') {
        FertilizerYN = 'False';
}

if (FertilizerYN == 'True'){
    let FertilizerPR = prompt("Did you use regular or premium fertilizer?");

    if (FertilizerPR == 'regular'){
        Yield = (Yield*1.1);
        //Reg Fert add 10% to yield
    } else if (FertilizerPR == 'premium'){
        Yield = (Yield*1.15);
        //Prem Fert add 15% to yield
    }

} else if (FertilizerYN == "False"){
    Yield = Yield;
}
console.log('The yield should be ' + Yield + ' bushels per acre.');

//console.log(final yield/result)
