//Take allEpisodes array and search input
//return new array that include inputs (only inside name and/or summary)
export default function searchEpisode(allEpisodes , input){
  return allEpisodes.filter(episode =>
         episode.name.toLowerCase().includes(input.toLowerCase().trim())
        || episode.summary.toLowerCase().includes(input.toLowerCase().trim())
  );
}