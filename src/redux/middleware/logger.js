export const logger = (store) => (next) => (action) => {
  console.log(action);
  next(action);
};
