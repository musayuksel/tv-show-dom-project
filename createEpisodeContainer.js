
// create each episode card
export default function createEpisodeContainer({name,season,number,image,summary}){
  const card = document.createElement('article');
  card.className="card";

  //name, season & episode number format
  const h2 = document.createElement('h2');
  h2.className = "cardHeading"
  h2.innerText=`${name} - S${(''+season).padStart(2,0)}E${(''+number).padStart(2,0)}`;

  //episode image
  const img = document.createElement('img')
  img.src = `${image.medium}`;
  //summary
  const summaryContainer = document.createElement('article');
  summaryContainer.innerHTML=summary;//summary is html tag

  card.appendChild(h2);
  card.appendChild(img);
  card.appendChild(summaryContainer);
  return card;
}