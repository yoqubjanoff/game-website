export const initialState = {
	homeList: []
};

export const reducer = (state, action) => {
	switch (action.type) {
		case 'setHome':
			return { ...state, homeList: action.payload };
		default:
			return state;
	}
};
