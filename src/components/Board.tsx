import * as React from "react";

import "./Board.scss";

import { Square } from "./Square";

interface BoardState {
  xIsNext: boolean;
}

interface BoardProps {
  squares: Array<string>;
  onClick: (i: number) => void;
}

export class Board extends React.Component<BoardProps, BoardState> {
  constructor(props: any) {
    super(props);

    this.state = {
      xIsNext: true,
    };
  }

  private createSquare(i: number) {
    return (
      <Square
        index={this.props.squares[i]}
        onClick={() => this.props.onClick(i) }
      />
    );
  }

  private calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }

  render() {
    

    return (
        <table className="board">
          <tr>
            <td>{this.createSquare(0)}</td>
            <td>{this.createSquare(1)}</td>
            <td>{this.createSquare(2)}</td>
          </tr>
          <tr>
            <td>{this.createSquare(3)}</td>
            <td>{this.createSquare(4)}</td>
            <td>{this.createSquare(5)}</td>
          </tr>
          <tr>
            <td>{this.createSquare(6)}</td>
            <td>{this.createSquare(7)}</td>
            <td>{this.createSquare(8)}</td>
          </tr>
        </table>
    );
  }
}
