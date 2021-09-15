//CREATE SHOW SELECT MENU OPTIONS FOR SHOW
export default function showSelectMenu (showsArrayAlphabeticalOrder){
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
  const option = document.createElement('option');
  option.text = 'SHOW ALL';
  option.value = 'showAll';
  fragment.appendChild(option);
  showSelect.appendChild(fragment);
}


