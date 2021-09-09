import createEpisodeContainer from './createEpisodeContainer.js'
import searchEpisode from './searchEpisode.js'
import  episodeSelectMenu from './selectMenu.js'

//take Episodes from DB
let allEpisodes = [];// declared global because i will use with other func.
function setup() {
  allEpisodes = getAllEpisodes();
  episodeSelectMenu(allEpisodes)
  makePageForEpisodes(allEpisodes);
}

//prepare the page
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

window.onload = setup;

//Search function
const seachArea = document.getElementById('search');
const searchLabel = document.getElementById('searchLabel');
seachArea.addEventListener('input', (event)=>{
    event.preventDefault();
    const episodesIncludeInput= searchEpisode(allEpisodes ,seachArea.value);
    seachArea.value === '' ? searchLabel.innerText ='':
    searchLabel.innerText = `Displaying ${episodesIncludeInput.length}/${allEpisodes.length} episodes`;
    makePageForEpisodes(episodesIncludeInput);
    episodeSelectMenu(episodesIncludeInput);//update select menu
  });

//Episode select menu
const select = document.getElementById('episodeSelect');
select.addEventListener('change',()=>{
  const selectedEpisode = searchEpisode(allEpisodes, select.value);
  makePageForEpisodes(selectedEpisode);
});
