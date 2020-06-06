import * as React from 'react';
import { TodoUnsaved} from '../../store/todo/types';
import {creatorCancel, creatorSave} from "../../store/todo/actions";
import {Form, Input, Modal, InputNumber} from 'antd';
import {useEffect} from "react";
import TagsInput from 'react-tagsinput';
import 'react-tagsinput/react-tagsinput.css';


interface TodoCreatorProps {
    isOpen: boolean;
    isSavePending: boolean;
    onCancel: typeof creatorCancel;
    onSave: typeof creatorSave;
}

export const TodoCreator: React.FC<TodoCreatorProps> = (
{
    isOpen,
    isSavePending,
    onCancel,
    onSave,
}) => {
    const [form] = Form.useForm();

    useEffect(
        () => { isOpen && form.resetFields(); }, // reset todo if Creator was open
        [isOpen]
    );

    const onModalOk = async () => {
        let values: TodoUnsaved;
        try{
            values = await form.validateFields() as TodoUnsaved;
        }
        catch(info){
            let errorText = info.errorFields.map(ef => (ef.errors || []).join("\n")).join("\n");
            alert('Form Validation Error: ' + errorText);
            throw info;
        }
        values && await onSave(values);
    }

    return (
        <Modal
            visible={isOpen}
            title="Create a TODO"
            okText="Save"
            onCancel={onCancel}
            okButtonProps={{loading: isSavePending}}
            onOk={onModalOk}

        >
            <Form
                form={form}
                layout="vertical"
                initialValues={{tags: []}}
            >
                <Form.Item name="title" label="Title" required>
                    <Input/>
                </Form.Item>

                <Form.Item name="description" label="Description" required>
                    <Input.TextArea/>
                </Form.Item>

                <Form.Item name="priority" label="Priority" >
                    <InputNumber/>
                </Form.Item>

                <Form.Item name="tags" label="Tags" >
                    <TagsInput/>
                </Form.Item>

            </Form>
        </Modal>
    );
};

export default TodoCreator;
