export const clickCell = (index, currentPlayer) => {
	return {
		type: "CLICK_CELL",
		payload: { index, currentPlayer },
	};
};

export const resetGame = () => {
	return {
		type: "RESET_GAME",
	};
};
