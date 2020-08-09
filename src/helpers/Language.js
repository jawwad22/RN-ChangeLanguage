import localization from "../localization";
import Constants from "./Constants";
import  { DataStore } from "../redux";

DataStore

var languageHandler = function (url) {
	return {
		get: (target, name) => {
			// TODO: Check current language from Reduxf
			const langIndex = DataStore.getState().general.language;
			const selectedLanguage = Constants.language[langIndex].code;
			const currentLanguage = selectedLanguage;
			return localization[currentLanguage][name];
		}
	}
};

export default new Proxy({}, languageHandler());
