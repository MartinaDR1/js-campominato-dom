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
        random (100)
    } else if (selectEl.value == 'medium'){
        cellContainer(81, 'medium')
        random (81)
    } else {
        cellContainer (49, 'hard')
        random (49)
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

/*Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe.
nella stessa cella può essere posizionata al massimo una bomba, perciò nell’array delle bombe non potranno esserci due numeri uguali.
In seguito l'utente clicca su una cella:
se il numero è presente nella lista dei numeri generati
abbiamo calpestato una bomba
la cella si colora di rosso e la partita termina.
Altrimenti
la cella cliccata si colora di azzurro
l'utente può continuare a cliccare sulle altre celle.
La partita termina quando il giocatore clicca su una bomba o quando raggiunge il numero massimo possibile di numeri consentiti (ovvero quando ha rivelato tutte le celle che non sono bombe).
Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una bomba.*/

// Creo un array vuoto
let bomb = [];

// Funzione per i numeri casuali
function pcRandom(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}

// Ciclo i numeri in una funzione per generare le 16 bombe

function random (maxCells){
    let i = 1;

    while (i <= 16) {

        let randomNumb = pcRandom(1, maxCells); 

        if (!bomb.includes(randomNumb)) {
            bomb.push(randomNumb);
        } else {
            continue;
        }
        i++;
    }

    console.log(bomb);
}