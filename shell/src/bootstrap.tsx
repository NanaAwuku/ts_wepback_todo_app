import React from 'react'
import { createRoot } from 'react-dom/client'
import {App} from './App'
import 'bootstrap/dist/css/bootstrap.min.css';

import './index.scss'

const rootElement = document.getElementById('app')
if (!rootElement) throw new Error('Failed to find the root element')
const root = createRoot(rootElement as HTMLElement)
root.render(<App />)