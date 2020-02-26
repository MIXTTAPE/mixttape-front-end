import { SET_AS_ACTIVE, SET_SONG_INDEX, SET_PLAYING } from '../actions/activeMixtapeActions';

const initialState = {
  playing: false,
  mixtape: {
    _id: 111,
    mixtapeName: 'My Mixtape',
    songs: [
      {
        nativeId: '6uaN60k0-zY',
        nativeSource: 'youtube',
        title: 'Angel Olsen - Lark',
        buyLink: null,
        thumbnailUrl: 'https://i.ytimg.com/vi/6uaN60k0-zY/mqdefault.jpg',
        isMemo: false
      },
      {
        nativeId: '281266834',
        nativeSource: 'soundcloud',
        title: 'EkMagicKat - Biking Home in the Rain',
        buyLink: null,
        thumbnailUrl: 'https://i.ytimg.com/vi/Jjt698Zv5jQ/mqdefault.jpg',
        isMemo: false
      }
    ],
    currentSongIndex: 0,
    createdBy: 'josephtatum'
  }
};

export const activeMixtapeReducer = (state = initialState, action) => {
  switch(action.type) {
    case SET_AS_ACTIVE:
      return { ...state.playing, mixtape: action.payload };
    case SET_SONG_INDEX:
      return { ...state, currentSongIndex: action.payload };
    case SET_PLAYING:
      if(action.payload === 'stop') return { ...state, playing: false };
      return { ...state, playing: !state.playing };
    default:
      return state;
  }
};
