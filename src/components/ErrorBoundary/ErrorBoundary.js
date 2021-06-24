import React, { Component } from "react";

class ErrorBoundary extends Component() {
  state = { hasError: false };
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.hello from error boundaries</h1>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
