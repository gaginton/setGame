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
                <Card color="red" symbol="oval" number="1" shade="solid" />
                <Card color="red" symbol="oval" number="3" shade="solid" />
<<<<<<< HEAD
                <Card color="green" symbol="diamond" number="1" shade="solid" />
                <Card color="purple" symbol="squiggle" number="1" shade="open" />
                <Card color="red" symbol="oval" number="3" shade="open" />
                <Card color="green" symbol="squiggle" number="2" shade="open" />
                <Card color="green" symbol="oval" number="3" shade="stripe" />
                <Card color="purple" symbol="diamond" number="3" shade="open" />
=======
                <Card color="red" symbol="diamond" number="1" shade="solid" />
                <Card color="red" symbol="square" number="1" shade="open" />
                <Card color="green" symbol="oval" number="3" shade="open" />
                <Card color="green" symbol="square" number="2" shade="open" />
                <Card color="green" symbol="oval" number="3" shade="stripe" />
                <Card color="green" symbol="diamond" number="3" shade="open" />
>>>>>>> ab791e781a5184c51dc4212942cc7f5b8dbad6ed
                <Card color="purple" symbol="oval" number="2" shade="open" />
                <Card color="purple" symbol="oval" number="2" shade="stripe" />
                <Card color="purple" symbol="square" number="3" shade="stripe" />
                <Card color="purple" symbol="oval" number="3" shade="solid" />
            </div>
        );
    }
}

class Card extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            color: "",
            symbol: "",
            number: "",
            shade: "",
        }
    }


 


    render() {
        return (
<<<<<<< HEAD
            <Shape color={this.props.color} symbol={this.props.color} number={this.props.number} shade={this.props.shade} />
=======
            <div>
                <Shape color={this.props.color} symbol={this.props.symbol} number={this.props.number} shade={this.props.shade} />
            </div>
>>>>>>> ab791e781a5184c51dc4212942cc7f5b8dbad6ed
        );
    }
}

class Shape extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
<<<<<<< HEAD
            <div className={`card ${this.props.color} ${this.props.symbol} ${this.props.number} ${this.props.shade}`}></div>
=======
            <div style={{backgroundColor:this.props.color}} className={`card ${this.props.color} ${this.props.symbol} ${this.props.number} ${this.props.shade}`}></div>
>>>>>>> ab791e781a5184c51dc4212942cc7f5b8dbad6ed
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById("root")
);