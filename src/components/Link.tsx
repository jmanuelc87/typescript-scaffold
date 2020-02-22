import * as React from "react";

export interface LinkProps {
  active: boolean;
  children: any;
  onClick: () => void;
}

export default class Link extends React.Component<LinkProps> {
  render() {
    if (this.props.active) {
      return <span>{this.props.children}</span>;
    }

    return (
      <a
        href=""
        onClick={e => {
          e.preventDefault();
          this.props.onClick();
        }}
      >
        {this.props.children}
      </a>
    );
  }
}
