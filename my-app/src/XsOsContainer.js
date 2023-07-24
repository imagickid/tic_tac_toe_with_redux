import { store } from './store';
import XsOsLayout from './XsOsLayout';

export const XsOsContainer = () => {
	const handleClick = (e) => {
		const { boardArray, xTurn, playing } = store.getState();
		if (playing) {
			if (e.target.textContent) return;
			const newState = boardArray.slice();
			newState[+e.target.dataset.index] = xTurn ? 'X' : 'O';

			store.dispatch({
				type: 'SET_TIC_TAC_TOE',
				payload: {
					boardArray: newState,
					xTurn: !xTurn,
				},
			});
			checkWinner(newState);
		}
	};

	const handleNewGame = () => {
		store.dispatch({ type: 'NEW_GAME' });
	};

	const winners = [
		[0, 1, 2],
		[3, 4, 5],
		[6, 7, 8],
		[0, 3, 6],
		[1, 4, 7],
		[2, 5, 8],
		[0, 4, 8],
		[2, 4, 6],
	];

	const checkWinner = (currentState) => {
		const { playing } = store.getState();
		winners.forEach((winner) => {
			const [a, b, c] = winner;
			if (
				currentState[a] &&
				currentState[a] === currentState[b] &&
				currentState[a] === currentState[c]
			) {
				store.dispatch({ type: 'GAME_IS_OVER', payload: !playing });
			}
		});
	};

	return <XsOsLayout handleClick={handleClick} handleNewGame={handleNewGame} />;
};
