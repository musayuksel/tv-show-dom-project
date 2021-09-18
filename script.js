import searchEpisode from "./Episodes/searchEpisode.js";
import episodeSelectMenu from "./Episodes/EpisodeSelectMenu.js";
import deleteElementsWithCss from "./Episodes/deleteElementsWithCss.js";
import showSelectMenu from "./Shows/showSelectMenu.js";
import alphabeticalOrder from "./Shows/sortArrayAlphabeticalOrder.js";
import showComponent from "./Shows/showComponent.js";
import makePageForEpisodes from "./Episodes/makePageForEpisodes.js";
import makePageForSearchedShows from "./Shows/makePageForSearchedShows.js";
import makePageForSearchedEpisodes from "./Episodes/makePageForSearchedEpisodes.js";
import fetchData from "./fetchData.js";
// import createEpisodeContainer from './Episodes/createEpisodeContainer.js'
//take Episodes from DB
let allEpisodesCache = []; // declared global because i will use with other func.
let url = "";
let showsArray = [];

function getShows() {
  showsArray = getAllShows();
  alphabeticalOrder(showsArray);
  makePageForShows(showsArray);
  showSelectMenu(showsArray);
}

async function fetchEpisodesFromAPI(url) {
  fetchData(url)
    .then((episodes) => {
      allEpisodesCache = episodes;
      setup();
    })
    .catch((e) => {
      console.log("Oops!", e);
    });
}

function setup() {
  episodeSelectMenu(allEpisodesCache);
  makePageForEpisodes(allEpisodesCache);
}

const rootElem = document.getElementById("root"); //i will use for 2 function
//PREPARE THE PAGE FOR SHOWS
function makePageForShows(showList) {
  document.getElementById("showsMenuContainer").style.display = "flex";
  document.getElementById("episodesMenuContainer").style.display = "none";

  const main = document.createElement("ul"); //main container
  main.classList.add("mainShowContainer");
  rootElem.innerHTML = "";
  showList.forEach((show) => {
    const showCard = showComponent(show);
    showCard.addEventListener("click", () => {
      url = `https://api.tvmaze.com/shows/${show.id}/episodes`;
      fetchEpisodesFromAPI(url);
    });
    main.appendChild(showCard);
  });
  rootElem.appendChild(main);
}

//EPISODE SEARCH FUNCTION
const seachArea = document.getElementById("search");
seachArea.addEventListener("input", (event) => {
  event.preventDefault();
  makePageForSearchedEpisodes(allEpisodesCache, event.target.value);
});

//EPISODE SELECT MENU
const select = document.getElementById("episodeSelect");
select.addEventListener("change", (event) => {
  if (event.target.value === "") {
    document.getElementById("search").value = "";
    makePageForSearchedEpisodes(allEpisodesCache, "");
  } else {
    const selectedEpisode = searchEpisode(allEpisodesCache, event.target.value);
    deleteElementsWithCss(selectedEpisode);
  }
});
//SHOW SEARCH MENU
const showSearch = document.getElementById("showSearch");
showSearch.addEventListener("input", (event) => {
  event.preventDefault();
  makePageForSearchedShows(showsArray, event.target.value);
});

//SHOW SELECT MENU
const showSelect = document.getElementById("showSelect");
showSelect.addEventListener("change", (event) => {
  const selectedValue = event.target.value;
  if (selectedValue === "showAll") {
    document.getElementById("showSearch").value = "";
    makePageForSearchedShows(showsArray, "");
  } else {
    url = `https://api.tvmaze.com/shows/${selectedValue}/episodes`;
    fetchEpisodesFromAPI(url);
  }
});

document.getElementById("homePage").addEventListener("click", getShows);
document.getElementById("logo").addEventListener("click", getShows);

window.onload = getShows;
