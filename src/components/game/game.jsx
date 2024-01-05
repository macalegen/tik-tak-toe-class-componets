import { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Field } from '../field/field';
import { winLogic } from '../../winLogic';
import { clickCell, resetGame } from '../../actions';
export class OldGameContainer extends Component {
	  constructor({ field, xIsNext, moveCount }) {
	    super(field, xIsNext, moveCount)
			this.state = {
        isDraw: moveCount === field.length && !winLogic(field)
    }
	  }

		winner() {
			winLogic(this.field)
		}

	  render() {
			return (
				<div className='wrapper'>
					<button className='start__btn start__btn:hover' onClick={this.props.resetGameHandler}>Начать заново</button>
					<p className='game__info'>
						{winLogic(this.props.field)
							? 'Победил ' + winLogic(this.props.field)
							: this.state.isDraw()
							? 'Ничья'
							: 'Сейчас ходит ' + (this.props.xIsNext ? 'X' : 'O')}
					</p>
					<Field cells={this.props.field} click={this.props.clickOptions} />
				</div>
			);
	  }
	}

	const mapDispatchToProps = (dispatch) => ({
		resetGameHandler: () =>	dispatch(resetGame()),
		clickOptions: (index) => {
			if (winLogic(this.props.field) || this.props.field[index]) return;

			dispatch(clickCell(index, this.props.xIsNext))},
		winner: (winner) => dispatch({ type: 'GAME_OVER', payload: { winner } }),
		isDraw: () => dispatch({ type: 'GAME_OVER', payload: { draw: this.state.isDraw } }),
	})


	export const OldGame = connect(
		null,
		mapDispatchToProps
	)(OldGameContainer);

	OldGameContainer.propTypes = {
		resetGame: PropTypes.func.isRequired,
		clickOptions: PropTypes.func.isRequired,
		winner: PropTypes.func.isRequired,
		isDraw: PropTypes.func.isRequired,
	}
