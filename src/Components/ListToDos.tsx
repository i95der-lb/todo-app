import { Component } from 'react'
import {
    Checkbox,
    List, 
    Button
} from 'antd'
import { CustomText, CustomDiv } from './CustomText.style'

interface ToDo {
    text: string,
    completed: boolean
}

interface ToDos extends Array<ToDo> { }

type MyProps = {
    data: string[];
    resetData: () => void;
};
type MyState = {
    todos: ToDos;
    checkedToDos: string[];
};



export default class ListToDos extends Component<MyProps, MyState> {
    state: MyState = {
        checkedToDos: [],
        todos: this.props.data.map((todo: string) => {
            return { text: todo, completed: false }
        })
    };
    componentDidUpdate(prevProps: MyProps) {
        if (prevProps !== this.props) {
            this.setState({
                todos: this.props.data.map((todo: string) => {
                    return { text: todo, completed: false }
                })
            })
        }
    }
    getIndex = (text: string) => {
        return this.state.todos.findIndex((todo: ToDo) => todo.text === text)
    }
    onChange = (checkedValue: any) => {
        console.log({checkedValue})
        let indexOfToDo = this.getIndex(checkedValue.target.value)        
        let oldToDos : ToDos = this.state.todos
        let oldCompletedValue = oldToDos[indexOfToDo].completed
        let newToDo : ToDo = {
            text: checkedValue.target.value,
            completed: !oldCompletedValue
        }
        oldToDos[indexOfToDo] = newToDo
        this.setState({ todos: oldToDos })
        console.log({ListState: this.state})
    }
    checkIfCompleted = (text: string) => {
        let i = this.getIndex(text)
        return this.state.todos[i].completed
    }
    clearList = () => {
        this.setState({ todos: []})
        this.props.resetData()
    }
    render() {
        return (
            <CustomDiv>
                {/* <Title>All ToDos</Title> */}
                <List
                    size="large"
                    // bordered
                    dataSource={this.state.todos}
                    renderItem={item => {
                        return(
                        <List.Item>
                            <Checkbox
                                onChange={this.onChange}
                                value={item.text}
                            >
                                <CustomText checked={this.checkIfCompleted(item.text)}>
                                    {item.text}
                                </CustomText>
                            </Checkbox>
                        </List.Item>
                    )}}
                />
                <Button type="primary" onClick={this.clearList}>Clear ToDo List</Button>
            </CustomDiv>
        );
    }
}