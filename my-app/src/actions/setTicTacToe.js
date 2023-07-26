export const setTicTacToe = (newState, turn) => {
	return {
		type: 'SET_TIC_TAC_TOE',
		payload: {
			boardArray: newState,
			xTurn: !turn,
		},
	};
};
