import * as React from 'react';
import {Todo} from '../../store/todo/types';
import {creatorSave} from "../../store/todo/actions";


interface TodoCreatorProps {
    isTodoSavePending: boolean;
    save: typeof creatorSave;
}

const TodoCreator: React.FunctionComponent<TodoCreatorProps> = (props) => {

   return <div>
        <div>
            form here
        </div>
        <button>{props.isTodoSavePending ? '...Saving' : 'Save'}</button>
    </div>;
};

export default TodoCreator;
