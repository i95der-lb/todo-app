import { useState, useEffect } from 'react'
import {
    Checkbox,
    List,
    Button,
    Col
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
}

const ListToDosFunction = (props: MyProps) => {
    const [todos, setTodos] = useState<ToDos>([])
    const getIndex = (text: string) => {
        return todos.findIndex((todo: ToDo) => todo.text === text)
    }
    const onChange = (checkedValue: any) => {
        console.log({ checkedValue })
        let indexOfToDo = getIndex(checkedValue.target.value)
        let oldToDos: ToDos = todos
        let oldCompletedValue = oldToDos[indexOfToDo].completed
        let newToDo: ToDo = {
            text: checkedValue.target.value,
            completed: !oldCompletedValue
        }
        oldToDos[indexOfToDo] = newToDo
        setTodos(oldToDos)
        console.log({ onChange: todos })
    }
    const checkIfCompleted = (text: string) => {
        let i = getIndex(text)
        console.log({ checkIfCompleted: todos, return: todos[i].completed })
        if (i !== -1) return todos[i].completed
        else return false
    }
    const clearList = () => {
        setTodos([])
        props.resetData()
    }
    useEffect(() => {
        let currentToDos = todos.map(todo => todo.text)
        if (currentToDos.sort().join(',') !== props.data.sort().join(',')) {
            let newToDosText = props.data.filter((todo: string) => !todos.some(x => x.text === todo))
            let newToDos: ToDos = newToDosText.map(text => ({ text, completed: false }))
            setTodos([...todos, ...newToDos])
        }

    }, [props.data, todos])
    return (
        <CustomDiv>
            <List
                size="large"
                grid={{
                    gutter: 16,
                    column: 2
                }}
                dataSource={todos}
                renderItem={item => {
                    return (
                        <List.Item>
                            <Col span={4}>
                                <Checkbox
                                    onChange={onChange}
                                    value={item.text}
                                >
                                    <CustomText checked={checkIfCompleted(item.text)}>
                                        {item.text}
                                    </CustomText>
                                </Checkbox>
                            </Col>

                        </List.Item>
                    )
                }}
            />
            <Button type="primary" onClick={clearList}>Clear ToDo List</Button>
        </CustomDiv>
    )
}

export default ListToDosFunction