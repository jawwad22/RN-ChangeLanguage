import { createStore, applyMiddleware } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import AsyncStorage from "@react-native-community/async-storage";
import combineRed from "./reducers";
import thunk from "redux-thunk";


const persistConfig = {
    key: "changelang-storage",
    storage: AsyncStorage,
    blacklist: []//["general","anyOtherReducer"] if you add a reducer name here, it reducers state will not save in asyncStorage 
};

const middleware = applyMiddleware(thunk);

const appReducer = combineRed;

const reducerWithPersist = persistReducer(persistConfig, appReducer);
export const DataStore = createStore(reducerWithPersist, middleware);
export const StorePersistor = persistStore(DataStore);

DataStore.subscribe(() => { });