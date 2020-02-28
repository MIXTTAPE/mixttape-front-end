import { getActiveMixtape, getPlaying, getSongIndex, getActiveLoading } from './activeMixtapeSelectors';

describe('activeMixtape Selectors', () => {

  let state;
  beforeEach(() => {
    state = {
      user: {
        loading: true,
        mixtapes: [
          {
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
          }
        ],
        username: 'josephtatum',
        passwordHash: '3.1415926540'
      },
      activeMixtape: {
        playing: false,
        loading: true,
        mixtape: {
          id: '1111111',
          mixtapeName: 'My Mixtape',
          songs: [
            {
              nativeId: 'AF607105',
              nativeSource: 'youtube',
              title: 'Charlotte Gainsbourg - AF607105',
              buyLink: '',
              thumbnail: ''
            }
          ],
          createdBy: 'josephtatum'
        },
        currentSongIndex: 2
      },
      lastEditedMixtape: {
        loading: true,
        mixtapeName: 'My Mixtape',
        songs: [
          {
            nativeId: 'AF607105',
            nativeSource: 'youtube',
            title: 'Charlotte Gainsbourg - AF607105',
            buyLink: '',
            thumbnail: ''
          }
        ]
      }
    };
  });

  it('can get the users active mixtape', () => {
    const activeMixtape = getActiveMixtape(state);
    expect(activeMixtape).toEqual({
      id: '1111111',
      mixtapeName: 'My Mixtape',
      songs: [
        {
          nativeId: 'AF607105',
          nativeSource: 'youtube',
          title: 'Charlotte Gainsbourg - AF607105',
          buyLink: '',
          thumbnail: ''
        }
      ],
      createdBy: 'josephtatum'
    });
  });

  it('can get a current song index', ()=> {
    const currentSongIndex = getSongIndex(state);
    expect(currentSongIndex).toEqual(2);
  });
  it('can get a boolean to see if a song is playing', ()=> {
    const isPlaying = getPlaying(state);
    expect(isPlaying).toEqual(false);
  });

  it('can select activeLoading from state', () => {
    const activeLoading = getActiveLoading(state);
    expect(activeLoading).toBeTruthy();
  });
});
