//create select menu options for episodes
export default function episodeSelectMenu (allEpisodes){

  const episodeSelect = document.getElementById('episodeSelect');
  var fragment = document.createDocumentFragment();//this fragment wiill add directly under the select
  episodeSelect.innerHTML ='';
  if(allEpisodes.length === 0){ //default value
    const option = document.createElement('option');
    option.text = 'There is no episode for shown';
    fragment.appendChild(option)
  } else {
    const option = document.createElement('option');
    option.text = 'SHOW ALL';
    option.value = '';
    fragment.appendChild(option)
    allEpisodes.forEach(episode =>{
      const option = document.createElement('option');
      option.value = episode.name;
      option.text = `S${(''+episode.season).padStart(2,0)}E${(''+episode.number).padStart(2,0)} - ${episode.name}`;
      fragment.appendChild(option)
    });
}
  episodeSelect.appendChild(fragment);
}