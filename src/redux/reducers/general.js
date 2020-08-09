
import types from "../types";
const {
	SET_LANGUAGE
} = types;

const initialState = {
	language: 0,
	
};

const general = (state = initialState, action) => {
	switch (action.type) {
		case SET_LANGUAGE:
			return { ...state, language: action.payload };
		default:
			return state;
	}
};

export default general;

