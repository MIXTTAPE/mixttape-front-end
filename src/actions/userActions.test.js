import { SET_USER, setUserLoading, SET_USER_LOADING, userLoadingDone, USER_LOADING_DONE, setUserSignUp, setUserLogin, verifyUser, SET_USER_MIXTAPES, SET_DELETE_TAPE, deleteUserTape } from './userActions';
import { SET_MIXTAPE_LOADING } from './editedMixtapeActions';

jest.mock('../services/auth.js');
jest.mock('../services/mixtapeApi.js');

describe('userActions', () => {

  it('can set user loading', () => {
    const action = setUserLoading();
    expect(action).toEqual({
      type: SET_USER_LOADING
    });
  });

  it('can reset user loading', () => {
    const action = userLoadingDone();
    expect(action).toEqual({
      type: USER_LOADING_DONE
    });
  });

  it('creates an action to set the user via sign up', () => {
    const dispatch = jest.fn();
    const action = setUserSignUp('mockUserSignUp', 'blah');

    return action(dispatch)
      .then(() => {
        expect(dispatch).toHaveBeenCalledWith({
          type: SET_USER_LOADING
        });
        expect(dispatch).toHaveBeenCalledWith({
          type: SET_USER,
          payload: { username: 'mockUserSignUp' }
        });
      });
  });
  
  it('creates an action to set the user via login', () => {
    const dispatch = jest.fn();
    const action = setUserLogin('mockUserLogin', 'blah');

    return action(dispatch)
      .then(() => {
        expect(dispatch).toHaveBeenCalledWith({
          type: SET_USER_LOADING
        });
        expect(dispatch).toHaveBeenCalledWith({
          type: SET_USER,
          payload: {
            username: 'mockUserLogin',
            mixtapes: []
          } });
      });
  });

  it('creates an action to verify a user', () => {
    const dispatch = jest.fn();
    const action = verifyUser();

    return action(dispatch)
      .then(() => {
        expect(dispatch).toHaveBeenCalledWith({
          type: SET_USER_LOADING
        });
        expect(dispatch).toHaveBeenCalledWith({
          type: SET_USER,
          payload: { user: { username: 'mockUserVerified' } }
        });
      });
  });

  it('can delete a mixtape', () => {
    const state = {
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
    };
    const dispatch = jest.fn();
    const payload = '5e5810c5a205cba1fe5424a1';
    const action = deleteUserTape(state, payload);

    return action(dispatch)
      .then(() => {
        expect(dispatch).toHaveBeenCalledWith({
          type: SET_USER_LOADING
        });
        expect(dispatch).toHaveBeenCalledWith({
          type: SET_DELETE_TAPE,
          payload
        });
      });
  });
});
