const fakeData = [
  {
  id: 0,
  text: 'Learn React',
  completed: false
  },
  {
    id: 1,
    text: 'Learn Redux',
    completed: false
  },
  {
    id: 2,
    text: 'Ship code to production',
    completed: false
  }
],

export const getTodos = () =>
  new Promise(resolve => {
    setTimeout(resolve(fakeData), 2000);
  });