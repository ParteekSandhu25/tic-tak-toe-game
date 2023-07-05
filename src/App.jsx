import './styles.scss';
import { useState } from 'react';
import Borard from './components/Board';
import { calculateWinner } from './winner';

function App() {
   const [squares, setSquares] = useState(Array(9).fill(null));
   const [isXNext, setIsXNext] = useState(false);

   const winner = calculateWinner(squares);
   const nextPlayer = isXNext ? 'X' : 'O';
   const statusMessage = winner
      ? `Winner is ${winner}`
      : `Next player is ${nextPlayer}`;

   const handleSquareClick = clickedPosition => {
      // null, X, O
      if (squares[clickedPosition] || winner) {
         return;
      }

      setSquares(currentSquares => {
         return currentSquares.map((squareValue, position) => {
            if (clickedPosition === position) {
               return isXNext ? 'X' : 'O';
            }

            return squareValue;
         });
      });

      setIsXNext(currentIsXNext => !currentIsXNext);
   };

   return (
      <div className="app">
         <h2>{statusMessage}</h2>
         <Borard squares={squares} handleSquareClick={handleSquareClick} />
      </div>
   );
}

export default App;
