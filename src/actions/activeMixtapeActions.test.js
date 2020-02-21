import { setAsActive, SET_AS_ACTIVE } from './activeMixtapeActions';

describe('activeMixtapeActions', () => {

  let payload;
  beforeEach(() => {
    payload = {
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
    };
  });

  it('can set a playlist as active', () => {
    const action = setAsActive(payload);
    expect(action).toEqual({
      type: SET_AS_ACTIVE,
      payload
    });
  });
  

});
