// const incrementAction = () => ({ type: "INC" });
// const decrementAction = () => ({ type: "DEC" });

const counterReducer = (state = 0, action) => {
	
	switch (action.type) {
		case "INC":
			return state + 1;
		case "DEC":
			return state - 1;
		default:
			console.log(`counterReducer has got action of type ${action.type}`)
			return state;
	}
};

export default counterReducer;
// export { incrementAction, decrementAction };
