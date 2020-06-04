import * as React from 'react';
import { connect } from "react-redux";

import Header from './Header';
import { AppState } from "../store";
import {todosLoaded} from "../store/todo/actions";

interface AppProps {
    todosLoaded: typeof todosLoaded;
    state: AppState;
    thunkSendMessage: any;
}

const App = () => {
  return (
    <div>
      <Header/>
      <div className="view">Some todos should be here23</div>
    </div>
  );
};


const mapStateToProps = (state: AppState) => (state);

export default connect(
    mapStateToProps,
    { todosLoaded }
)(App);
