import { getUserMixtapes, getUser, getError, getUserLoading, isAuthenticated } from './userSelectors';

describe('Mixtape Selectors', () => {

  let state;
  beforeEach(()=> {
    state = {
      userInfo: {
        error: 'none',
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
        user: {
          username: 'josephtatum',
          passwordHash: '3.1415926540',
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
          ]
        }
      },
      activeMixtape: {
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

  it('can get the active users mixtapes', () => {
    const userMixtapes = getUserMixtapes(state);
    expect(userMixtapes).toEqual([
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
    ]);
  });

  it('can get the user from state', () => {
    const user = getUser(state);
    expect(user).toEqual({
      username: 'josephtatum',
      passwordHash: '3.1415926540',
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
      ]
    });
  });

  it('can get an error from state', () => {
    const error = getError(state);
    expect(error).toEqual('none');
  });

  it('can get the user loading status from state', () => {
    const loading = getUserLoading(state);
    expect(loading).toEqual(true);
  });

  it('can get userAuthentication status from state', () => {
    const fakeState = { userInfo: { user: '' } };
    let authentication = isAuthenticated(fakeState);

    expect(authentication).toBeFalsy();

    authentication = isAuthenticated(state);
    
    expect(authentication).toBeTruthy();
  });
});
