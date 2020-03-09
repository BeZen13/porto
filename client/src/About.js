import React from 'react'
import styled from 'styled-components'


//import samshead from "../pics/headshot.jpg"


const AboutWrapper = styled.div`
    width: 300px;
    height: 450px; 
    box-shadow: 5px 5px 15px #000000;
    margin: 0 auto 0 auto;
    background-color: rgb(236, 236, 236, 0.75)
    border-radius: 10px
`;
const Head = styled.img`
    position: relative;
    top: 0px;
    left: -20px;
    max-width: 120%;
    max-height: 120%;
`;
const HeadFrame = styled.div`
    position: relative;
    top: 30px;
    border-radius: 50%;
    overflow: hidden;
    width: 175px;
    height: 175px;
    margin: 0 auto auto 0 auto;
`;
const Name = styled.h1`
    position: relative;
    top: 60px;
    text-align: center;
    margin: 0 auto 0 auto;
`;
const JobTitle = styled.h3`
    position: relative;
    top: 70px;
    text-align: center;
    margin: 0 auto 0 auto;
`;
const Skills = styled.div`
    display: flex;
    disply-direction: column;
    position: relative;
    top: 70px;
`

export default function About(props){
    return(
        <AboutWrapper>
            <HeadFrame>
                <Head />
            </HeadFrame>
            <Name>Samuel Joseph Betzen</Name>
            <JobTitle>Full Stack Software Engineer</JobTitle>
            <Skills>
                <ul>
                    <li>JavaScript</li>
                    <li>React.JS</li>
                    <li>Node.JS</li>
                    <li>HTML</li>
                    <li>CSS</li>
                </ul>
                <ul>
                    <li>Express</li>
                    <li>JSON</li>
                    <li>GIT</li>
                    <li>Mongoose</li>
                    <li>MongoDB</li>
                </ul>
            </Skills>
        </AboutWrapper>
    )
}