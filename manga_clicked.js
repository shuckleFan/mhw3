// ********************************
// *                              *
// *      INIZIO JIKAN API        *
// *                              *
// ********************************




function handlerOnJsonMal(response){
 
    let json = response;
    console.log(json);
  
    //alleghiamo immagine sotto <div id="main_info_image">
    let ElementWeJustCreated = document.createElement("img");                 //creazione elemento
    ElementWeJustCreated.src = json.data[0].images.webp.large_image_url;
    
    let parentNode = document.querySelector("#main_info_image");              //determiniamo nodo padre
    parentNode.appendChild(ElementWeJustCreated);

    //1 WRITER 2 DISEGANTORE 3FORMATO??? 4 EDITORE 5LINGUA???

    console.log(json.data[0].authors[0].name);
    console.log(json.data[0].serializations[0].name);

    //modifichiamo testo all'interno di <div id="autore">
    let selectedDiv = document.querySelector("#autore");                     //selezioniamo elemento
    selectedDiv.textContent = json.data[0].authors[0].name;                  //modifichiamo elemento

    //modifichiamo testo all'interno di <div id="editore">
    selectedDiv = document.querySelector("#editore");                        //selezioniamo elemento
    selectedDiv.textContent = json.data[0].serializations[0].name;           //modifichiamo elemento

    //modifichiamo testo all'interno di <div id="genere">
    selectedDiv = document.querySelector("#genere");                         
    selectedDiv.textContent = json.data[0].genres[0].name;                   

    //modifichiamo testo all'interno di <div id="stato">
    selectedDiv = document.querySelector("#stato");                         
    
    if(json.data[0].status == "Publishing"){
        console.log(selectedDiv.textContent);
        selectedDiv.textContent = "in corso";
    }
    else{
        selectedDiv.textContent = "concluso";
    }

    //modifichiamo testo all'interno di <div id="punteggio">
    selectedDiv = document.querySelector("#punteggio");                         
    selectedDiv.textContent = json.data[0].score;  

    //modifichiamo testo all'interno di <div id="synopsis_text">
    selectedDiv = document.querySelector("#synopsis_text");                         
    selectedDiv.textContent = json.data[0].synopsis;   

  }
  
  function handlerOnPromiseMal(response){
    response.json().then(handlerOnJsonMal);
  
  }
  
  function SearchMangaInfo(){
  
    const mangaName = valueOfName;
  
    fetch("https://api.jikan.moe/v4/manga?q="+ mangaName,{
      METHOD: "GET"
    })
    .then(handlerOnPromiseMal)
  }




// ********************************
// *                              *
// *      FINE JIKAN API          *
// *                              *
// ********************************



const urlString = window.location.href; //prendiamo l'URL nella nostra pagina

const url = new URL(urlString); //lo usimo come parametro per creare il nostro oggeto

const valueOfName = encodeURI(url.searchParams.get('nome')); //usiamo il metodo get per acquisire il la stringa dopo "nome", poi lo codifichiamo

//modifichiamo testo all'interno di h3
let selectedDiv = document.querySelector("h3");
selectedDiv.textContent = decodeURI(valueOfName); 

SearchMangaInfo(); //uso JIKAN API



// ********************************
// *                              *
// *      INIZIO SPOTIFY API      *
// *                              *
// ********************************
const ClientID = "0fcbeede27b346e590b13e82cd3b0a25";
const clientSecret = "41d2e588476641c1a653a740e467f7f1";


//RETRIVING USER REQUEST


  //HANDLER FOR THE REQUEST
function handlerOnJsonUserRequest(response){
    let json = response;
    //una volta acquisito il nostro json non ci resta che estrarre le informazioni da esso
    
    let parentNode = document.querySelector("#immagine_album");

    let imgElementWeJustCreated = document.createElement("img");  //creiamo un elemento <img>
    imgElementWeJustCreated.src = json.albums.items[0].images[0].url; //assegniamo al parametro src l'URL dell'album acquisito nel json

    parentNode.appendChild(imgElementWeJustCreated);  //alleghiamo l'img appena creato all'elemento article

}

  //HANDLER FOR THE PROMISE
function handlerOnApiRequest (response){
  response.json().then(handlerOnJsonUserRequest);
}

  //RETRIVING THE QUERY FORM THE USER
function searchAlbumInfo(){


  const nomeManga =  valueOfName;  //acquusimo stringa scritta nel box 'queryFromUser'
  
  //mandiamo la richiesta http a spotify 
  fetch("https://api.spotify.com/v1/search?q=" + nomeManga + "&type=album",
    {
    method: "GET",
    headers : 
      {
      'Authorization': 'Bearer ' + token
      }
    }
  )
  .then(handlerOnApiRequest)


}



//RETRIVING TOKEN; richiediamo il token, indipendemente da qualsiasi cosa faccia l'utente, dobbiamo averlo sempre pronto



  //handler on json
function handlerOnJson (json){
  console.log("il file json arrivato è il seguente");
  console.log(json);

  console.log("il token è il seguente");
  token = json.access_token;

  console.log(token);

  searchAlbumInfo();    //acquisito il token, possiamo utilizzare l'API, quindi cercare info sull'album
}


  //handler on success
function success(response){
   //sappimo che il response header è arrivato, tuttavia non sappiamo lo stato del resto della risposta http
   //dunque creiamo un handler che si attiverà quando il json a cui siamo interessati sarà arrivato

   response.json().then(handlerOnJson);
}

  //handler on failure
function failure(response){
    console.log("FAIL");
    console.log(response.status);
}

  //richiesta del token
let token;
let promise = fetch("https://accounts.spotify.com/api/token", {
      method: "POST",
      headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          'Authorization': 'Basic ' + btoa(ClientID + ':' + clientSecret)
        },
      body: "grant_type=client_credentials",
  })

promise.then(success, failure); //handler che si attiverà appena arriverà il "response header"

// ********************************
// *                              *
// *      FINE SPOTIFY API        *
// *                              *
// ********************************
