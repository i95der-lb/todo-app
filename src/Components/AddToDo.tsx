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
                <Form
                    ref={this.form}
                    labelCol={{xs: {offset: 2, span: 2}, sm: {offset: 4, span: 4}, md: {offset: 6, span: 6}, lg: {offset: 8, span: 8}, xl: {offset: 4, span: 4}}}
                    wrapperCol={{xs: {span: 2}, sm: {span: 6}, md: {span: 8}, lg: {span: 10}, xl: {span: 12}}}
                    onFinish={this.onFinish}
                >
                    <Form.Item
                        label="New ToDo"
                        name="newToDo"
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item 
                    wrapperCol={{xs: {span: 4}, sm: {span: 6}, md: {span: 8}, lg: {span: 10}, xl: {offset: 8, span: 8}}}
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