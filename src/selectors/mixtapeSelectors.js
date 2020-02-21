export const getUserMixtapes = state => state.user.mixtapes;
export const getLastEditedMixtape = state => state.lastEditedMixtape;
export const getActiveMixtape = state => state.activeMixtape;
export const getActiveSong = state => {
  const currentIndex = state.activeMixtape.currentSongIndex;
  return state.activeMixtape.songs[currentIndex];
};
