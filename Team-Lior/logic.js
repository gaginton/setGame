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

    componentWillMount() {
        data_utils.generateCards(window.data_utils)
        console.log(data_utils.allCards)
        data_utils.generateBoard(window.data_utils.allCards, 12)
        console.log(data_utils.board)
    }


    render() {
        return (
            <div className="board">
                <Card handleClick={this.getColor} number={data_utils.board[0][0]} color={data_utils.board[0][1]} symbol={data_utils.board[0][2]} shade={data_utils.board[0][3]} />
                <Card handleClick={this.getColor} number={data_utils.board[1][0]} color={data_utils.board[1][1]} symbol={data_utils.board[1][2]} shade={data_utils.board[1][3]} />
                <Card handleClick={this.getColor} number={data_utils.board[2][0]} color={data_utils.board[2][1]} symbol={data_utils.board[2][2]} shade={data_utils.board[2][3]} />
                <Card handleClick={this.getColor} number={data_utils.board[3][0]} color={data_utils.board[3][1]} symbol={data_utils.board[3][2]} shade={data_utils.board[3][3]} />
                <Card handleClick={this.getColor} number={data_utils.board[4][0]} color={data_utils.board[4][1]} symbol={data_utils.board[4][2]} shade={data_utils.board[4][3]} />
                <Card handleClick={this.getColor} number={data_utils.board[5][0]} color={data_utils.board[5][1]} symbol={data_utils.board[5][2]} shade={data_utils.board[5][3]} />
                <Card handleClick={this.getColor} number={data_utils.board[6][0]} color={data_utils.board[6][1]} symbol={data_utils.board[6][2]} shade={data_utils.board[6][3]} />
                <Card handleClick={this.getColor} number={data_utils.board[7][0]} color={data_utils.board[7][1]} symbol={data_utils.board[7][2]} shade={data_utils.board[7][3]} />
                <Card handleClick={this.getColor} number={data_utils.board[8][0]} color={data_utils.board[8][1]} symbol={data_utils.board[8][2]} shade={data_utils.board[8][3]} />
                <Card handleClick={this.getColor} number={data_utils.board[9][0]} color={data_utils.board[9][1]} symbol={data_utils.board[9][2]} shade={data_utils.board[9][3]} />
                <Card handleClick={this.getColor} number={data_utils.board[10][0]} color={data_utils.board[10][1]} symbol={data_utils.board[10][2]} shade={data_utils.board[10][3]} />
                <Card handleClick={this.getColor} number={data_utils.board[11][0]} color={data_utils.board[11][1]} symbol={data_utils.board[11][2]} shade={data_utils.board[11][3]} />

            </div>
        );
    }
}

class Card extends React.Component {
    constructor(props) {
        super(props);
        this.select = this.select.bind(this)
        this.state = {
            color: this.props.color,
            symbol: this.props.symbol,
            number: this.props.number,
            shade: this.props.shade,
            selected: ""
        }
    }
    select(e) {
        this.props.handleClick(e)
        if (this.state.selected == "") {
            this.setState({
                selected: "selected"
            })
        } else {
            this.setState({
                selected: ""
            })
        }
    }
    render() {
        var items = [];
        for (var i = 0; i < this.state.number; i++) {
            items.push(<Shape key={`item${i}`} shade={this.state.shade} symbol={this.state.symbol} color={this.state.color} />)
        }
        return (
            <div className={`card ${this.state.selected}`} onClick={this.select}>
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
            <div className={`shape ${this.props.color} ${this.props.symbol} ${this.props.shade}`}></div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById("root")
);