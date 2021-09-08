import styled from 'styled-components'
import { Typography, Layout } from 'antd'
import { TextProps } from 'antd/lib/typography/Text'
const { Header, Content } = Layout;
const { Title, Text } = Typography

interface CustomProps extends TextProps {
    checked: boolean
}
export const CustomText = styled((props: CustomProps) => <Text {...props}/>)`
    text-decoration: ${(props: CustomProps) => {
        return props.checked ? 'line-through' : 'none'
    }};
`
export const CustomTitle = styled(Title)`
background-color: #c8e0d4;
text-align: center;
height: 100%;
font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
`

export const CustomHeader = styled(Header)`
padding: 0%;

`
export const CustomContent = styled(Content)`
background-color: #c8e0d4;
text-align: center;
padding-top: 10%;
`

export const CustomDiv = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #c8e0d4;
    bottom: 0;
`