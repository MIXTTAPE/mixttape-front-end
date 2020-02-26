export const getActiveMixtape = state => state.activeMixtape.mixtape;
export const getActiveSong = state => {
  const currentIndex = state.activeMixtape.currentSongIndex;
  return state.activeMixtape.songs[currentIndex];
};

export const getPlaying = state => {
  return state.activeMixtape.playing;
};

export const getActiveLoading = state => {
  return state.activeMixtape.loading;
};
