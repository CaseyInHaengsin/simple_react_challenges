import React, { useState } from 'react'
import styled from 'styled-components'

export default () => {

    const [count, setCount] = useState(0)
    return (
        
        <Container>  
            <Heading>{count}</Heading>
            <Button onClick={() => setCount(count +1)}>+</Button>
            <Button onClick={() => setCount(count -1)}>-</Button>
            <Button onClick={() => setCount(0)}>Reset</Button>
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

