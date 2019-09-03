import React from 'react'
import styled from 'styled-components'

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

// Containers
import Search from './Search'


const Wrapper = styled.div`
    height: 100vh;
    width: 100vw;
    background-image: linear-gradient(#50085d,#420210);
`


function App () {
    return(
        <Wrapper>
            <Search />
        </Wrapper>
    )
}

export default App