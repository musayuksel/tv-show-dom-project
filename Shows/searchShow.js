//Provide a free-text show search through show names, genres, and summary texts.
export default function searchShow(allShows , input){
  const lowerCaseInput = input.toLowerCase().trim();
  return allShows.filter(show =>{
        //some summaryes some summaries are null, check them
        const showSummary = `${show.summary !== null ? show.summary.toLowerCase() : ''}`;
        return show.name.toLowerCase().includes(lowerCaseInput)
              || showSummary.includes(lowerCaseInput)
              || show.genres.join(' ').toLowerCase().includes(lowerCaseInput)
  });
}