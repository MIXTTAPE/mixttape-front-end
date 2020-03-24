export default function soundcloudApi(query) {
  return fetch(`https://cors-anywhere.herokuapp.com/api.soundcloud.com/search/tracks?q=${query}&client_id=AT0Y0FFHlzmWSrjMlNUme8fMpLquh5Zi&limit=4`)
    .then(res => Promise.all([res.ok, res.json()]))
    .then(([ok, json]) => {
      if(!ok) throw json;
      console.log(json);
      return {
        items: [json].slice(0, 4),
        kind: 'soundcloud'
      };
    });
}
