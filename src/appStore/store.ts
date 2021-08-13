const createStore = (reducer: (state: any, action: any) => any) => {
	let state: any;
	let listeners: any[] = [];

	const getState = () => state;

	const dispatch = (action: any) => {
		state = reducer(state, action);
		listeners.forEach((l) => {
			l();
		});
	};

	const subscribe = (listener: any) => {
		listeners.push(listener);
		return () => {
			listeners = listeners.filter((l) => l !== listener);
		};
	};

	dispatch({});

	return { getState, dispatch, subscribe };
};

export default createStore;
