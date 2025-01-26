import {
  getFromLocalStorage,
  setInLocalStorage,
} from "../util/localStorage.js";

let state = {
  cartCount: 3
};
 

 
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

const localState = getState();

if(!localState) {
  setInLocalStorage("state", state);
}

export default state;
