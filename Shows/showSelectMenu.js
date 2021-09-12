//CREATE SHOW SELECT MENU OPTIONS FOR SHOW
export default function showSelectMenu (showsArray){
  const showSelect = document.getElementById('showSelect');
  var fragment = document.createDocumentFragment();//this fragment wiill add directly under the select
  showSelect.innerHTML ='';

  if(showsArray.length === 0){ //default value
    const option = document.createElement('option');
    option.text = 'There is no show for shown';
    fragment.appendChild(option)
  } else {
    showsArray.forEach(show =>{
      const option = document.createElement('option');
      option.value = show.id;
      option.text = show.name;
      fragment.appendChild(option)
    });
  }
  showSelect.appendChild(fragment);
}
