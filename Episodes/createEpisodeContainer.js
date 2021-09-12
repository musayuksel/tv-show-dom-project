// create episode card for each episode
export default function createEpisodeContainer(
  {name,
  season,
  number,
  image,
  summary,
  runtime,
  id,
  url}){
  const card = document.createElement('li');
  card.className="card";
  card.id =id;

  //name, season & episode number format
  const h2 = document.createElement('h2');
  h2.className = "cardHeading"
  h2.innerText=`${name} - S${(''+season).padStart(2,0)}E${(''+number).padStart(2,0)}`;

  //episode image
  const img = document.createElement('img')
  img.src = ` ${image!==null? image.medium : ''}`;
  img.alt= name;
  img.className = 'episodeImg';

  //summary
  const summaryContainer = document.createElement('article');
  summaryContainer.innerHTML=summary;//summary is html tag
  const icon = document.createElement('img');
  icon.src = '/icons/arrow.png';
  icon.alt = "arrow"
  icon.className = 'arrowIcon'
  //summary click event
  icon.addEventListener('click', ()=>{
    summaryContainer.classList.toggle("openSummary");
  })
  summaryContainer.appendChild(icon);

  //Run Time
  const span = document.createElement('span');
  span.innerText = formatedRunTime(runtime);// format the time
  summaryContainer.appendChild(span)

  //Play button
  const movieLink =document.createElement('a');
  movieLink.href =url;
  movieLink.target ='_blank';
  movieLink.className = 'episodeUrl'
  const play = document.createElement('img');
  play.src = '/icons/play.png';
  play.alt = "play icon";
  play.className = 'playIcon';
  movieLink.appendChild(play);
  summaryContainer.appendChild(movieLink);

  card.appendChild(h2);
  card.appendChild(img);
  card.appendChild(summaryContainer);
  return card;
}


function formatedRunTime(time){
  // take time as a min, convert it to hour format (65 => 1h 05min)
  const min = ((time % 60)+'').padStart(2,0);
  const hour = Math.floor(time / 60);
  return `${hour}h ${min}min`;

}