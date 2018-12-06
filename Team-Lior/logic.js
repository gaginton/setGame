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
                <Card color="red" symbol="oval" number="1" shade="solid"/>
                <Card color="red" symbol="oval" number="3" shade="solid" />
                <Card color="green" symbol="diamond" number="1" shade="solid" />
                <Card color="purple" symbol="squiggle" number="1" shade="open" />
                <Card color="red" symbol="oval" number="3" shade="open" />
                <Card color="green" symbol="squiggle" number="2" shade="open"  />
                <Card color="green" symbol="oval" number="3" shade="stripe"/>
                <Card color="purple" symbol="diamond" number="3" shade="open" />
                <Card color="purple" symbol="oval" number="2" shade="open" />
                <Card color="red" symbol="oval" number="2" shade="stripe" />
                <Card color="red" symbol="squiggle" number="3" shade="stripe" />
                <Card color="green" symbol="oval" number="3" shade="solid" />
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
            <Shape color={this.props.color} symbol={this.props.color} number={this.props.number} shade={this.props.shade}/>
        );
    }
}

class Shape extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className={`card ${this.props.color} ${this.props.symbol} ${this.props.number} ${this.props.shade}`}></div>
        );
    }
}

ReactDOM.render(
    <App/>,
    document.getElementById("root")
);