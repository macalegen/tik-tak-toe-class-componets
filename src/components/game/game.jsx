import React, { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './game.module.css';
import { Field } from '../field/field';
import { winLogic } from '../../winLogic';
import { clickCell, resetGame } from '../../actions';

export const Game = () => {
  const dispatch = useDispatch();
  const { field, xIsNext, moveCount } = useSelector((state) => state);

	const isDraw = useCallback(() => {
    return moveCount === field.length && !winLogic(field);
  }, [moveCount, field]);

  useEffect(() => {
		const winner = winLogic(field);

		if (winner) {
			dispatch({ type: 'GAME_OVER', payload: { winner } });
		} else if (isDraw()) {
			dispatch({ type: 'GAME_OVER', payload: { draw: true } });
		}
	}, [field, dispatch, isDraw]);



  const clickOptions = (index) => {
    if (winLogic(field) || field[index]) return;

    dispatch(clickCell(index, xIsNext));
  };

  const resetGameHandler = () => {
    dispatch(resetGame());
  };

  return (
    <div className={styles.wrapper}>
      <button className={styles.start__btn} onClick={resetGameHandler}>Начать заново</button>
      <p className={styles.game__info}>
        {winLogic(field)
          ? 'Победил ' + winLogic(field)
          : isDraw()
          ? 'Ничья'
          : 'Сейчас ходит ' + (xIsNext ? 'X' : 'O')}
      </p>
      <Field cells={field} click={clickOptions} />
    </div>
  );
};
