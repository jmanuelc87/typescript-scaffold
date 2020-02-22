import * as React from 'react';

export interface TodoProps {
    text: string;
    completed: boolean;
    onClick: (event?: React.MouseEvent) => void;
}

export class Todo extends React.Component<TodoProps> {

    render() {
        return <>
            <li onClick={this.props.onClick}
                style={{
                    textDecoration: this.props.completed ? 'line-through' : 'none'
                }}>
                {this.props.text}
            </li>
        </>
    }
}