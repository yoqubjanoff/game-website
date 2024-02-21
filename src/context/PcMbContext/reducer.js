export const initialState = {
	userData: {
		titleUz: "",
		contentUz: "",
		titleRu: "",
		contentRu: "",
		titleEn: "",
		contentEn: "",
		gamePhotoUrl: "",
		typeOfGame: "",
		videoUrl: "",
		isActive: false,
	},
	selected: {},
	pcmbGames: [],
};

export const reducer = (state, action) => {
	switch (action.type) {
		case 'setGames':
			return { ...state, pcmbGames: action.payload };
		case 'setSelected':
			return { ...state, selected: action.payload };
		default:
			return state;
	}
};

