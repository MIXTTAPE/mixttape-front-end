export default function soundcloudApi(query) {
  return fetch(`https://api.soundcloud.com/tracks/?client_id=${process.env.SOUNDCLOUD_KEY}&q=${query}`)
    .then(res => Promise.all([res.ok, res.json()]))
    .then(([ok, json]) => {
      if(!ok) throw json;
      return {
        items: json,
        kind: 'soundcloud'
      };
    });
}
