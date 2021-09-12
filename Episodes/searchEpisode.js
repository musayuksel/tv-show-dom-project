//Take allEpisodes array and search input
//return new array that include inputs (only inside name and/or summary)
export default function searchEpisode(allEpisodes , input){
  return allEpisodes.filter(episode =>{
        //some summaryes some summaries are null, check them
        const episodeSummary = `${episode.summary !== null ? episode.summary.toLowerCase() : ''}`;
        return episode.name.toLowerCase().includes(input.toLowerCase().trim())
        || episodeSummary.includes(input.toLowerCase().trim())
  });
}