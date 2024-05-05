//chiudi il primissimo banner
const freeShippingBannedId = document.getElementById('free_shipping');
function closeFreeShippingBanner(){
    freeShippingBannedId.classList.add('hidden');
}

const closeIconId = document.getElementById('closeIconFromFreeShipping');
closeIconId.addEventListener('click', closeFreeShippingBanner);

/*
//informazioni aggiuntive nella console usando data-*
function informazioneInConsole(event){  //event non è la mera variabile che ha dato il via all'evento, ma contiene informazioni generali sull'evento stesso, da esso quindi si deve estrarre la varaibile
    let info = event.target.dataset.informazioniAggiuntive;//estraiamo la variabile
    console.log(info);
   
}

const elementiConInfoAggiuntive = document.querySelectorAll('[data-informazioni-aggiuntive]');
for(const infoAggiuntiva of elementiConInfoAggiuntive){  //For Of: int informazioneAggiuntiva = informazioniAggiuntive[i] 
    infoAggiuntiva.addEventListener("mouseover", informazioneInConsole);
    //console.log(infoAggiuntiva);
}
*/


//Modifica Immagini mostrate a seguito all'interazione con un pulsante LO IMPLEMENTIAMO SOLAMENTE PER LA PRIMA VETRINA

const vetrine = document.querySelectorAll('div.vetrina'); //selezioniamo tutti div con classe vetrina

function changeImageSet(dot){   //da dot possiamo ottenere: la vetrina associata "dot.row"; e il set di immagini associato "row.dataset.nESimo"
    let vetrina = vetrine[dot.row]; //inizialmente selezioniamo la vetrina a cui è associato il trio di pallini 

    let setImmagini = vetrina.getElementsByTagName('img');  //poi selezioniamo i tag che contengono le info sulle immagini
    let setNomi = vetrina.getElementsByClassName('nome_prodotto');
    let setPrezzi = vetrina.getElementsByClassName('prezzo');
    let setLink = vetrina.getElementsByClassName('vetrina');
    

    //se non convertiamo il valore associato all'attributo data-n-esimo, in un intero, lo switch case statement selezionerà sempre default
    switch(parseInt(dot.dataset.nEsimo)) {
        case 1:
            setLink[0].href = "manga_clicked.html?nome=Dragon%20Ball"
            setLink[1].href = "manga_clicked.html?nome=jujutsu%20kaisen"
            setLink[2].href = "manga_clicked.html?nome=detective%20conan"
            setLink[3].href = "manga_clicked.html?nome=bocchi%20the%20rock"
            setImmagini[0].src = "ultime_uscite/1/dragon-ball-ultimate-edition-23.jpg";
            setImmagini[1].src = "ultime_uscite/1/jujutsu-kaisen-1.webp";
            setImmagini[2].src = "ultime_uscite/1/detective-conan-new-edition-45.jpg";
            setImmagini[3].src = "ultime_uscite/1/bocchi-the-rock-1.webp";
            setNomi[0].textContent = "Dragon Ball ultimate edition 23";
            setNomi[1].textContent = "jujutsu kaisen";
            setNomi[2].textContent = "detective conan 45";
            setNomi[3].textContent = "bocchi the rock 1";
            setPrezzi[0].textContent = "15,00€";
            setPrezzi[1].textContent = "5,90€";
            setPrezzi[2].textContent = "6,50€";
            setPrezzi[3].textContent = "6,90€";
          break;
        case 2:
            setLink[0].href = "manga_clicked.html?nome=bocchi%20the%20rock"
            setLink[1].href = "manga_clicked.html?nome=bocchi%20the%20rock"
            setLink[2].href = "manga_clicked.html?nome=bocchi%20the%20rock"
            setLink[3].href = "manga_clicked.html?nome=bocchi%20the%20rock"
            setImmagini[0].src = "ultime_uscite/2/bocchi-the-rock-1-edizione-giapponese.webp";
            setImmagini[1].src = "ultime_uscite/2/bocchi-the-rock-2-variant.webp";
            setImmagini[2].src = "ultime_uscite/2/bocchi-the-rock-2.webp";
            setImmagini[3].src = "ultime_uscite/2/bocchi-the-rock-tv-animation-official-guide-book-edizione-giapponese.webp";
            setNomi[0].textContent = "bocchi-the-rock-1 JPN";
            setNomi[1].textContent = "bocchi-the-rock-2-variant";
            setNomi[2].textContent = "bocchi-the-rock-2";
            setNomi[3].textContent = "occhi-the-rock-tv-animation";
            setPrezzi[0].textContent = "6,59€";
            setPrezzi[1].textContent = "6,59€";
            setPrezzi[2].textContent = "6,59€";
            setPrezzi[3].textContent = "56,91€";
          break;
        default:
            setLink[0].href = "manga_clicked.html?nome=berserk"
            setLink[1].href = "manga_clicked.html?nome=berserk"
            setLink[2].href = "manga_clicked.html?nome=berserk"
            setLink[3].href = "manga_clicked.html?nome=berserk"
            setImmagini[0].src = "ultime_uscite/3/berserk-collection-serie-nera-24.webp";
            setImmagini[1].src = "ultime_uscite/3/berserk-collection-serie-nera-25.webp";
            setImmagini[2].src = "ultime_uscite/3/berserk-collection-serie-nera-39.webp";
            setImmagini[3].src = "ultime_uscite/3/berserk-collection-serie-nera-41.webp";
            setNomi[0].textContent = "berserk 24";
            setNomi[1].textContent = "berserk 25";
            setNomi[2].textContent = "berserk 39";
            setNomi[3].textContent = "berserk 41";
            setPrezzi[0].textContent = "5,23€€";
            setPrezzi[1].textContent = "5,23€";
            setPrezzi[2].textContent = "5,23€";
            setPrezzi[3].textContent = "5,23€";
          break;
      } 
}


function dotHasBeenSelected(event){
    console.log( dotFromRow[dot.row])
    for(i = 0; i<3; i++){
        dotFromRow[i]
        dot.classList.remove('selected_dot')    //rimuovi la selezione per tutti i dot
    }
    event.target.classList.add('selected_dot'); //aggiungi la selezione al dot selezionato
    console.log("clicked!");
    
    changeImageSet(event.target);
}

function dotHasBeenSelected(event){
    for(const dot of dotFromFirtRow){
        dot.classList.remove('selected_dot')    //rimuovi la selezione per tutti i dot
    }
    event.target.classList.add('selected_dot'); //aggiungi la selezione al dot selezionato
    console.log("clicked!");
    
    changeImageSet(event.target);
}

const firstRow = document.getElementById('row1');
const dotFromFirtRow = firstRow.getElementsByTagName('div');
for(const dot of dotFromFirtRow){
    dot.addEventListener("click", dotHasBeenSelected);  //associamo ai tre dot l'event listener
    dot.row = 0;    //associamo ai tre dot la vetrina di appartenenza
}







