export const getGameIdentifier = (): string => {
    const identifier = localStorage.getItem('gameIdentifier');
    if (!identifier) {
      console.warn('No game identifier found in local storage.');
      throw new Error('Game identifier not found.');
    }
    return identifier;
  };
  