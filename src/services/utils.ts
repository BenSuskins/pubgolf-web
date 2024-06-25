export const getGameIdentifier = (): string => {
    const identifier = localStorage.getItem('gameIdentifier');
    if (!identifier) {
      console.warn('No game identifier found in local storage.');
      throw new Error('Game identifier not found.');
    }
    return identifier;
  };

export const getPlayerName = (): string => {
  const playerName = localStorage.getItem('playerName');
  if (!playerName) {
    console.warn('No game playerName found in local storage.');
    throw new Error('Plaayer Name not found.');
  }
  return playerName;
};

export const clearLocalStorage = () => {
  console.log('Clearing local storage')
  localStorage.clear();
};