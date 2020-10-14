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

function parTotal (elem){
  let i =0;
  for(i = 0; i<elem.length; i++){
  let placeHolder = elem.children[1].innerHTML
  placeHolder = Number.parseInt(placeHolder);
  let parTotal = 0;
  parTotal += placeHolder;
  }
    return parTotal
    console.log(parTotal)
   
}

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

elem[19].children[2].innerHTML = 7;
elem[19].children[3].innerHTML = 7;

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

function totalScore(elem){
  let score = 0;
  for(i in elem)
    score = elem.children[2]
  return score
}
console.log(elem[1].children[2].innterHTML)

// display the number of children (all td elements)
// console.log(elem.children.length);
// display the content of the + button, which is the first child of the fifth element
// console.log(elem.children[4].children[0]); 

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
