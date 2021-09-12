import { useState } from 'react'
import AddToDoFunction from './AddToDoFunction'
import ListToDosFunction from './ListToDosFunction';
import {
    Row,
    Col,
    Layout
} from 'antd'
import { CustomContent, CustomHeader, CustomTitle } from './CustomText.style';


const AppContainerFunction = () => {
    const [data, setData] = useState<string[]>([])
    const handleToDos = (text: string) => {
        setData([...data, text])
    }
    const resetToDos = () => {
        setData([])
    }
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
                            <AddToDoFunction onAddingNewToDo={handleToDos} />
                        </CustomContent>
                    </Col>
                    <Col span={12}>
                        <CustomContent>
                            <ListToDosFunction data={data} resetData={resetToDos} />
                        </CustomContent>
                    </Col>
                </Row>
            </Layout>
        </>
    )
}

export default AppContainerFunction