import React from 'react';
import styles from './field.module.css';
import Cell from '../cell/cell';
import PropTypes from 'prop-types'

const Field = ({ cells, click }) => {
	return (
		<div className={styles.field}>
			{
				cells.map((cell, i) => (
					<Cell key={i} value={cell} onClick={() => click(i)} />
				))
				}
		</div>
	);
}

Field.propTypes = {
	cells: PropTypes.string,
	click: PropTypes.string
}

export default Field;
