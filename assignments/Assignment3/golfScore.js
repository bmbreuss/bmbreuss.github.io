let elem = [];
// assign the entire table row for hole 1 to a variable, elem
elem[1]
  = document.getElementById("1");

elem[2]
  = document.getElementById("2");

elem[3]
  = document.getElementById("3");

elem[4]
  = document.getElementById("4");

elem[5]
  = document.getElementById("5");

elem[6]
  = document.getElementById("6");

elem[7]
  = document.getElementById("7");

elem[8]
  = document.getElementById("8");

elem[9]
  = document.getElementById("9");

elem[10]
  = document.getElementById("10");

elem[11]
  = document.getElementById("11");

elem[12]
  = document.getElementById("12");

elem[13]
  = document.getElementById("13");

elem[14]
  = document.getElementById("14");

elem[15]
  = document.getElementById("15");

elem[16]
  = document.getElementById("16");

elem[17]
  = document.getElementById("17");

elem[18]
  = document.getElementById("18");

elem[19]
= document.getElementById("totals");



let par1 = elem[1].children[1].innerHTML;
par1 = Number.parseInt(par1);

let par2 = elem[2].children[1].innerHTML;
par2 = Number.parseInt(par2);

let par3 = elem[3].children[1].innerHTML;
par3 = Number.parseInt(par3);

let par4 = elem[4].children[1].innerHTML;
par4 = Number.parseInt(par4);

let par5 = elem[5].children[1].innerHTML;
par5 = Number.parseInt(par5);

let par6 = elem[6].children[1].innerHTML;
par6 = Number.parseInt(par6);

let par7 = elem[7].children[1].innerHTML;
par7 = Number.parseInt(par7);

let par8 = elem[8].children[1].innerHTML;
par8 = Number.parseInt(par8);

let par9 = elem[9].children[1].innerHTML;
par9 = Number.parseInt(par9);

let par10 = elem[10].children[1].innerHTML;
par10 = Number.parseInt(par10);

let par11 = elem[11].children[1].innerHTML;
par11 = Number.parseInt(par11);

let par12 = elem[12].children[1].innerHTML;
par12 = Number.parseInt(par12);

let par13 = elem[13].children[1].innerHTML;
par13 = Number.parseInt(par13);

let par14 = elem[14].children[1].innerHTML;
par14 = Number.parseInt(par14);

let par15 = elem[15].children[1].innerHTML;
par15 = Number.parseInt(par15);

let par16 = elem[16].children[1].innerHTML;
par16 = Number.parseInt(par16);

let par17 = elem[17].children[1].innerHTML;
par17 = Number.parseInt(par17);

let par18 = elem[18].children[1].innerHTML;
par18 = Number.parseInt(par18);

let totalPar = par1+par2+par3+ par4 + par5 + par6
+ par7 + par8 + par9 + par10+ par11 + par12 + par13
+ par14+ par15+ par16+ par17+ par18;
  



elem[19].children[1].innerHTML = 
  totalPar;



// create an "add1" function
function add1 (elem) {
  if(elem.children[2].innerHTML == "-") 
    elem.children[2].innerHTML = "1";
  else {
    let currentScore = elem.children[2].innerHTML;
    currentScore = Number.parseInt(currentScore);
    elem.children[2].innerHTML = currentScore + 1;
  }
  
  let score1 = elem.children[2].innerHTML
   let par1 =   elem.children[1].innerHTML
   if(isNaN(score1 - par1)){
     elem.children[3].innerHTML = "-"
   }
  else
   elem.children[3].innerHTML = score1 - par1
  
}

//creates a subtract 1 function that also calculates over if - button is hit
function subtract1 (elem) {
  if(elem.children[2].innerHTML == "-") 
    elem.children[2].innerHTML = "-1";
  else {
    let currentScore = elem.children[2].innerHTML;
    currentScore = Number.parseInt(currentScore);
    elem.children[2].innerHTML = currentScore - 1;
  }
  let score1 = elem.children[2].innerHTML
   let par1 =   elem.children[1].innerHTML
   if(isNaN(score1 - par1)){
     elem.children[3].innerHTML = "-"
   }
  else
   elem.children[3].innerHTML = score1 - par1
}

function clear1 (elem){
  elem.children[2].innerHTML = "-";
  elem.children[3].innerHTML = "-"
}

