import soundcloudApi from './soundcloud.js';
import youtubeApi from './youtube.js';

export default function masterApiCall(query) {
  return Promise.all([
    //soundcloud needs a custom searchResultSection component
    //commented out until that happens.
    // soundcloudApi(query),
    youtubeApi(query)
  ]);
}
