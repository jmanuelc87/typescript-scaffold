import * as React from "react";
import { FilterLink } from "./FilterLink";
import { VisibilityFilter } from "../actions/actions";

export class Footer extends React.Component {
  render() {
    return (
      <p>
        Show: <FilterLink filter={VisibilityFilter.SHOW_ALL}>All</FilterLink>
        {", "}
        <FilterLink filter={VisibilityFilter.SHOW_ACTIVE}>Active</FilterLink>
        {", "}
        <FilterLink filter={VisibilityFilter.SHOW_COMPLETED}>
          Completed
        </FilterLink>
      </p>
    );
  }
}
