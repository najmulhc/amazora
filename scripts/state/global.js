import { getFromLocalStorage, setInLocalStorage } from "../util/localStorage.js";

let state = {};

export const getState = () => {
  const localState = getFromLocalStorage("state");
  return localState;
};

export const setState = (info) => {
  state = {
    ...state,
    ...info,
  };
  setInLocalStorage("state", state);
};

export default state;
