var size = 8;
var block = '#';
var space = ' ';

function chessBoard(ChessSize){
  for (var i = 0; i < ChessSize; i++) {
  var drawLine = '';
  for (var y = 0; y < ChessSize; y++){
    if (i%2) {
        if (y%2) {
            drawLine = drawLine + space;
        } else {
            drawLine = drawLine + block;
        }
    } else {
        if (y%2) {
            drawLine = drawLine + block;
        } else {
            drawLine = drawLine + space;
        }
    }
  }
  console.log(drawLine);
}
}
chessBoard(size);