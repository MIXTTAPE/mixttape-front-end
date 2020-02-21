export default function(query) {
  return fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&q=${query}&key=${process.env.YOUTUBE_KEY}`)
    .then(res => res.json());
}
