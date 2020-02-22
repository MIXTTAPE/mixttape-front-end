export default function youtubeApi(query) {
  return fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&q=${query}&key=${process.env.YOUTUBE_KEY}`)
    .then(res => Promise.all([res.ok, res.json()]))
    .then(([ok, json]) => {
      if(!ok) throw json;
      return json;
    });
}
