import React from 'react'
import styled from 'styled-components'

const ProjWrapper = styled.div`
    width: 350px;
    height: 300px;
    box-shadow: 5px 5px 15px #000000;
    background-color: rgb(236, 236, 236, 0.75)
    border-radius: 10px;
    overflow: hidden;
    margin: 0 10px 10px 30px;
`;
const ProjTitle = styled.h2`
    text-align: center;
    color: white;

`;
const ProjImg = styled.img`
    max-width: 100%;
    width: auto;
    height: auto:
`;
const ProjLink = styled.a`
    color: #000000;
    text-decoration: none;
    color: white;
`

export default function Projects(props){
    return(
        <ProjWrapper>
            <ProjTitle>
                <ProjLink
                    href={props.link}
                    target="_blank"
                    rel="noopener noreferrer"
                >{props.title}</ProjLink>
            </ProjTitle>
            <ProjImg src={props.img} />
        </ProjWrapper>
    )
}