function totalOver(elem1, elem2,elem3,elem4, elem5, elem6,elem7,elem8,elem9,elem10,elem11,elem12,elem13,elem14,elem15,elem16,elem17,elem18,elem19){
  let hole1 = elem1.children[3].innerHTML
  if(isNaN(hole1)){
    hole1 = 0
  }
  else{
   hole1 = Number.parseInt(hole1) 
  }
  
  let hole2 = elem2.children[3].innerHTML
  if(isNaN(hole2)){
    hole2 = 0
  }
  else{
   hole2 = Number.parseInt(hole2) 
  }
  
  let hole3 = elem3.children[3].innerHTML
  if(isNaN(hole3)){
    hole3 = 0
  }
  else{
   hole3 = Number.parseInt(hole3) 
  }
  
  let hole4 = elem4.children[3].innerHTML
  if(isNaN(hole4)){
    hole4 = 0
  }
  else{
   hole4 = Number.parseInt(hole4) 
  }
  
  let hole5 = elem5.children[3].innerHTML
  if(isNaN(hole5)){
    hole5 = 0
  }
  else{
   hole5 = Number.parseInt(hole5) 
  }
  
  let hole6 = elem6.children[3].innerHTML
  if(isNaN(hole6)){
    hole6 = 0
  }
  else{
   hole6 = Number.parseInt(hole6) 
  }
  
  let hole7 = elem7.children[3].innerHTML
  if(isNaN(hole7)){
    hole7 = 0
  }
  else{
   hole7 = Number.parseInt(hole7) 
  }
  
  let hole8 = elem8.children[3].innerHTML
  if(isNaN(hole8)){
    hole8 = 0
  }
  else{
   hole8 = Number.parseInt(hole8) 
  }
  
  let hole9 = elem9.children[3].innerHTML
  if(isNaN(hole9)){
    hole9 = 0
  }
  else{
   hole9 = Number.parseInt(hole9) 
  }
  
  let hole10 = elem10.children[3].innerHTML
  if(isNaN(hole10)){
    hole10 = 0
  }
  else{
   hole10 = Number.parseInt(hole10) 
  }
  
  let hole11 = elem11.children[3].innerHTML
  if(isNaN(hole11)){
    hole11 = 0
  }
  else{
   hole11 = Number.parseInt(hole11) 
  }
  
  let hole12 = elem12.children[3].innerHTML
  if(isNaN(hole12)){
    hole12 = 0
  }
  else{
   hole12 = Number.parseInt(hole12) 
  }
  
  let hole13 = elem13.children[3].innerHTML
  if(isNaN(hole13)){
    hole13 = 0
  }
  else{
   hole13 = Number.parseInt(hole13) 
  }
  
  let hole14 = elem14.children[3].innerHTML
  if(isNaN(hole14)){
    hole14 = 0
  }
  else{
   hole14 = Number.parseInt(hole14) 
  }
  
  let hole15 = elem15.children[3].innerHTML
  if(isNaN(hole15)){
    hole15 = 0
  }
  else{
   hole15 = Number.parseInt(hole15) 
  }
  
  let hole16 = elem16.children[3].innerHTML
  if(isNaN(hole16)){
    hole16 = 0
  }
  else{
   hole16 = Number.parseInt(hole16) 
  }
  
  let hole17 = elem17.children[3].innerHTML
  if(isNaN(hole17)){
    hole17 = 0
  }
  else{
   hole17 = Number.parseInt(hole17) 
  }
  
  let hole18 = elem18.children[3].innerHTML
  if(isNaN(hole18)){
    hole18 = 0
  }
  else{
   hole18 = Number.parseInt(hole18) 
  }
  
  elem19.children[3].innerHTML = hole1+hole2+hole3+hole4+hole5+hole6+hole7+hole8+hole9+hole10+hole11+hole12+hole13+hole14+hole15+hole16+hole17+hole18
}

