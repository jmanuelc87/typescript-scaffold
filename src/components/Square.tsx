import * as React from 'react';

import './Square.scss';

interface SquareProps {
    index: string,
    onClick: () => void
}

interface SquareState {
    value: string
}

export class Square extends React.Component<SquareProps, SquareState> {

    constructor(props: SquareProps) {
        super(props);

        this.state = {
            value: ''
        };
    }

    render() {
        return <button className="square" onClick={() => this.props.onClick()}>{this.props.index}</button>
    }
}
