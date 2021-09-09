import { Component } from 'react'
import AddToDo from './AddToDo'
import ListToDos from './ListToDos';
import {
    Row,
    Col,
    Layout
} from 'antd'
import { CustomContent, CustomHeader, CustomTitle } from './CustomText.style';

type MyProps = {
};
type MyState = {
    data: string[]
};

export default class AppContainer extends Component<MyProps, MyState> {
    state: MyState = {
        data: []
    };
    handleToDos = (text: string) => {
        this.setState({ data: [...this.state.data, text] })
    }
    resetToDos = () => {
        this.setState({ data: [] })
    }
    render() {
        console.log({ AppContainerState: this.state })
        return (
            <>
                <Layout>
                    <Row>
                        <Col span={12}>
                            <CustomHeader>
                                <CustomTitle>Add ToDo</CustomTitle>
                            </CustomHeader>
                        </Col>
                        <Col span={12}>
                            <CustomHeader>
                                <CustomTitle>All ToDos</CustomTitle>
                            </CustomHeader>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={12} >
                            <CustomContent>
                                <AddToDo onAddingNewToDo={this.handleToDos} />
                            </CustomContent>
                        </Col>
                        <Col span={12}>
                            <CustomContent>
                                <ListToDos data={this.state.data} resetData={this.resetToDos} />
                            </CustomContent>
                        </Col>
                    </Row>
                </Layout>
            </>
        );
    }
}

