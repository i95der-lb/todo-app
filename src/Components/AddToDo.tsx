import { Component } from 'react'
import React from 'react'
import {
    Form,
    Input,
    Button,
} from 'antd'
import { FormInstance } from 'antd/es/form'
import { CustomDiv } from './CustomText.style'

type MyProps = {
    onAddingNewToDo: (data: string) => void
};
type MyState = {
};

export default class AddToDo extends Component<MyProps, MyState> {
    state: MyState = {
        
    };
    form = React.createRef<FormInstance>();
    onFinish = (values: { newToDo: string }) => {
        this.props.onAddingNewToDo(values.newToDo)
        this.form.current!.resetFields();
    }

    render() {
        return (
            <CustomDiv>
                {/* <Title>Add ToDo</Title> */}
                <Form
                    ref={this.form}
                    labelCol={{ span: 6 }}
                    wrapperCol={{ span: 12 }}
                    onFinish={this.onFinish}
                >
                    <Form.Item
                        label="New ToDo"
                        name="newToDo"
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item 
                    wrapperCol={{ offset: 8, span: 8 }}
                    >
                        <Button type="primary" htmlType="submit">
                            Add
                        </Button>
                    </Form.Item>
                </Form>
            </CustomDiv>
        );
    }
}