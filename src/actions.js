export const clickCell = (index, currentPlayer) => {
	return {
		type: "CLICK_CELL",
		payload: { index, currentPlayer },
	};
};
