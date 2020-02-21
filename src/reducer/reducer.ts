import { combineReducers } from 'redux';

import {
  ADD_TODO,
  TOGGLE_TODO,
  SET_VISIBILITY_FILTER,
  VisibilityFilter,
  AddTodo,
  VisibilityFilterTodo,
  ToggleTodo
} from '../actions/actions';


const { SHOW_ALL } = VisibilityFilter;

/**
 * Changes the state of the filter in the APP TODO
 * 
 * @param {SHOW_ALL} state 
 * @param {*} action 
 */
function visibilityFilter(state = SHOW_ALL, action: VisibilityFilterTodo) {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.payload.filter
    default:
      return state
  }
}

/**
 * reducer, handles the actions for the APP TODO
 * 
 * @param {*} state 
 * @param {*} action 
 */
function addTodos(state = [], action: AddTodo) {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          text: action.payload.text,
          completed: action.payload.completed
        }
      ]
    default:
      return state
  }
}

function toggleTodos(state = [], action: ToggleTodo) {
  switch(action.type) {
    case TOGGLE_TODO:
      return state.map((todo: AddTodo, index) => {
        if (index === action.payload.index) {
          return Object.assign({}, todo, {
            completed: !todo.payload.completed
          })
        }
        return todo
      })
    default:
      return state;
  }
}

/**
 * Combine the reducers so that can be handled in a single variable
 */
const todoApp = combineReducers({
  visibilityFilter,
  addTodos,
  toggleTodos
});

export default todoApp;
