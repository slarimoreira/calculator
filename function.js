// ---- BUTTON DARK MODE ---- //

var btnMode = document.querySelector('.btn-dark-mode');
let html = document.querySelector('html');

btnMode.addEventListener('click', function(){
  btnMode.classList.toggle('active-dark');
  html.classList.toggle('active');

  localStorage.setItem('classButton', btnMode.className);
  localStorage.setItem('classHTML', html.className);

})

function loadState(){
  const classButton = localStorage.getItem('classButton');
  const classHTML = localStorage.getItem('classHTML');

  if(classButton && classHTML){
    btnMode.className = classButton;
    html.className = classHTML;
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

loadState()