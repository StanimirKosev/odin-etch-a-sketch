
const container=document.getElementById('container');
    
function defaultGrid(rows,cols){
    
    for (let i = 0 ; i < ( rows * cols); i++){
        const div = document.createElement('div');
        container.appendChild(div).className = 'div1';
       
        div.addEventListener('mouseover', function (){
            div.style.backgroundColor = "#808080";
        
        button.addEventListener('click', function(){
            div.style.backgroundColor = "white";
        });
        });
    };
   
};
defaultGrid(16,16);  /** Cant set up dynamically changing Grid.  */

const button=document.getElementById('butt');
button.textContent='Reset';

button.addEventListener("mouseenter", function(){
    button.style.backgroundColor="#ff6666";
})
button.addEventListener("mouseleave", function(){
    button.style.backgroundColor="#c2c2a3";
})





    