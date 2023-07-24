import React, { useEffect, useState } from 'react';
import styles from './XsOsLayout.module.css';
import { store } from './store';

const XsOsLayout = ({ handleClick, handleNewGame }) => {
	const [boardArray, setBoardArray] = useState(store.getState().boardArray);
	const { xTurn, playing } = store.getState();

	useEffect(() => {
		store.subscribe(() => {
			setBoardArray(store.getState().boardArray);
		});
	});

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
