import createEpisodeContainer from './Episodes/createEpisodeContainer.js'
import searchEpisode from './Episodes/searchEpisode.js'
import  episodeSelectMenu from './Episodes/EpisodeSelectMenu.js'
import deleteElementsWithCss from './Episodes/deleteElementsWithCss.js'
import showSelectMenu from './Shows/showSelectMenu.js'
import showComponent from './Shows/showComponent.js';
import searchShow from './Shows/searchShow.js';
import alphabeticalOrder from './Shows/sortArrayAlphabeticalOrder.js'
//take Episodes from DB
let allEpisodes = [];// declared global because i will use with other func.
let url =''
let showsArray  = [];

function getShows(){
  //getAllShows funct will work one time
  showsArray =getAllShows();
  alphabeticalOrder(showsArray);
  makePageForShows(showsArray)
  showSelectMenu(showsArray);
}

function fetchData (url ='https://api.tvmaze.com/shows/5/episodes'){
  fetch(url)
    .then(response=>response.json())
    .then(data =>{
      allEpisodes = data;
       setup()
      }
  );
}

function setup() {
  
  episodeSelectMenu(allEpisodes)
  makePageForEpisodes(allEpisodes);
  
 
}



const rootElem = document.getElementById("root");//i will use for 2 function
//PREPARE THE PAGE FOR SHOWS
function makePageForShows(showList){
  document.getElementById('showsMenuContainer').style.display = 'block';
  document.getElementById('episodesMenuContainer').style.display = 'none';
  


  const main = document.createElement('ul'); //main container
  main.classList.add('mainContainer');
  rootElem.innerHTML ='';
  showList.forEach(show =>{
    const showCard = showComponent(show);
    showCard.addEventListener('click', ()=>{
      url =`https://api.tvmaze.com/shows/${show.id}/episodes`
      fetchData(url)
    })
    main.appendChild(showCard);
  })
  rootElem.appendChild(main);
}
//PREPARE THE PAGE FOR EPISODES
function makePageForEpisodes(episodeList) {
  document.getElementById('showsMenuContainer').style.display = 'none';
  document.getElementById('episodesMenuContainer').style.display = 'flex';
  
  const main = document.createElement('ul'); //main container
  main.classList.add('mainContainer');
  rootElem.innerHTML = '';
  //for every episode create cards
  episodeList.forEach(episode =>{
    const allCard=createEpisodeContainer(episode);
    main.appendChild(allCard);
  });
  rootElem.appendChild(main);
}


//SEARCH FUNCTION
const seachArea = document.getElementById('search');
const searchLabel = document.getElementById('searchLabel');
seachArea.addEventListener('input', (event)=>{
  event.preventDefault();
  const episodesIncludeInput= searchEpisode(allEpisodes ,seachArea.value);
  seachArea.value === '' ? searchLabel.innerText ='':
  searchLabel.innerText = `Displaying ${episodesIncludeInput.length}/${allEpisodes.length} episodes`;
  
  deleteElementsWithCss(episodesIncludeInput)
  episodeSelectMenu(episodesIncludeInput);//update select menu
});

//EPISODE SELECT MENU
const select = document.getElementById('episodeSelect');
select.addEventListener('change',(event)=>{
  const selectedEpisode = searchEpisode(allEpisodes, event.target.value);
  deleteElementsWithCss(selectedEpisode);
});
//SHOW SELECT MENU
const showSelect = document.getElementById('showSelect');
showSelect.addEventListener('change',(event)=>{
  url =`https://api.tvmaze.com/shows/${event.target.value}/episodes`
  fetchData(url)
});

//SHOW SEARCH MENU
const  showSearch = document.getElementById('showSearch');
const  showSearchLabel = document.getElementById('showSearchLabel');
showSearch.addEventListener('input',(event)=>{
  event.preventDefault();
  const showsIncludeInput = searchShow(showsArray,event.target.value )
  deleteElementsWithCss(showsIncludeInput)
  showSelectMenu(showsIncludeInput)
  event.target.value === '' ? showSearchLabel.innerText ='':
  showSearchLabel.innerText = `found ${showsIncludeInput.length} shows`;
})


window.onload = getShows;