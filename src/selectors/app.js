const reducerKey = 'app';

export const selectAppState = (state) => state[reducerKey];
export const selectAppBootState = (state) => state[reducerKey].isBooting;
