
// create each episode card
export default function createEpisodeContainer({name,season,number,image,summary}){
  const card = document.createElement('article');
  card.className="card";

  //name
  const h2 = document.createElement('h2');
  h2.innerText=name;
  //season & number
  const p = document.createElement('p');
  p.innerText = `${season} ${number}`
  //episode image
  const img = document.createElement('img')
  img.src = `${image.medium}`;

  const summaryContainer = document.createElement('article');
  summaryContainer.innerHTML=summary;//summary is html tag

  card.appendChild(h2)
  card.appendChild(p)
  card.appendChild(img)
  card.appendChild(summaryContainer)
  return card;
}