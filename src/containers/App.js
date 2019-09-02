import React from 'react'
import styled from 'styled-components'

const Button = styled.div`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0 1em;
  padding: 0.25em 1em;
`

const Title = styled.h1`
    color: #f00;
    font-size: 26px;
    font-family: sans-serif;
    text-transform: uppercase;
`

function App () {
    return(
        <Title>
            Seu Tubo
        </Title>
    )
}

export default App