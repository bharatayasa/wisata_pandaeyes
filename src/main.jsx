import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './style/style.css'
import ScrollToTop from './components/ScrollToTop.jsx'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
	<BrowserRouter>
		<ScrollToTop />
		<App />
	</BrowserRouter>
)
