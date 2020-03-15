import React from 'react'
import styled from 'styled-components'
import GlobalStyle from './themes/GlobalStyle.js'
import About from './About.js'
import Projects from './Projects.js'
import made from './pics/made.png'
import med from './pics/med.jpg'
import peng from './pics/peng.png'
import phind from './pics/phind.png'
import blood from './pics/blood.png'

const AppWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding 75px 0 0 0;
`
const ProjsWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    padding: 0 50px 0 50px;
    width: 100%;
`
const ProjsHeading = styled.h1`
    color: rgb(182, 185, 186);
`
const CntctWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: rgb(236, 236, 236, 0.75);
    width: 350px;
    height: auto;
    padding 15px;
    border-radius: 10px;
    margin: 0 auto 50px auto;
    > a {
        margin: 10px;
        color: #000000;
        text-decoration: none;

        :hover {
            cursor: pointer;
            font-weight: bold;
        }
    }
`;
const CntctHeading = styled.h1`
    color: rgb(182, 185, 186);
`;

export default function App(props){
    return(
        <AppWrapper>
            <GlobalStyle />
            <About />
            <ProjsHeading>My Dev Work</ProjsHeading>
            <ProjsWrapper>
                <Projects 
                    link="http://set-phinder.surge.sh"
                    title="P*H*I*N*D*E*R"
                    img={phind}
                />
                <Projects
                    link="http://made-solar-app.herokuapp.com"
                    title="Solar Rep App"
                    img={made}
                />
                <Projects
                    link="http://herb-site.surge.sh"
                    title="MotherMedicinal Herb DataBase"
                    img={med}
                />
                <Projects
                    link="https://github.com/BeZen13/Penguin-Party"
                    title="Console-RPG PengiunParty!"
                    img={peng}
                />
                <Projects
                    link="https://github.com/BeZen13/gestational"
                    title="One Blood: Gestational Diabetes Tracker"
                    img={blood}
                />    
            </ProjsWrapper>
            <CntctHeading>Find Me</CntctHeading>
            <CntctWrapper>
                <a href="mailto:samuelbetzen@gmail.com">Email</a>
                <a href="https://www.linkedin.com/in/samuel-betzen-30b8b3140/">LinkedIn</a>
                <a href="https://github.com/BeZen13">GitHub</a>
            </CntctWrapper>
        </AppWrapper>
    )
}

