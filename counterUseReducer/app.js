import React, { useReducer } from 'react'
import styled from 'styled-components'


const initialState = {count: 0}

function reducer(state, action){
    switch(action.type){
        case 'add':
            return {
                count: state.count + action.incrementBy
            }
        case 'minus':
            return {
                count: state.count + action.incrementBy
            }
        case 'reset':
            return {
                count: initialState.count
            }
        default:
            throw new Error('error, yo')

    }
}

export default () => {
    const [state, dispatch] = useReducer(reducer, initialState)
    return (
        <Container>  
            <Heading>{state.count}</Heading>
            <Button onClick={() => {dispatch({type: 'add', incrementBy: 10})}}>+</Button>
            <Button onClick={() => {dispatch({type: 'minus',  incrementBy: -10})}}>-</Button>
            <Button onClick={() => {dispatch({type: 'reset'})}}>Reset</Button>
        </Container>
    )
}


const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    justify-items: center;
`

const Button = styled.button`
    height: 50px;
    width: 200px;
`

const Heading = styled.h2`
    height: 80px;
`