import { useState } from 'react';
import Square from './Square';

const Board = () => {
  const [squareValue, setSquareValue] = useState(Array(9).fill(null));
  console.log(squareValue);

  const handleSquareClick = position => {
    setSquareValue(prev =>
      prev.map((value, index) => {
        if (position === index) {
          return 'X';
        }

        return value;
      })
    );
  };

  const renderSquare = position => {
    return (
      <Square
        value={squareValue[position]}
        onClick={() => handleSquareClick(position)}
      />
    );
  };
  return (
    <div className="board">
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  );
};
export default Board;
