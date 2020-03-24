export default function soundcloudApi(query) {
  return fetch(`https://api-v2.soundcloud.com/search/tracks?q=${query}&client_id=AT0Y0FFHlzmWSrjMlNUme8fMpLquh5Zi`)
    .then(res => Promise.all([res.ok, res.json()]))
    .then(([ok, json]) => {
      if(!ok) throw json;
      return {
        items: json.slice(0, 4),
        kind: 'soundcloud'
      };
    });
}
