const colorBtn = document.querySelector('.colorBtn');
const bodyBcg = document.querySelector('body');

const colors = ['#34953','#7c8302','#4h898d','#ADD8E6','#87CEFA','#87CEEB','#00BFFF','#B0C4DE','#1E90FF','#6495ED','#4682B4','#4169E1','#0000FF','#0000CD'];

colorBtn.addEventListener('click',changeColor);

function changeColor (){
    let random = Math.floor(Math.random()*colors.length)
    bodyBcg.style.backgroundColor = colors[random];
}