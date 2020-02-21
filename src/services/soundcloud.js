export default function (query) {
  return fetch(`https://api.soundcloud.com/tracks/?client_id=${process.env.SOUNDCLOUD_KEY}&q=${query}`)
    .then(res => res.json());
}
