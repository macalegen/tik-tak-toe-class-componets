import React from 'react';
import styles from './cell.module.css'
import PropTypes from 'prop-types'

const Cell = (props) => {
	return (
		<button className={styles.cell} onClick={props.onClick}>{props.value}</button>
	);
}

Cell.propTypes = {
	props: PropTypes.string
}

export default Cell;
