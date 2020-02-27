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

export function deleteTape() {
  return Promise.resolve({
    userInfo: {
      loading: false,
      username: '',
      mixtapes: [
        {
          _id: '5e5810c5a205cba1fe5424a1',
          mixtapeName: 'Phoebe Bridgers',
          songs: [
            {
              tags: [],
              _id: '5e5810c5a205cba1fe5424a2',
              nativeId: '9sfYpolGCu8',
              nativeSource: 'youtube',
              title: 'Phoebe Bridgers - Motion Sickness (Official Video)',
              buyLink: null,
              thumbnailUrl: 'https://i.ytimg.com/vi/9sfYpolGCu8/mqdefault.jpg',
              isMemo: false
            },
            {
              tags: [],
              _id: '5e5810c5a205cba1fe5424a3',
              nativeId: 'GSZFJ2_j81w',
              nativeSource: 'youtube',
              title: 'Phoebe Bridgers - Full Performance (Live on KEXP)',
              buyLink: null,
              thumbnailUrl: 'https://i.ytimg.com/vi/GSZFJ2_j81w/mqdefault.jpg',
              isMemo: false
            }
          ],
          createdBy: 'josephtatum',
          userId: '5e580fa7a205cba1fe54248d',
          __v: 0
        },
        {
          _id: '5e58114ba205cba1fe5424a4',
          mixtapeName: 'ABBA',
          songs: [
            {
              tags: [],
              _id: '5e58114ba205cba1fe5424a5',
              nativeId: '107857913',
              nativeSource: 'soundcloud',
              title: 'Mamma Mia',
              buyLink: null,
              thumbnailUrl: null,
              isMemo: false
            },
            {
              tags: [],
              _id: '5e58114ba205cba1fe5424a6',
              nativeId: '173434993',
              nativeSource: 'soundcloud',
              title: 'Abba-Dancing Queen',
              buyLink: null,
              thumbnailUrl: null,
              isMemo: false
            }
          ],
          createdBy: 'josephtatum',
          userId: '5e580fa7a205cba1fe54248d',
          __v: 0
        }
      ],
      error: false,
      user: {
        _id: '5e580fa7a205cba1fe54248d',
        username: 'josephtatum',
        __v: 0,
        mixtapes: [
          {
            _id: '5e5810c5a205cba1fe5424a1',
            mixtapeName: 'Phoebe Bridgers',
            songs: [
              {
                tags: [],
                _id: '5e5810c5a205cba1fe5424a2',
                nativeId: '9sfYpolGCu8',
                nativeSource: 'youtube',
                title: 'Phoebe Bridgers - Motion Sickness (Official Video)',
                buyLink: null,
                thumbnailUrl: 'https://i.ytimg.com/vi/9sfYpolGCu8/mqdefault.jpg',
                isMemo: false
              },
              {
                tags: [],
                _id: '5e5810c5a205cba1fe5424a3',
                nativeId: 'GSZFJ2_j81w',
                nativeSource: 'youtube',
                title: 'Phoebe Bridgers - Full Performance (Live on KEXP)',
                buyLink: null,
                thumbnailUrl: 'https://i.ytimg.com/vi/GSZFJ2_j81w/mqdefault.jpg',
                isMemo: false
              }
            ],
            createdBy: 'josephtatum',
            userId: '5e580fa7a205cba1fe54248d',
            __v: 0
          },
          {
            _id: '5e58114ba205cba1fe5424a4',
            mixtapeName: 'ABBA',
            songs: [
              {
                tags: [],
                _id: '5e58114ba205cba1fe5424a5',
                nativeId: '107857913',
                nativeSource: 'soundcloud',
                title: 'Mamma Mia',
                buyLink: null,
                thumbnailUrl: null,
                isMemo: false
              },
              {
                tags: [],
                _id: '5e58114ba205cba1fe5424a6',
                nativeId: '173434993',
                nativeSource: 'soundcloud',
                title: 'Abba-Dancing Queen',
                buyLink: null,
                thumbnailUrl: null,
                isMemo: false
              }
            ],
            createdBy: 'josephtatum',
            userId: '5e580fa7a205cba1fe54248d',
            __v: 0
          }
        ]
      }
    },
    activeMixtape: {
      loading: false,
      playing: false,
      mixtape: {
        _id: '5e58114ba205cba1fe5424a4',
        mixtapeName: 'ABBA',
        songs: [
          {
            tags: [],
            _id: '5e58114ba205cba1fe5424a5',
            nativeId: '107857913',
            nativeSource: 'soundcloud',
            title: 'Mamma Mia',
            buyLink: null,
            thumbnailUrl: null,
            isMemo: false
          },
          {
            tags: [],
            _id: '5e58114ba205cba1fe5424a6',
            nativeId: '173434993',
            nativeSource: 'soundcloud',
            title: 'Abba-Dancing Queen',
            buyLink: null,
            thumbnailUrl: null,
            isMemo: false
          }
        ],
        createdBy: 'josephtatum',
        userId: '5e580fa7a205cba1fe54248d',
        __v: 0
      }
    },
    lastEditedMixtape: {
      mixtapeName: '',
      songs: [],
      createdBy: '',
      userId: ''
    }
  });
}
