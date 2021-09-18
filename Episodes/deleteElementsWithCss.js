export default function deleteElementsWithCss(shownElementsArray) {
  // take original data and filtered data that you have to show

  const allIDsShownElements = shownElementsArray.map(
    (element) => element.id + ""
  );
  //take ids and convert to string because document ids are string

  //select all ids inside UL from document,
  const allIDNode = document.querySelectorAll("ul> *[id]");
  const allID = Array.from(allIDNode).map((element) => element.id);

  allID.forEach((currentID) => {
    if (allIDsShownElements.includes(currentID)) {
      //delete class name
      document.getElementById(currentID).classList.remove("deleteOnScreen");
    } else {
      document.getElementById(currentID).classList.add("deleteOnScreen");
    }
  });
}

// TIME TEST FUNC ===>STACKOVERFLOW
// var t0 = performance.now()
// ....testFunc()
// var t1 = performance.now()
//     console.log("Call to doSomething took " + (t1 - t0) + " milliseconds.")
