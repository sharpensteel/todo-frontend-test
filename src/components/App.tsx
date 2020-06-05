import * as React from 'react';
import {connect} from "react-redux";

import Header from './Header';
import {AppState} from "../store";
import {todosLoaded} from "../store/todo/actions";
import TodoCreator from "./todo/TodoCreator";

interface AppProps {
    todosLoaded: typeof todosLoaded;
    state: AppState;
    thunkSendMessage: any;
}

class App extends React.PureComponent<AppProps> {

    constructor(props: AppProps) {
        super(props);
    }

    render(): React.ReactNode {
        let {state} = this.props;

        return <div>
            <Header/>

            <div className="view">Some todos should be here23</div>

            {this.props.state.isCreatorOpened ?
                <TodoCreator isTodoSavePending={!!state.todoSavePending} save={}/> : null
            }


        </div>;
    }

};


export default connect(
    (state: AppState) => ({state}),
    {todosLoaded}
)(App);
