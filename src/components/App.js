import { connect } from "react-redux";

import { incrementValue, decrementValue } from "../actions";

const App = ({count, incrementValue, decrementValue}) => (
  <div>
    <button onClick={incrementValue}>+</button>
    {count}
    <button onClick={decrementValue}>-</button>
  </div>
);

const mapStateToProps = state => {
  return { count: state };
};

export default connect(mapStateToProps, { incrementValue, decrementValue })(App);
