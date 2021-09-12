//CREATE SHOW SELECT MENU OPTIONS FOR SHOW
export default function showSelectMenu (showsArrayUnordered){
  const showsArrayAlphabeticalOrder = alphabeticalOrder(showsArrayUnordered)
  const showSelect = document.getElementById('showSelect');
  var fragment = document.createDocumentFragment();//this fragment wiill add directly under the select
  showSelect.innerHTML ='';

  if(showsArrayAlphabeticalOrder.length === 0){ //default value
    const option = document.createElement('option');
    option.text = 'There is no show for shown';
    fragment.appendChild(option)
  } else {
    showsArrayAlphabeticalOrder.forEach(show =>{
      const option = document.createElement('option');
      option.value = show.id;
      option.text = show.name;
      fragment.appendChild(option)
    });
  }
  showSelect.appendChild(fragment);
}


function alphabeticalOrder(showArray){
  return showArray.sort((a,b) => {
    const name1 =  a.name.toLowerCase()
    const name2 =  b.name.toLowerCase();
    if(name1 < name2){ return -1}
    if(name1 > name2){ return 1}
    return 0; 
  });
}