import React from "react";
import New from "./New";
import Popular from "./Popular";

export default function withWrapper(Component) {
  return class extends React.Component {
    static get displayName() {
      const name = Component.displayName ||
        Component.name || 'Component';
      return `WithWrapper(${name})`;
    }

    render() {
      if (this.props.views > 1000) {
        return (
          <Popular>
            <Component {...this.props} />
          </Popular>
        );
      }
      if (this.props.views < 100) {
        return (
          <New>
            <Component {...this.props} />
          </New>
        );
      }
      return (
        <Component {...this.props} />
      )
    }
  }
}