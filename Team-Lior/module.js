Set={}

Set.checkSameColor = function(card1, card2, card3){
   if((card1.color === card2.color) && (card2.color === card3.color)){
        return true
   }
   else {return false}
}