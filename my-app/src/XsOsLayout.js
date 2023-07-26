import { useSelector } from 'react-redux';
import { selectBoardArray, selectXTurn, selectPlaying } from './selectors/index';
import styles from './XsOsLayout.module.css';

const XsOsLayout = ({ handleClick, handleNewGame }) => {
	const boardArray = useSelector(selectBoardArray);
	const xTurn = useSelector(selectXTurn);
	const playing = useSelector(selectPlaying);

	const whosTurn = `${xTurn ? 'X' : 'O'}'s turn`;
	const whosWinner = `${xTurn ? 'O' : 'X'} wins`;

	return (
		<>
			<h1>{playing ? whosTurn : whosWinner}</h1>
			<div className={styles.board} onClick={handleClick}>
				{boardArray.map((cellValue, id) => (
					<div className={styles.cells} key={id} data-index={id}>
						{cellValue}
					</div>
				))}
			</div>
			<button className={styles.btn} onClick={handleNewGame}>
				New game
			</button>
		</>
	);
};

export default XsOsLayout;
