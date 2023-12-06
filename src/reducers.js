const initialState = {
	field: Array(9).fill(null),
	xIsNext: true,
	moveCount: 0,
};

export const gameReducer = (state = initialState, action) => {
	switch (action.type) {
		case "CLICK_CELL":
			const { index, currentPlayer } = action.payload;
			if (state.field[index] || state.winner) {
				return state;
			}
			const newField = [...state.field];
			newField[index] = currentPlayer ? "X" : "O";
			return {
				...state,
				field: newField,
				xIsNext: !state.xIsNext,
				moveCount: state.moveCount + 1,
			};
		case "RESET_GAME":
			return initialState;
		default:
			return state;
	}
};
