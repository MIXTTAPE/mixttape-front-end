import soundcloudApi from './soundcloud.js';
import youtubeApi from './youtube.js';

export default function masterApiCall(query) {
  return Promise.all([
    soundcloudApi(query),
    youtubeApi(query)
  ]);
}
