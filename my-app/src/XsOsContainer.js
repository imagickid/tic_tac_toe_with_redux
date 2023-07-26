import { useSelector, useDispatch } from 'react-redux';
import { selectBoardArray, selectXTurn, selectPlaying } from './selectors/index';
import { NEW_GAME, gameIsOver, setTicTacToe } from './actions';
import XsOsLayout from './XsOsLayout';

export const XsOsContainer = () => {
	const dispatch = useDispatch();
	const boardArray = useSelector(selectBoardArray);
	const xTurn = useSelector(selectXTurn);
	const playing = useSelector(selectPlaying);

	const handleClick = (e) => {
		if (playing) {
			if (e.target.textContent) return;
			const newState = boardArray.slice();
			newState[+e.target.dataset.index] = xTurn ? 'X' : 'O';

			dispatch(setTicTacToe(newState, xTurn));
			checkWinner(newState);
		}
	};

	const handleNewGame = () => {
		dispatch(NEW_GAME);
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
		winners.forEach((winner) => {
			const [a, b, c] = winner;
			if (
				currentState[a] &&
				currentState[a] === currentState[b] &&
				currentState[a] === currentState[c]
			) {
				dispatch(gameIsOver(playing));
			}
		});
	};

	return <XsOsLayout handleClick={handleClick} handleNewGame={handleNewGame} />;
};
