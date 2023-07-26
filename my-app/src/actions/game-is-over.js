export const gameIsOver = (playing) => {
	return { type: 'GAME_IS_OVER', payload: !playing };
};
