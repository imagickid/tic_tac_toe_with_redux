export const initialState = {
	boardArray: Array(9).fill(null),
	xTurn: true,
	playing: true,
};

export const reducer = (state = initialState, action) => {
	const { type, payload } = action;

	switch (type) {
		case 'SET_TIC_TAC_TOE': {
			return {
				...state,
				...payload,
			};
		}
		case 'GAME_IS_OVER': {
			return {
				...state,
				playing: false,
			};
		}
		case 'NEW_GAME': {
			return initialState;
		}
		default:
			return state;
	}
};
