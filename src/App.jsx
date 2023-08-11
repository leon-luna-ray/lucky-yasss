import React from 'react';
import { createRoot } from 'react-dom/client';
import Game from './components/Game'
import './assets/styles/main.css'

const container = document.getElementById('app');
const root = createRoot(container);


const App = () => {

    return (
        <>
            <Game />
        </>
    )
}

root.render(<App />, document.container);
