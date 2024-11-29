export default function formatEpisode(episode:string):string[]{

  const formattedEpisode = episode.split("$");
  return formattedEpisode;
}