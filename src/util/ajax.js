import { requestUrl } from "../config/";

const METHODS = ["get", "delete"];
const BODY_METHODS = ["post", "put", "patch"];
function parseJSON(response) {
    return response.json();
}
function checkStatus(response) {
    if (response.status >= 200 && response.status < 300) {
        return response;
    }
    throw new Error(response.status);
}
function checkCode(response) {
    if (response.code == 401) {
        window.apphistory.push({
            pathname: "/"
        });
        return;
    }
    if (response.code != 200) {
        return;
    }

    return response;
}
function request(method, url, params = {}, header = {}, outError = false) {
    let user = localStorage.getItem("userInfo");
    let Token;
    if (user && url.indexOf("auth/login") == -1) {
        user = JSON.parse(user);
        Token = user.token;
        header["api-token"] = Token;
    }

    const headers = {
        "Content-Type": "application/json",
        ...header
    };
    let _url = requestUrl() + url;
    let body;

    if (METHODS.indexOf(method) != -1) {
        const _params = [];
        for (let key in params) {
            _params.push(`${key}=${params[key]}`);
        }
        //_params.push(`random=${Math.floor(Math.random() * 100000000)}`);
        if (_params.length) {
            _url += "?";
            _url += _params.join("&");
        }
    } else {
        body = JSON.stringify(params);
    }
    //处理超时
    var _fetch = function(url, options) {
        var timeout_promise = new Promise((resolve, reject) => {
            setTimeout(() => {
                reject("timeout");
            }, 20000);
        });
        let res = Promise.race([
            fetch(_url, {
                method,
                body,
                headers
            }),
            timeout_promise
        ]);
        return res;
    };
    var _fetchData = _fetch(_url, {
        method,
        body,
        headers
    });
    return _fetchData
        .then(checkStatus)
        .then(res => {
            if (headers["Content-Type"] == "application/json") {
                return res.json();
            } else {
                return res.text();
            }
        })
        .then(checkCode)
        .catch(e => {
            if (!outError) {
                // Modal.error({
                //     title: "错误",
                //     content: `数据请求错误${e}`
                // });
            } else {
                throw new Error(e.toString().replace("Error:", ""));
            }
        });
}
const methods = {};

[...METHODS, ...BODY_METHODS].forEach(method => {
    methods[method] = ({ url, params, header }, outError) =>
        request(method, url, params, header, outError);
});

export default methods;
