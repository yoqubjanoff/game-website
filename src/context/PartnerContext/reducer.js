export const initialState = {
	userData: {
		title: '',
		content: '',
		imageUrl: '',
	},
	selected: {},
	partnerList: [],
};
export const reducer = (state, action) => {
	switch (action.type) {
		case 'setPartners':
			return { ...state, partnerList: action.payload };
		case 'setSelected':
			return { ...state, selected: action.payload };
		default:
			return state;
	}
};
