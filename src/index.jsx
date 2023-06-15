import {createRoot} from 'react-dom/client'
import App from './App'
import './index.scss'

const root = document.getElementById('root');
console.log(root);
const rootElement = createRoot(root);

rootElement.render(<App/>)