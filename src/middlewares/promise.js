import { isFSA } from "flux-standard-action";

function isPromise(obj) {
	return (
		!!obj &&
		(typeof obj === "object" || typeof obj === "function") &&
		typeof obj.then === "function"
	);
}

export default function promiseMiddleware({ dispatch }) {
	return next => action => {
		if (!isFSA(action)) {
			return isPromise(action) ? action.then(dispatch) : next(action);
		}
		const promise = action.payload;
		if (!isPromise(promise)) return next(action);

		Promise.resolve(promise)
			.then(res => {
				return next({
					...action,
					payload: res && res.data ? res.data : res
				});
			})
			.catch(e => {
				console.info(e);
			});

		return promise;
	};
}
