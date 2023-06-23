import {createRoot} from 'react-dom/client'
import './style.css'
import App from './App'

const root = createRoot(document.querySelector('#root'))

root.render(
    <>
        <App clickerCount={2}>
            <h1>Test</h1>
        </App>
    </>
)