export const getActiveMixtape = state => state.activeMixtape.mixtape;

export const getSongIndex = state => {
  return state.activeMixtape.mixtape.currentSongIndex;
};

export const getPlaying = state => {
  return state.activeMixtape.playing;
};

export const getActiveLoading = state => {
  return state.activeMixtape.loading;
};
