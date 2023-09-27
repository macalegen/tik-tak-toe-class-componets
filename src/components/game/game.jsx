import React, { useState } from 'react';
import styles from './game.module.css'
import Field from '../field/field';
import { winLogic } from '../../winLogic';

const Game = () => {
	const [field, setField] = useState(Array(9).fill(null))
	const [xIsNext, setXIsNext] = useState(true)
	const winner = 	winLogic(field)

	const clickOptions = (index) => {
		const fieldCopy = [ ...field]
		// определяем был ли клик по ячейке или игра окончена
		if (winner || fieldCopy[index]) return
		// определяем чей ход
		fieldCopy[index] = xIsNext ? 'X' : 'O'
		// обновляем состояние
		setField(fieldCopy)
		setXIsNext(!xIsNext)
	}

	const startNewGame = () => {
		return(
			<button className={styles.start__btn} onClick={() => setField(Array(9).fill(null))}>Начать заново</button>
		)
	}

	function isFieldFull(field) {
		if (!field) {
		  return false; // Доска не определена, считаем, что она не полная
		}
		for (let i = 0; i < field.length; i++) {
		  if (!field[i]) {
			return false; // Если строка на доске не определена, считаем, что она не полная
		  }
		  for (let j = 0; j < field[i].length; j++) {
			if (field[i][j] === null) {
			  return false; // Если найдена пустая клетка, доска не полная
			}
		  }
		}
		return true; // Если все клетки заняты, доска полная
	  }

	return (
		<div className={styles.wrapper}>
			{ startNewGame() }
			<p className={styles.game__info}>
				{winner
					? 'Победил ' + winner
					: isFieldFull(field)
					? 'Ничья'
					: 'Сейчас ходит ' + (xIsNext ? 'X' : 'O')}
			</p>
			<Field cells={field} click={clickOptions} />
		</div>
	);
}

export default Game;
