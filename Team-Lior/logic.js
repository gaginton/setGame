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
        if (e.target.classList.contains("card")) {
            e.target.classList.add("selected")
        }
        if (this.counter === 0) {
            this.color1 = arr[1]
        } else if (this.counter === 1) {
            this.color2 = arr[1]
        } else if (this.counter === 2) {
            this.color3 = arr[1];
            // function checkColor()
            // this.counter = 0
            // this.color1 = "";
            // this.color2 = "";
            // this.color3 = "";
        }
    }
    
    componentWillMount(){
        data_utils.generateCards(window.data_utils)
        console.log(data_utils.allCards)
        data_utils.generateBoard(window.data_utils.allCards,12)
        console.log(data_utils.board)
    }


    render() {
        return (
            <div className="board">
                <Card handleClick={this.getColor} number={data_utils.board[0][0]} color={data_utils.board[0][1]} symbol={data_utils.board[0][2]}  shade={data_utils.board[0][3]} />
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
            shade: ""
        }
    }
    select(e) {
        this.props.handleClick(e)
    }
    render() {
        var items = [];
        for (var i = 0; i < this.props.number; i++) {
            items.push(<Shape key={`item${i}`} shade={this.props.shade} symbol={this.props.symbol} color={this.props.color} />)
        }
        return (
            <div className="card" onClick={this.select}>
                {items}
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
            <div style={{ backgroundColor: this.props.color }} className={`shape ${this.props.color} ${this.props.symbol} ${this.props.shade}`}></div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById("root")
);