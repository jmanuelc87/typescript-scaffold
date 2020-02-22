import { combineReducers } from "redux";

import {
  ADD_TODO,
  TOGGLE_TODO,
  SET_VISIBILITY_FILTER,
  VisibilityFilter,
  AddTodo,
  VisibilityFilterTodo,
  ToggleTodo,
  AddTodoPayload
} from "../actions/actions";

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
      return action.payload.filter;
    default:
      return state;
  }
}

/**
 * reducer, handles the actions for the APP TODO
 *
 * @param {*} state
 * @param {*} action
 */
function todos(state = [], action: any) {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          text: action.payload.text,
          completed: action.payload.completed
        }
      ];
      break;
    case TOGGLE_TODO:
      return state.map((todo: AddTodoPayload, index) => {
        console.log(todo);
        if (index === action.payload.index) {
          return Object.assign({}, todo, {
            completed: !todo.completed
          });
        }
        return todo;
      });

    default:
      return state;
  }
}

/**
 * Combine the reducers so that can be handled in a single variable
 */
const todoApp = combineReducers({
  visibilityFilter,
  todos
});

export default todoApp;
