
export const setInLocalStorage = (name, object) => {
  const stringified = JSON.stringify(object);
  localStorage.setItem(name, stringified);
};
export const removeFromLocalStorage = (name) => {
  localStorage.removeItem(name);
};
export const getFromLocalStorage = (name) => {
  const stringified = localStorage.getItem(name);
  return JSON.parse(stringified);
};
