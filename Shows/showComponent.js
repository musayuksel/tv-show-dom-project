export default function showComponent({
  name,
  rating,
  summary,
  genres,
  status,
  runtime,
  image,
  id,
}) {
  const showCard = document.createElement("li");
  showCard.className = "showCard"; //daha sonra degistir
  showCard.id = id;

  const h2 = document.createElement("h2");
  h2.className = "showHeading";
  h2.innerText = name;

  const img = document.createElement("img");
  img.className = "showImg";
  img.src = `${image !== null ? image.medium : ""}`;
  img.alt = name;

  const showContainer = document.createElement("article");
  showContainer.innerHTML = summary; //summary is html tag
  showContainer.className = "summaryContainer";

  const statusContainer = document.createElement("article");
  statusContainer.className = "statusContainer";

  statusContainer.appendChild(statusItems("Rated: ", rating.average));
  statusContainer.appendChild(statusItems("Genres: ", genres.join(" | ")));
  statusContainer.appendChild(statusItems("Status: ", status));
  statusContainer.appendChild(statusItems("Runtime: ", runtime));

  showCard.appendChild(h2);
  showCard.appendChild(img);
  showCard.appendChild(showContainer);
  showCard.appendChild(statusContainer);
  return showCard;
}

function statusItems(pText, spanText) {
  const p = document.createElement("p");
  p.innerText = pText;
  const span = document.createElement("span");
  span.innerText = spanText;
  p.appendChild(span);
  return p;
}
