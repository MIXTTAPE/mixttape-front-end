import { getActiveMixtape, getActiveSong, getPlaying } from './activeMixtapeSelectors';

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
        currentSongIndex: 0,
        createdBy: 'josephtatum'
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
      playing: false,
      loading: true,
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
      currentSongIndex: 0,
      createdBy: 'josephtatum'
    });
  });

  it('can get the currently playing song', () => {
    const currentlyPlaying = getActiveSong(state);
    expect(currentlyPlaying).toEqual({
      nativeId: 'AF607105',
      nativeSource: 'youtube',
      title: 'Charlotte Gainsbourg - AF607105',
      buyLink: '',
      thumbnail: ''
    });
  });

  it('can get a boolean to see if a song is playing', ()=> {
    const isPlaying = getPlaying(state);
    expect(isPlaying).toEqual(false);
  });

});
