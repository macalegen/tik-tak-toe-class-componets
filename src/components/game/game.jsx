import { useState, useEffect } from 'react';
import styles from './game.module.css';
import { Field } from '../field/field';
import { winLogic } from '../../winLogic';
import { store } from '../../store';

export const Game = () => {
  const [field, setField] = useState(store.getState().field);
  const [xIsNext, setXIsNext] = useState(store.getState().xIsNext);
  const [moveCount, setMoveCount] = useState(store.getState().moveCount);

  useEffect(() => {
    const unsubscribe = store.subscribe(() => {
      setField(store.getState().field);
      setXIsNext(store.getState().xIsNext);
      setMoveCount(store.getState().moveCount);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const winner = winLogic(field);

  const clickOptions = (index) => {
    if (winner || field[index]) return;
    const fieldCopy = [...field];
    fieldCopy[index] = xIsNext ? 'X' : 'O';

    store.dispatch({ type: 'CLICK_CELL', payload: { index, currentPlayer: xIsNext } });
  };

  const isDraw = () => {
    return moveCount === field.length && !winner;
  };

  const resetGame = () => {
    store.dispatch({ type: 'RESET_GAME' });
  };

  return (
    <div className={styles.wrapper}>
      <button className={styles.start__btn} onClick={() => resetGame()}>Начать заново</button>
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
};
