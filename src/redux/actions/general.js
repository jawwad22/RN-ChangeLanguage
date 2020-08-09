import types from "../types";
export const {
	SET_LANGUAGE,
} = types;

export const setLanguage = (payload) => {
	return {
		type: SET_LANGUAGE,
		payload
	};
};

