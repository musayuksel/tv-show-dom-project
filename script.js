import searchEpisode from "./Episodes/searchEpisode.js";
import episodeSelectMenu from "./Episodes/EpisodeSelectMenu.js";
import deleteElementsWithCss from "./Episodes/deleteElementsWithCss.js";
import showSelectMenu from "./Shows/showSelectMenu.js";
import alphabeticalOrder from "./Shows/sortArrayAlphabeticalOrder.js";
import showComponent from "./Shows/showComponent.js";
import makePageForEpisodes from "./Episodes/makePageForEpisodes.js";
import makePageForSearchedShows from "./Shows/makePageForSearchedShows.js";
import makePageForSearchedEpisodes from "./Episodes/makePageForSearchedEpisodes.js";
// import createEpisodeContainer from './Episodes/createEpisodeContainer.js'
//take Episodes from DB
let allEpisodes = []; // declared global because i will use with other func.
let url = "";
let showsArray = [];

function getShows() {
  //getAllShows funct will work one time
  showsArray = getAllShows();
  alphabeticalOrder(showsArray);
  makePageForShows(showsArray);
  showSelectMenu(showsArray);
  document.getElementById("showSearch").value = "";
}

function fetchData(url = "https://api.tvmaze.com/shows/5/episodes") {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      allEpisodes = data;
      setup();
    });
}

function setup() {
  episodeSelectMenu(allEpisodes);
  makePageForEpisodes(allEpisodes);
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
      fetchData(url);
    });
    main.appendChild(showCard);
  });
  rootElem.appendChild(main);
}

//EPISODE SEARCH FUNCTION
const seachArea = document.getElementById("search");
seachArea.addEventListener("input", (event) => {
  event.preventDefault();
  makePageForSearchedEpisodes(allEpisodes, event.target.value);
});

//EPISODE SELECT MENU
const select = document.getElementById("episodeSelect");
select.addEventListener("change", (event) => {
  if (event.target.value === "") {
    document.getElementById("search").value = "";
    makePageForSearchedEpisodes(allEpisodes, "");
  } else {
    const selectedEpisode = searchEpisode(allEpisodes, event.target.value);
    deleteElementsWithCss(selectedEpisode);
  }
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
    fetchData(url);
  }
});

//SHOW SEARCH MENU
const showSearch = document.getElementById("showSearch");
const showSearchLabel = document.getElementById("showSearchLabel");
showSearch.addEventListener("input", (event) => {
  event.preventDefault();
  makePageForSearchedShows(showsArray, event.target.value);
});

window.onload = getShows;
document.getElementById("homePage").addEventListener("click", getShows);
