import React, { useState } from 'react';
import styles from './game.module.css'
import Field from '../field/field';
import { winLogic } from '../../winLogic';

const Game = () => {
	const [field, setField] = useState(Array(9).fill(null));
	const [xIsNext, setXIsNext] = useState(true);
	const [moveCount, setMoveCount] = useState(0);
	const winner = winLogic(field);

	const clickOptions = (index) => {
	const fieldCopy = [...field];
	if (winner || fieldCopy[index]) return;
	fieldCopy[index] = xIsNext ? 'X' : 'O';

	setField(fieldCopy);
	setXIsNext(!xIsNext);
	setMoveCount(prevCount => prevCount + 1);
	};

	const isDraw = () => {
	return moveCount === field.length && !winner;
	};

	return (
		<div className={styles.wrapper}>
			<button className={styles.start__btn} onClick={() => setField(Array(9).fill(null))}>Начать заново</button>
			<p className={styles.game__info}>
				{winner
					? 'Победил ' + winner
					: isDraw()
					? 'Ничья'
					: 'Сейчас ходит ' + (xIsNext ? 'X' : 'O')}
			</p>
			<Field cells={field} click={clickOptions} />
		</div>
	);
}

export default Game;
