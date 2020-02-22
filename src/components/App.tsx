import * as React from 'react';
import AddTodo from './AddTodo';
import VisibleTodoList from './VisibleTodoList';
import { Footer } from './Footer';

export class App extends React.Component {

    render() {
        return <>
            <AddTodo />
            <VisibleTodoList />
            <Footer />
        </>;
    }
}
