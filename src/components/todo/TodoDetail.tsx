import * as React from 'react';
import {ITodo, TodoUnsaved} from '../../store/todo/types';
import {creatorCancel, creatorSave} from "../../store/todo/actions";
import {Button, Checkbox, Form, Input, Modal, InputNumber, Descriptions, Tag} from 'antd';
import {useEffect, useState} from "react";
import TagsInput from 'react-tagsinput';
import 'react-tagsinput/react-tagsinput.css';


export const TodoDetail: React.FC<{todo: ITodo, isOpen: boolean, onClose: () => void}> = (
{
    isOpen,
    todo,
    onClose,
}) => {

    return (
        <Modal
            visible={isOpen}
            title={todo.title}
            onOk={onClose}
        >
            <Descriptions title="" layout="vertical">
                <Descriptions.Item label="Date">{todo.title}</Descriptions.Item>

                {todo.priority ?
                    <Descriptions.Item label="Priority">{todo.priority}</Descriptions.Item> : null}

                <Descriptions.Item label="Description" span={3}>{todo.description}</Descriptions.Item>

                <Descriptions.Item label="Tags">
                    {(todo.tags || []).map((tag, ind) => <Tag closable={false} key={ind}>{tag}</Tag>)}
                </Descriptions.Item>

                <Descriptions.Item label="Done">{todo.isDone ? 'Yes' : 'No'}</Descriptions.Item>
            </Descriptions>,
        </Modal>
    );
};




export default TodoDetail;
