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
                    ? <img src="https://tenor.com/view/rihanna-work-yaas-dance-dress-gif-23368297" />
                    : null}
            </div>

        )
    }
}

ReactDOM.render(<NumPicker />, document.getElementById('app'));
