export default function soundcloudApi(query) {
  return fetch(`https://cors-anywhere.herokuapp.com/api-v2.soundcloud.com/search/tracks?q=${query}&client_id=${process.env.SOUNDCLOUD_KEY}&limit=5`)
    .then(res => Promise.all([res.ok, res.json()]))
    .then(([ok, json]) => {
      if(!ok) throw json;
      return {
        items: [json],
        kind: 'soundcloud'
      };
    });
}
