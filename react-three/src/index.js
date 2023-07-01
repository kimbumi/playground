import {createRoot} from 'react-dom/client'
import './style.css'
import App from './App'
import Test from './Test'


const root = createRoot(document.querySelector('#root'))
root.render(
    <>
        <App clickerCount={3}>
            <h1>Clicker</h1>
        </App>
        <Test></Test>
    </>
)