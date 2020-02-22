import React from "react";
import { connect } from "react-redux";
import { addTodo } from "../actions/actions";

class AddTodo extends React.Component<any, any> {

  constructor(props) {
    super(props);
    this.state = {
      input: ""
    };
  }

  handleAddTodo = () => {
    this.props.addTodo({ text: this.state.input });
    this.setState({ input: "" });
  }

  updateInput = input => {
    this.setState({ input: input });
  }

  render() {
    return (
      <div>
        <input
          type="text"
          onChange={e => this.updateInput(e.target.value)}
          value={this.state.input}
        />
        <button className="add-todo" onClick={this.handleAddTodo}>Add todo</button>
      </div>
    );
  }
}

export default connect(null, { addTodo })(AddTodo);
