let countA = 0;
let countB = 0;
let scorebox1 = document.getElementById("scorebox1"); 
let scorebox2 = document.getElementById("scorebox2");
let btnA = document.getElementById("btnA"); 
// let resetbtn = document.getElementById("reset");


function addOne(){
	countA += 1;
    scorebox1.textContent = countA; 
}

function addTwo(){
	countA += 2;
    scorebox1.textContent = countA; 
}

function addThree(){
	countA += 3;
    scorebox1.textContent = countA; 
}

function addbOne(){
	countB += 1;
    scorebox2.textContent = countB; 
}
function addbTwo(){
	countB += 2;
    scorebox2.textContent = countB; 
}
function addbThree(){
	countB += 3;
    scorebox2.textContent = countB; 
}

function reset(){
	countA = 0;
    scorebox2.textContent = countA;
    countB = 0;
    scorebox1.textContent = countB;
}
