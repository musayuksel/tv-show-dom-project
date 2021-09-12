import createEpisodeContainer from './Episodes/createEpisodeContainer.js'
import searchEpisode from './Episodes/searchEpisode.js'
import  episodeSelectMenu from './Episodes/EpisodeSelectMenu.js'
import deleteElementsWithCss from './Episodes/deleteElementsWithCss.js'
import showSelectMenu from './Shows/showSelectMenu.js'
import getAllShows from './Shows/shows.js'
//take Episodes from DB
let allEpisodes = [];// declared global because i will use with other func.
let url =''
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
  // allEpisodes = getAllEpisodes();
  episodeSelectMenu(allEpisodes)
  makePageForEpisodes(allEpisodes);
 
}

//PREPARE THE PAGE
function makePageForEpisodes(episodeList) {
  const rootElem = document.getElementById("root");
  rootElem.innerHTML ='';//this way is NOT effective for DOM !!!

  const main = document.createElement('ul'); //main container
  main.classList.add('mainContainer');

  //for every episode create cards
  episodeList.forEach(episode =>{
    const allCard=createEpisodeContainer(episode);
    main.appendChild(allCard);
  });
  rootElem.appendChild(main);
}

window.onload = ()=>{
fetchData();
//select menu will work one time
const showsArray =getAllShows();
showSelectMenu(showsArray);
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
    // makePageForEpisodes(episodesIncludeInput);
    episodeSelectMenu(episodesIncludeInput);//update select menu
  });
  
  //EPISODE SELECT MENU
  const select = document.getElementById('episodeSelect');
  select.addEventListener('change',(event)=>{
    const selectedEpisode = searchEpisode(allEpisodes, event.target.value);
    // makePageForEpisodes(selectedEpisode);

    deleteElementsWithCss(selectedEpisode);
});
  //SHOW SELECT MENU
  const showSelect = document.getElementById('showSelect');
  showSelect.addEventListener('change',(event)=>{
    url =`https://api.tvmaze.com/shows/${event.target.value}/episodes`
    fetchData(url)
});

