import searchEpisode from "./searchEpisode.js";
import deleteElementsWithCss from "./deleteElementsWithCss.js";
import episodeSelectMenu from "./EpisodeSelectMenu.js";
const searchLabel = document.getElementById("searchLabel");

export default function makePageForSearchedEpisodes(allEpisodes, input) {
  const episodesIncludeInput = searchEpisode(allEpisodes, input);
  input === ""
    ? (searchLabel.innerText = "")
    : (searchLabel.innerText = `Displaying ${episodesIncludeInput.length}/${allEpisodes.length} episodes`);
  deleteElementsWithCss(episodesIncludeInput);
  episodeSelectMenu(episodesIncludeInput); //update select menu
}
