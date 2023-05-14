import React from 'react';
import { createRoot } from 'react-dom/client';


const container = document.getElementById('app');
const root = createRoot(container);

function getNum() {
    return Math.floor(Math.random() * 10) + 1;
}

class NumPicker extends React.Component {
    render() {
        const num = getNum();
        return (
            <div>
                <h1>Your number is {num} </h1>
                <p>{num === 7 ? 'Congrats!' : 'Unlucky!'}</p>
                {
                    num === 7
                    ? <img src="https://media1.tenor.com/images/f3321d0fc2b66c005cae93f9f0846b7c/tenor.gif?itemid=5498264" />
                    : null}
            </div>

        )
    }
}

root.render(<NumPicker />, document.getElementById('app'));