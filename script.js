
const container=document.getElementById('container');
    
function defaultGrid(rows,cols){
    for (let i = 0 ; i < ( rows * cols); i++){
        const div = document.createElement('div');
        container.appendChild(div).className = 'div1';
                
    }
}

defaultGrid(16,16);
        






    