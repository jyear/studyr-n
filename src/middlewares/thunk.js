export default function thunkMiddleware({ dispatch, getState }) {
	return next => action => {
		if (typeof action === "function") {
			return action(dispatch, getState);
		}
		// Compatible with redux action
		if (typeof action.payload === "function") {
			return action.payload(dispatch, getState);
		}
		return next(action);
	};
}
