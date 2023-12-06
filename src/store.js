import { createStore } from "redux";
import { gameReducer } from "./reducers";

export const store = createStore(gameReducer);
