import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import theme from './themes/theme'
import App from './App.js'

ReactDOM.render(
    <BrowserRouter>
        <themeProvider theme={ theme }>
            <App />
        </themeProvider>
    </BrowserRouter>,
    document.getElementById("root")
)