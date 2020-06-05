import * as React from 'react';
import { TodoUnsaved} from '../../store/todo/types';
import {creatorCancel, creatorSave} from "../../store/todo/actions";
import {Button, Checkbox, Form, Input, Modal, InputNumber} from 'antd';
import {useEffect, useState} from "react";
import TagsInput from 'react-tagsinput';
import 'react-tagsinput/react-tagsinput.css';


interface TodoCreatorProps {
    isOpen: boolean;
    isSavePending: boolean;
    onCancel: typeof creatorCancel;
    onSave: typeof creatorSave;
}


interface TagsInputWrapProps {
    value?: string[];
    onChange?: (value: string[]) => void;
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





// const TodoCreator2: React.FunctionComponent<TodoCreatorProps> = (props: TodoCreatorProps) => {
//
//     const [todo, setTodo] = useState(() => new TodoUnsaved);
//
//     useEffect(
//         () => { !props.isOpen && setTodo(new TodoUnsaved) }, // reset todo after Creator was closed
//         [props.isOpen]
//     );
//
//     const [form] = Form.useForm();
//
//     return <Modal
//         visible={props.isOpen}
//         title="TODO Creator"
//         okText='Save'
//         onOk={() => props.save(todo)}
//         onCancel={props.cancel}
//         okButtonProps={{loading: props.isSavePending}}
//     >
//         <Form
//             labelCol={{ span: 8 }}
//             wrapperCol={{ span: 16 }}
//             name="basic"
//             initialValues={{ remember: true }}
//             // onFinish={onFinish}
//             // onFinishFailed={onFinishFailed}
//         >
//             <Form.Item
//                 label="Username"
//                 name="username"
//                 rules={[{ required: true, message: 'Please input your username!' }]}
//             >
//                 <Input />
//             </Form.Item>
//
//             <Form.Item
//                 label="Password"
//                 name="password"
//                 rules={[{ required: true, message: 'Please input your password!' }]}
//             >
//                 <Input.Password />
//             </Form.Item>
//
//             <Form.Item {...tailLayout} name="remember" valuePropName="checked">
//                 <Checkbox>Remember me</Checkbox>
//             </Form.Item>
//
//             <Form.Item {...tailLayout}>
//                 <Button type="primary" htmlType="submit">
//                     Submit
//                 </Button>
//             </Form.Item>
//         </Form>
//     </Modal>
// };

export default TodoCreator;
