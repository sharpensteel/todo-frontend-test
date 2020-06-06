import * as React from 'react';
import {ITodo} from '../../store/todo/types';
import {Button, Modal, Tag} from 'antd';
import 'react-tagsinput/react-tagsinput.css';


export const TodoDetail: React.FC<{todo: ITodo, isOpen: boolean, onClose: () => void}> = (
{
    isOpen,
    todo,
    onClose,
}) => {

    return (isOpen &&
        <Modal
            visible={true}
            title={todo.title}
            onCancel={onClose}
            footer={[
                <Button key="submit" type="primary" onClick={onClose}>
                    OK
                </Button>,
            ]}
        >
            <table className='todo__detail__table'>
                <tbody>
                    <tr>
                        <td>Description:</td>
                        <td className='todo__detail__description'>{todo.description}</td>
                    </tr>
                    <tr>
                        <td>Created at:</td>
                        <td>{todo.createdAt && todo.createdAt.toLocaleString()}</td>
                    </tr>

                    {todo.priority ?
                        <tr>
                            <td>Priority:</td>
                            <td>{todo.priority}</td>
                        </tr> : null
                    }
                    {todo.tags && todo.tags.length ?
                        <tr>
                            <td>Tags:</td>
                            <td>
                                {todo.tags.map((tag, ind) =>
                                    <Tag closable={false} key={ind}>{tag}</Tag>)}
                            </td>
                        </tr> : null
                    }
                    <tr>
                        <td>Done:</td>
                        <td>{todo.isDone ? 'Yes' : 'No'}</td>
                    </tr>
                </tbody>
            </table>
        </Modal>
    );
};

export default TodoDetail;
