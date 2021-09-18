import searchShow from "./searchShow.js";
import showSelectMenu from "./showSelectMenu.js";
import deleteElementsWithCss from "../Episodes/deleteElementsWithCss.js";
const showSearch = document.getElementById("showSearch");

export default function makePageForSearchedShows(showsArray, input) {
  const showsIncludeInput = searchShow(showsArray, input);
  deleteElementsWithCss(showsIncludeInput);
  showSelectMenu(showsIncludeInput);
  input === ""
    ? (showSearchLabel.innerText = "")
    : (showSearchLabel.innerText = `found ${showsIncludeInput.length} shows`);
}
