// Seleziono elementi della DOM
const btnSend = document.querySelector('button');
const containerEl = document.querySelector('.container');
const selectEl = document.getElementById('select');
const footerEl = document.querySelector('footer')
// Rendo il bottone cliccabile e creo la tabella

/*let maxCells = 100;*/

btnSend.addEventListener('click', function(){
    containerEl.innerHTML = '';
    

    if(selectEl.value == 'easy'){
        cellContainer (100, 'easy')
    } else if (selectEl.value == 'medium'){
        cellContainer(81, 'medium')
    } else {
        cellContainer (49, 'hard')
    }

    footerEl.innerHTML = "<span> Made with &hearts; by Boolean</span>";
    footerEl.style.padding='2rem'
   

})

function cellContainer (maxCells, difficulty){
    
    for(let i=1; i <= maxCells; i++){
        const cellDom = `<div class="cell ${difficulty}">${i}</div>` 
        containerEl.innerHTML += cellDom
    }

    //Seleziono tutte le celle
    const cells = document.querySelectorAll('.cell');
   
    // Seleziono ogni cella
    for (let i = 0; i < cells.length; i++) {
        
        const thisCell = cells[i];

        //Aggiungo un event listener al click
        thisCell.addEventListener('click', function() {
            thisCell.classList.toggle('bg_active');
            console.log(`Hai cliccato la casella ${thisCell.innerHTML}`);
        }) 
        
        if(selectEl.value == 'easy'){
            thisCell.style.width='calc(100% / 10)'
        } else if (selectEl.value == 'medium'){
            thisCell.style.width='calc(100% / 9)'
        } else {
            thisCell.style.width='calc(100% / 7)'
        }
    }
    
}

