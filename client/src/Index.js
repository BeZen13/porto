import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import theme from './themes/theme.js'
import App from './App.js'

ReactDOM.render(
    <BrowserRouter>
        <ThemeProvider theme={ theme }>
            <App />
        </ThemeProvider>
    </BrowserRouter>,
    document.getElementById("root")
)