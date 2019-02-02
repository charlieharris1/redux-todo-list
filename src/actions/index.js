import * as api from '../api';

const nextTodoId = Math.random;
export const addTodo = text => ({
  type: 'ADD_TODO',
  id: nextTodoId(),
  text
})

export const setVisibilityFilter = filter => ({
  type: 'SET_VISIBILITY_FILTER',
  filter
})

export const toggleTodo = id => ({
  type: 'TOGGLE_TODO',
  id
})

export const fetchTodos = () => {
  return dispatch => 
    api.getTodos()
      .then((todos) => dispatch({ type: 'FETCH_TODOS_SUCCESS', todos }))
};

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}