import React from 'react';
import styles from './field.module.css';
import Cell from '../cell/cell';
import PropTypes from 'prop-types'

const Field = ({ cells, click }) => {
	return (
		<div className={styles.field}>
			{
				cells.map((cell, id) => (
					<Cell key={id} value={cell} onClick={() => click(id)} />
				))
				}
		</div>
	);
}

Field.propTypes = {
	cells: PropTypes.arrayOf(PropTypes.string),
	click: PropTypes.func
	}

export default Field;
