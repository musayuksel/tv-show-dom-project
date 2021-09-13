export default function showComponent(
{
  name,
  rating,
  summary,
  genres,
  status,
  runtime,
  image,
  id
}) {
  //, , status, , and runtime
  const showCard = document.createElement('li');
  showCard.className ='showCard'//daha sonra degistir
  showCard.id = id;

  const h2 = document.createElement('h2');
  h2.className = "showHeading"
  h2.innerText = name;

  const img = document.createElement('img');
  img.className = 'showImg';
  img.src = `${image !== null ? image.medium: ''}`;
  img.alt = name;

  const showContainer = document.createElement('article');
  showContainer.innerHTML=summary;//summary is html tag
  showContainer.className = 'summaryContainer';

  const statusContainer = document.createElement('article');
  statusContainer.className = 'statusContainer';
  const ratedP = document.createElement('p');
  ratedP.innerText = 'Rated: ';
  const ratedSpan = document.createElement('span');
  ratedSpan.innerText = rating.average;
  ratedP.appendChild(ratedSpan);
  statusContainer.appendChild(ratedP);

  const genresP = document.createElement('p');
  genresP.innerText = 'Genres: ';
  const genresSpan = document.createElement('span');
  genresSpan.innerText = genres.join(' | ');
  genresP.appendChild(genresSpan);
  statusContainer.appendChild(genresP);

  const statusP = document.createElement('p');
  statusP.innerText = 'Status: ';
  const statusSpan = document.createElement('span');
  statusSpan.innerText = status;
  statusP.appendChild(statusSpan);
  statusContainer.appendChild(statusP);

  const runtimeP = document.createElement('p');
  runtimeP.innerText = 'Runtime: ';
  const runtimeSpan = document.createElement('span');
  runtimeSpan.innerText = runtime;
  runtimeP.appendChild(runtimeSpan);
  statusContainer.appendChild(runtimeP);


  showCard.appendChild(h2)
  showCard.appendChild(img)
  showCard.appendChild(showContainer)
  showCard.appendChild(statusContainer)
  return showCard;

}