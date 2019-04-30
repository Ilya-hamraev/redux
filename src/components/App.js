import React, { Component } from "react";
import { connect } from "react-redux";
import { getSeriesRequest } from "../actions";
import { getSeries, getLoadingState, getError } from "../selectors";
import "../assets/normalizeCss/normalize.css";

class App extends Component {
  componentDidMount() {
    this.props.getSeriesRequest();
  }

  render() {
    const { series, loadingState, error } = this.props;
    console.log(this.props);
    if (loadingState === "loading") {
      return <div>загрузка</div>;
    }
    return <div>olol</div>;
  }
}

const mapStateToProps = state => ({
  loadingState: getLoadingState(state),
  error: getError(state),
  series: getSeries(state),
});

const mapDispatchToProps = {
  getSeriesRequest,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
