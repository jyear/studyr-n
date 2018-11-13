import { LOGIN } from "./types";
import { handleActions } from "redux-actions";

const defaultState = null;

export const userInfo = handleActions(
    {
        [LOGIN]: (state, { payload }) => {
            global.realm.write(() => {});
            return { ...state, ...payload };
        }
    },
    defaultState
);
