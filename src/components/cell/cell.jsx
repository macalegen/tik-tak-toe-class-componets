import PropTypes from 'prop-types'
import { Component } from 'react'

export class Cell extends Component {
	render() {
	return (
		<button className='cell cell:hover' onClick={this.props.onClick}>
			{this.props.value}
		</button>
	);
}
}

Cell.propTypes = {
	onClick: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
}
