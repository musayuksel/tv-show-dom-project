export default function deleteElementsWithCss(shownElements){
  // take original data and filtered data that you have to show

  const allIDsShownElements =shownElements.map(e=>e.id+'');
  //take ids and convert to string because document ids are string
  

  //select all ids inside UL from document, 
  const allIDNode=document.querySelectorAll('ul> *[id]');
  const allID= Array.from(allIDNode).map(e=>e.id);

  allID.forEach(currentID =>{
    if (allIDsShownElements.includes(currentID)){ //delete class name 
      document.getElementById(currentID).classList.remove('deleteOnScreen')
    } else {
      document.getElementById(currentID).classList.add('deleteOnScreen')
    }
  })
}
///css .deleteOnScreen {display:none}


// TIME TEST FUNC
// var t0 = performance.now()
// ....testFunc()
// var t1 = performance.now()
//     console.log("Call to doSomething took " + (t1 - t0) + " milliseconds.")