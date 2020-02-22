import * as React from "react";
import { Todo } from "./Todo";
import { AddTodoPayload } from "../actions/actions";

export interface TodoListProps {
  todos: Array<AddTodoPayload>;
  onTodoClick: (index: number) => void;
}

export default class TodoList extends React.Component<TodoListProps> {
  render() {
    return (
      <ul>
        {this.props.todos && this.props.todos.length
          ? this.props.todos.map((item, index) => {
              return <Todo
                key={index}
                completed={item.completed}
                text={item.text}
                onClick={() => {
                  this.props.onTodoClick(index);
                }}
              />
            })
          : "No items in the list!"}
      </ul>
    );
  }
};