function totalScore(elem1, elem2,elem3,elem4, elem5, elem6,elem7,elem8,elem9,elem10,elem11,elem12,elem13,elem14,elem15,elem16,elem17,elem18,elem19){
  let hole1 = elem1.children[2].innerHTML
  if(isNaN(hole1)){
    hole1 = 0
  }
  else{
   hole1 = Number.parseInt(hole1) 
  }
  
  let hole2 = elem2.children[2].innerHTML
  if(isNaN(hole2)){
    hole2 = 0
  }
  else{
   hole2 = Number.parseInt(hole2) 
  }
  
  let hole3 = elem3.children[2].innerHTML
  if(isNaN(hole3)){
    hole3 = 0
  }
  else{
   hole3 = Number.parseInt(hole3) 
  }
  
  let hole4 = elem4.children[2].innerHTML
  if(isNaN(hole4)){
    hole4 = 0
  }
  else{
   hole4 = Number.parseInt(hole4) 
  }
  
  let hole5 = elem5.children[2].innerHTML
  if(isNaN(hole5)){
    hole5 = 0
  }
  else{
   hole5 = Number.parseInt(hole5) 
  }
  
  let hole6 = elem6.children[2].innerHTML
  if(isNaN(hole6)){
    hole6 = 0
  }
  else{
   hole6 = Number.parseInt(hole6) 
  }
  
  let hole7 = elem7.children[2].innerHTML
  if(isNaN(hole7)){
    hole7 = 0
  }
  else{
   hole7 = Number.parseInt(hole7) 
  }
  
  let hole8 = elem8.children[2].innerHTML
  if(isNaN(hole8)){
    hole8 = 0
  }
  else{
   hole8 = Number.parseInt(hole8) 
  }
  
  let hole9 = elem9.children[2].innerHTML
  if(isNaN(hole9)){
    hole9 = 0
  }
  else{
   hole9 = Number.parseInt(hole9) 
  }
  
  let hole10 = elem10.children[2].innerHTML
  if(isNaN(hole10)){
    hole10 = 0
  }
  else{
   hole10 = Number.parseInt(hole10) 
  }
  
  let hole11 = elem11.children[2].innerHTML
  if(isNaN(hole11)){
    hole11 = 0
  }
  else{
   hole11 = Number.parseInt(hole11) 
  }
  
  let hole12 = elem12.children[2].innerHTML
  if(isNaN(hole12)){
    hole12 = 0
  }
  else{
   hole12 = Number.parseInt(hole12) 
  }
  
  let hole13 = elem13.children[2].innerHTML
  if(isNaN(hole13)){
    hole13 = 0
  }
  else{
   hole13 = Number.parseInt(hole13) 
  }
  
  let hole14 = elem14.children[2].innerHTML
  if(isNaN(hole14)){
    hole14 = 0
  }
  else{
   hole14 = Number.parseInt(hole14) 
  }
  
  let hole15 = elem15.children[2].innerHTML
  if(isNaN(hole15)){
    hole15 = 0
  }
  else{
   hole15 = Number.parseInt(hole15) 
  }
  
  let hole16 = elem16.children[2].innerHTML
  if(isNaN(hole16)){
    hole16 = 0
  }
  else{
   hole16 = Number.parseInt(hole16) 
  }
  
  let hole17 = elem17.children[2].innerHTML
  if(isNaN(hole17)){
    hole17 = 0
  }
  else{
   hole17 = Number.parseInt(hole17) 
  }
  
  let hole18 = elem18.children[2].innerHTML
  if(isNaN(hole18)){
    hole18 = 0
  }
  else{
   hole18 = Number.parseInt(hole18) 
  }
  
  elem19.children[2].innerHTML = hole1+hole2+hole3+hole4+hole5+hole6+hole7+hole8+hole9+hole10+hole11+hole12+hole13+hole14+hole15+hole16+hole17+hole18
}


// display the number of children (all td elements)
// console.log(elem.children.length);
// display the content of the + button, which is the first child of the fifth element
// console.log(elem.children[4].children[0]); 


elem[19].children[4].children[0].onclick =
  function(){totalScore(elem[1],elem[2],elem[3],elem[4],elem[5],elem[6],elem[7],elem[8],elem[9],elem[10],elem[11],elem[12],elem[13],elem[14],elem[15],elem[16],elem[17],elem[18], elem[19]);};

elem[19].children[4].children[1].onclick =
  function(){totalOver(elem[1],elem[2],elem[3],elem[4],elem[5],elem[6],elem[7],elem[8],elem[9],elem[10],elem[11],elem[12],elem[13],elem[14],elem[15],elem[16],elem[17],elem[18], elem[19]);};
// assign a function to the + button

//hole 1
elem[1].children[4].children[0].onclick 
  = function(){add1(elem[1]);};

elem[1].children[4].children[1].onclick
= function(){subtract1(elem[1]);};

elem[1].children[4].children[2].onclick =
  function(){clear1(elem[1]);};


//Hole 2
elem[2].children[4].children[0].onclick 
  = function(){add1(elem[2]);};

elem[2].children[4].children[1].onclick
= function(){subtract1(elem[2]);};

