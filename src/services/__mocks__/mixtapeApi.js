export function postTape() {
  return Promise.resolve({
    mixtapeName: 'My Mixtape',
    createdBy: 'josephtatum',
    songs: [
      {
        nativeId: 'AF607105',
        nativeSource: 'youtube',
        title: 'Charlotte Gainsbourg - AF607105',
        buyLink: '',
        thumbnail: ''
      }
    ]
  });
}

export function fetchTape() {
  return Promise.resolve({
    mixtapeName: 'mock tape',
    songs: ['test mixtape']
  });
}
