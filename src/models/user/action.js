import { LOGIN } from "./types";
import { createAction } from "redux-actions";
import http from "../../util/ajax";

export const userLogin = createAction(LOGIN, params => {
    return http.post({
        url: "http://baidu.com",
        params
    });
});