elem[2].children[4].children[2].onclick =
  function(){clear1(elem[2]);};


//Hole 3
elem[3].children[4].children[0].onclick 
  = function(){add1(elem[3]);};

elem[3].children[4].children[1].onclick
= function(){subtract1(elem[3]);};

elem[3].children[4].children[2].onclick =
  function(){clear1(elem[3]);};


//Hole 4
elem[4].children[4].children[0].onclick 
  = function(){add1(elem[4]);};

elem[4].children[4].children[1].onclick
= function(){subtract1(elem[4]);};

elem[4].children[4].children[2].onclick =
  function(){clear1(elem[4]);};


//Hole 5
elem[5].children[4].children[0].onclick 
  = function(){add1(elem[5]);};

elem[5].children[4].children[1].onclick
= function(){subtract1(elem[5]);};

elem[5].children[4].children[2].onclick =
  function(){clear1(elem[5]);};


//Hole 6
elem[6].children[4].children[0].onclick 
  = function(){add1(elem[6]);};

elem[6].children[4].children[1].onclick
= function(){subtract1(elem[6]);};

elem[6].children[4].children[2].onclick =
  function(){clear1(elem[6]);};


//Hole 7
elem[7].children[4].children[0].onclick 
  = function(){add1(elem[7]);};

elem[7].children[4].children[1].onclick
= function(){subtract1(elem[7]);};

elem[7].children[4].children[2].onclick =
  function(){clear1(elem[7]);};


//Hole 8
elem[8].children[4].children[0].onclick 
  = function(){add1(elem[8]);};

elem[8].children[4].children[1].onclick
= function(){subtract1(elem[8]);};

elem[8].children[4].children[2].onclick =
  function(){clear1(elem[8]);};


//Hole 9
elem[9].children[4].children[0].onclick 
  = function(){add1(elem[9]);};

elem[9].children[4].children[1].onclick
= function(){subtract1(elem[9]);};

elem[9].children[4].children[2].onclick =
  function(){clear1(elem[9]);};


//Hole 10
elem[10].children[4].children[0].onclick 
  = function(){add1(elem[10]);};

elem[10].children[4].children[1].onclick
= function(){subtract1(elem[10]);};

elem[10].children[4].children[2].onclick =
  function(){clear1(elem[10]);};


//Hole 11
elem[11].children[4].children[0].onclick 
  = function(){add1(elem[11]);};

elem[11].children[4].children[1].onclick
= function(){subtract1(elem[11]);};

elem[11].children[4].children[2].onclick =
  function(){clear1(elem[11]);};


//Hole 12
elem[12].children[4].children[0].onclick 
  = function(){add1(elem[12]);};

elem[12].children[4].children[1].onclick
= function(){subtract1(elem[12]);};

elem[12].children[4].children[2].onclick =
  function(){clear1(elem[12]);};


//Hole 13
elem[13].children[4].children[0].onclick 
  = function(){add1(elem[13]);};

elem[13].children[4].children[1].onclick
= function(){subtract1(elem[13]);};

elem[13].children[4].children[2].onclick =
  function(){clear1(elem[13]);};


//Hole 14
elem[14].children[4].children[0].onclick 
  = function(){add1(elem[14]);};

elem[14].children[4].children[1].onclick
= function(){subtract1(elem[14]);};

elem[14].children[4].children[2].onclick =
  function(){clear1(elem[14]);};


//Hole 15
elem[15].children[4].children[0].onclick 
  = function(){add1(elem[15]);};

elem[15].children[4].children[1].onclick
= function(){subtract1(elem[15]);};

elem[15].children[4].children[2].onclick =
  function(){clear1(elem[15]);};


//Hole 16
elem[16].children[4].children[0].onclick 
  = function(){add1(elem[16]);};

elem[16].children[4].children[1].onclick
= function(){subtract1(elem[16]);};

elem[16].children[4].children[2].onclick =
  function(){clear1(elem[16]);};


//Hole 17
elem[17].children[4].children[0].onclick 
  = function(){add1(elem[17]);};

elem[17].children[4].children[1].onclick
= function(){subtract1(elem[17]);};

elem[17].children[4].children[2].onclick =
  function(){clear1(elem[17]);};


//Hole 18
elem[18].children[4].children[0].onclick 
  = function(){add1(elem[18]);};

elem[18].children[4].children[1].onclick
= function(){subtract1(elem[18]);};

elem[18].children[4].children[2].onclick =
  function(){clear1(elem[18]);};
