let size = 8;
let block = '#';
let space = ' ';

function chessBoard(ChessSize){
  for (let i = 0; i < ChessSize; i++) {
  var drawLine = '';
  for (let y = 0; y < ChessSize; y++){
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