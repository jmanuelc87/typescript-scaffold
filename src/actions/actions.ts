export const ADD_TODO = "ADD_TODO";
export const TOGGLE_TODO = "TOGGLE_TODO";
export const SET_VISIBILITY_FILTER = "SET_VISIBILITY_FILTER";

export const VisibilityFilter = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_COMPLETED: 'SHOW_COMPLETED',
    SHOW_ACTIVE: 'SHOW_ACTIVE'
};

export interface AbstractTodo {
    type: string;
    payload: any;
}

export interface AddTodoPayload {
    text: string;
    completed: boolean;
}

export interface AddTodo extends AbstractTodo {
    payload: AddTodoPayload;
}

export interface ToggleTodoPayload {
    index: number;
}

export interface ToggleTodo extends AbstractTodo {
    payload: ToggleTodoPayload;
}

export interface VisibilityFilterPayload {
    filter: string;
}

export interface VisibilityFilterTodo extends AbstractTodo {
    payload: VisibilityFilterPayload;
}

export function addTodo(obj: AddTodoPayload): AddTodo {
    return {
        type: ADD_TODO,
        payload: {
            text: obj.text,
            completed: obj.completed
        }
    };
}

export function toggleTodo(index: number): ToggleTodo {
    return {
        type: TOGGLE_TODO,
        payload: {
            index: index
        }
    };
}

export function setVisibilityFilter(filter: string): VisibilityFilterTodo {
    return {
        type: SET_VISIBILITY_FILTER,
        payload: {
            filter: filter
        }
    }
}
