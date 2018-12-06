class App extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Board />
        );
    }
}

class Board extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        );
    }
}
class Card extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Shape />
        );
    }
}
class Shape extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className={`Color Shape Number Fill`}></div>
        );
    }
}

ReactDOM.render(
    <App/>,
    document.getElementById("root")
);