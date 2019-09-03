import React from 'react'
import styled from 'styled-components'
import { Row, Col } from 'react-bootstrap'

const MainTitle = styled.h1`
    display: inline-block;
    color: #50085d;
    font-weight: 700;
    font-size: 34px;
    margin-top: 12px;
    font-family: sans-serif;
    text-transform: uppercase;
`

const PlayIcon = styled.i`
    display: inline-block;
    width: 0; 
    height: 0;
    border: 20px solid transparent;
    border-left-color: #50085d;
    border-right: 0;
    margin: 12px 25px;
`

const TitleBox = styled.div`
    background-color: #00c308;
    max-width: 300px;
    margin: 0 auto;
    height: 60px;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
`
const SearchBox = styled.div`
    border: 2px solid #00c308;
    max-width: 300px;
    margin: 0 auto;
    height: 60px;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
    overflow: hidden;
`
const SearchContainer = styled.div`
    padding-top: 25vh;
`

const Input = styled.input`
    color: #fff;
    width: 78%;
    height: 100%;
    background: transparent;
    border: 0;
    display: inline-block;
    font-size: 16px;
    padding: 0 10px;
`

const Button = styled.button`
    font-size: 14px;
    padding: 0;
    background-color: transparent;
    display: inline-block;
    width: 22%;
    border: 0;
    color: #00c308;
    height: 100%;
    text-transform: uppercase;
    font-family: sans-serif;
    font-weight: 600;
`



function Search () {
    return (
        <SearchContainer>
            <TitleBox>
                <Row>
                    <Col bsPrefix='col-3'>
                        <PlayIcon />
                    </Col>
                    <Col>
                        <MainTitle>
                            Seu Tubo
                        </MainTitle>
                    </Col>
                </Row>
            </TitleBox>
            <SearchBox>
                <Input onChange={() => alert("change")} placeholder='o que você quer assitir?' type="search" name="search" />
                <Button onClick={() => alert('@TODO search submit')}> Buscar </Button>
            </SearchBox>
        </SearchContainer>
    )
}

export default Search



