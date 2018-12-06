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
        this.counter = 0;
        this.getColor = this.getColor.bind(this)
        this.color1 = "",
        this.color2 = "",
        this.color3 = ""
    }
    getColor(e) {
        this.counter++;
        var str = e.target.className;
        var arr = str.split(" ");
        if (this.counter === 0) {
            color1 = arr[1]
        } else if (this.counter === 1) {
            color2 = arr[1]
        } else if (this.counter === 2) {
            color3 = arr[1];
            function checkColor()
            this.counter = 0
            this.color1 = "";
            this.color2 = "";
            this.color3 = "";
        } 
    }

    render() {
        return (
            <div>
                <Card handleClick={this.getColor} color="red" symbol="oval" number="1" shade="solid" />
                <Card handleClick={this.getColor} color="red" symbol="oval" number="3" shade="solid" />
                <Card handleClick={this.getColor} color="red" symbol="diamond" number="1" shade="solid" />
                <Card handleClick={this.getColor} color="red" symbol="square" number="1" shade="open" />
                <Card handleClick={this.getColor} color="green" symbol="oval" number="3" shade="open" />
                <Card handleClick={this.getColor} color="green" symbol="square" number="2" shade="open" />
                <Card handleClick={this.getColor} color="green" symbol="oval" number="3" shade="stripe" />
                <Card handleClick={this.getColor} color="green" symbol="diamond" number="3" shade="open" />
                <Card handleClick={this.getColor} color="purple" symbol="oval" number="2" shade="open" />
                <Card handleClick={this.getColor} color="purple" symbol="oval" number="2" shade="stripe" />
                <Card handleClick={this.getColor} color="purple" symbol="square" number="3" shade="stripe" />
                <Card handleClick={this.getColor} color="purple " symbol="oval" number="3" shade="solid" />
            </div>
        );
    }
}

class Card extends React.Component {
    constructor(props) {
        super(props);
        this.select = this.select.bind(this)
        this.state = {
            color: "",
            symbol: "",
            number: "",
            shade: "",
        }
    }
    select(e) {
        this.props.handleClick(e)
    }
    render() {
        return (
            <div onClick={this.select}>
                <Shape color={this.props.color} symbol={this.props.symbol} number={this.props.number} shade={this.props.shade} />
            </div>
        );
    }
}

class Shape extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div style={{ backgroundColor: this.props.color }} className={`card ${this.props.color} ${this.props.symbol} ${this.props.number} ${this.props.shade}`}></div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById("root")
);