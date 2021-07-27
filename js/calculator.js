//Button
let btn = document.getElementById("btn-compute").addEventListener("click",Compute,ClearTxt);
let btn1 = document.getElementById("btn-clear").addEventListener("click",ClearTxt);


//Units Textbox
let txtUnits = parseFloat(document.querySelector(".txt-units").value);
let txtSubjects = parseFloat(document.querySelector(".txt-subjects").value);


//Subjects Textbox
let txtSub1 = parseFloat(document.querySelector(".txt-sub1").value);
let txtSub2 = parseFloat(document.querySelector(".txt-sub2").value);
let txtSub3 = parseFloat(document.querySelector(".txt-sub3").value);
let txtSub4 = parseFloat(document.querySelector(".txt-sub4").value);
let txtSub5 = parseFloat(document.querySelector(".txt-sub5").value);
let txtSub6 = parseFloat(document.querySelector(".txt-sub6").value);
let txtSub7 = parseFloat(document.querySelector(".txt-sub7").value);

//Grades Computations
let WeightedRating;
let Units;
let totalUnits;
let WeightedAverage;
let TotalGwa;
let answer;

function Compute(){
Units = txtUnits / txtSubjects;
if(txtSubjects > 6){
let grade1 = txtSub1 * Units;
let grade2 = txtSub2 * Units;
let grade3 = txtSub3 * Units;
let grade4 = txtSub4 * Units;
let grade5 = txtSub5 * Units;
let grade6 = txtSub6 * Units;
let grade7 = txtSub7 * Units;
WeightedRating = (grade1) + (grade2) + (grade3) + (grade4) +  (grade5) + (grade6) + (grade7);

totalUnits = Units * txtSubjects;
WeightedAverage = WeightedRating / totalUnits;
TotalGwa = WeightedAverage.toFixed(2);
answer = document.getElementById("gwa").innerHTML=TotalGwa;
}else{
let grade1 = txtSub1 * Units;
let grade2 = txtSub2 * Units;
let grade3 = txtSub3 * Units;
let grade4 = txtSub4 * Units;
let grade5 = txtSub5 * Units;
let grade6 = txtSub6 * Units;
WeightedRating = (grade1) + (grade2) + (grade3) + (grade4) +  (grade5) + (grade6);
totalUnits = Units * txtSubjects;
WeightedAverage = WeightedRating / totalUnits;
let txtSub7 = parseFloat(document.querySelector(".txt-sub7").disabled = true);

TotalGwa = WeightedAverage.toFixed(2);
answer = document.getElementById("gwa").innerHTML=TotalGwa; 
}
}

function ClearTxt(){
let txtUnits = parseFloat(document.querySelector(".txt-units").value="");
let txtSubjects = parseFloat(document.querySelector(".txt-subjects").value="");

let txtSub1 = parseFloat(document.querySelector(".txt-sub1").value="");
let txtSub2 = parseFloat(document.querySelector(".txt-sub2").value="");
let txtSub3 = parseFloat(document.querySelector(".txt-sub3").value="");
let txtSub4 = parseFloat(document.querySelector(".txt-sub4").value="");
let txtSub5 = parseFloat(document.querySelector(".txt-sub5").value="");
let txtSub6 = parseFloat(document.querySelector(".txt-sub6").value="");
let txtSub7 = parseFloat(document.querySelector(".txt-sub7").value="");
}
//NOT WORKING
//parseFloat(grade3) + parseFloat(grade4) + parseFloat(grade5) +parseFloat(grade7);

//WORKING
//parseFloat(grade1) + parseFloat(grade2) + parseFloat(grade6);
