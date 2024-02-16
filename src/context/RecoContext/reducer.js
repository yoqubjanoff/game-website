export const initialState = {
	userData: {
		title: '',
		author: '',
		description: '',
		videoPath: '',
		coursePhotoUrl: '',
		top: false,
		free: false,
		subDirectionId: null,
	},
	selected: {},
	recoList: [],
	recommends: [],
};


export const reducer = (state, action) => {
	switch (action.type) {
		case 'setRecommendation':
			return { ...state, recommends: action.payload };
		case 'setRecommendationList':
			return { ...state, recoList: action.payload };
		case 'setSelected':
			return { ...state, selected: action.payload };
		case 'sertRecoData':
			return { ...state, userData: action.payload };
		default:
			return state;
	}
};
