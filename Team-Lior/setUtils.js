window.data_utils = { 
    number : ['1','2','3'],
    colors : ['red','green','purple'],
    symbol : ['oval','diamond','square'],
    shade : ['solid','stripe','open']
   
}
data_utils.allCards = [];
data_utils.board = [];

data_utils.generateCards = function(obj) {
    for (var i = 0; i < obj.number.length; i ++) {
        for (var j = 0; j < obj.colors.length; j ++) {
            for (var k = 0; k < obj.symbol.length; k ++) {
                for (var l = 0; l < obj.shade.length; l ++) {
                    data_utils.allCards.push ([obj.number[i], obj.colors[j], obj.symbol[k], obj.shade[l]])
                }
            }
        }
    }
}



data_utils.shuffle = function(e) {
    var j, x, i;
    for (i = e.length - 1; i >= 0; i--) {
        j = Math.floor(Math.random() * (i));
        x = e[i];
        e[i] = e[j];
        e[j] = x;
    }
    return e;
}

data_utils.generateBoard = function(arr, num) {
    arr = data_utils.shuffle(arr);
    for (var i = 0; i < num; i ++) {
        data_utils.board.push (arr[i]);
    }
}
