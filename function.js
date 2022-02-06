// ---- BUTTON DARK MODE ---- //

const btnMode = document.querySelector('.btn-dark-mode');
const container = document.querySelector('.container');
const result = document.querySelector('#result');
const btnNumber = document.getElementsByClassName('btn-number')

btnMode.onclick = function(){
  this.classList.toggle('active') 
  container.classList.toggle('active')
  result.classList.toggle('active') 
 
  let len = btnNumber.length

  for(let i = 0; i < len; i++){
    btnNumber[i].classList.toggle('active');
  }

}

// ---- CALCULATOR ---- //

function insert(numValue){
  var number = document.getElementById('result').innerHTML;
  document.getElementById('result').innerHTML = number + numValue
  
}
  
function back(){
  var valueScren = document.getElementById('result').innerHTML
  document.getElementById('result').innerHTML = valueScren.substring(0, valueScren.length -1)
}

function clean(){
  document.getElementById('result').innerHTML = ""
}

function calculate(){
  var result = document.getElementById('result').innerHTML;

  if(result){
    document.getElementById('result').innerHTML = eval(result)
  }
}
