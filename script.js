import createEpisodeContainer from './createEpisodeContainer.js'

//take Episodes from DB
function setup() {
  const allEpisodes = getAllEpisodes();
  makePageForEpisodes(allEpisodes);
}

//prepare the page
function makePageForEpisodes(episodeList) {
  const rootElem = document.getElementById("root");
  const main =document.createElement('main'); //main container
  main.classList.add('mainContainer');

  //for every episode create cards
  episodeList.forEach(episode =>{
    const allCard=createEpisodeContainer(episode);
    main.appendChild(allCard);
  });
  rootElem.appendChild(main);
}


window.onload = setup;