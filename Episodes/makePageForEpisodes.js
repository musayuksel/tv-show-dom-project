import createEpisodeContainer from './createEpisodeContainer.js'
export default function makePageForEpisodes(episodeList) {
  document.getElementById('showsMenuContainer').style.display = 'none';
  document.getElementById('episodesMenuContainer').style.display = 'flex';
  const rootElem = document.getElementById("root");
  window.scrollTo(0,0);// go to top of the page
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
