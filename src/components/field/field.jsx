import { Component } from 'react';
import { Cell } from '../cell/cell';
import PropTypes from 'prop-types'

export class Field extends Component {
	render() {
		return (<div className='field'>
			{
				this.props.cells.map((cell, id) => (
					<Cell key={id} value={cell} onClick={() => this.props.click(id)} />
				))
				}
		</div>
		)
	};
}

Field.propTypes = {
	onClick: PropTypes.func.isRequired,
	cells: PropTypes.arrayOf(PropTypes.string),
	click: PropTypes.func.isRequired,
	}
