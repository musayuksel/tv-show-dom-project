import createEpisodeContainer from './createEpisodeContainer.js'
import searchEpisode from './searchEpisode.js'
import  episodeSelectMenu from './selectMenu.js'
//take Episodes from DB
let allEpisodes = [];
function setup() {
  allEpisodes = getAllEpisodes();
  episodeSelectMenu(allEpisodes)
  makePageForEpisodes(allEpisodes);
}

//prepare the page
function makePageForEpisodes(episodeList) {
  const rootElem = document.getElementById("root");
  rootElem.innerHTML ='';

  const main =document.createElement('main'); //main container
  main.classList.add('mainContainer');

  //for every episode create cards
  episodeList.forEach(episode =>{
    const allCard=createEpisodeContainer(episode);
    main.appendChild(allCard);
  });
  rootElem.appendChild(main);
}




setup()
// window.onload = setup;

//Search function
const seachArea = document.getElementById('search');
const serachLabel = document.getElementById('serachLabel');
seachArea.addEventListener('input', (event)=>{
    event.preventDefault();
    const episodesIncludeInput= searchEpisode(allEpisodes ,seachArea.value);
    serachLabel.innerText = `Displaying ${episodesIncludeInput.length}/${allEpisodes.length} episodes`;
    makePageForEpisodes(episodesIncludeInput);
    episodeSelectMenu(episodesIncludeInput);//update select menu
  });



//Episode select menu
