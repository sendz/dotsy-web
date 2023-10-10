import "./styles.css";
import { DotsContainer } from "./components/DotsContainer";
import { useEffect, useState } from "react";
import { randomRgbaString } from "./tools/generateColor";

export default function App() {
  const [level, setLevel] = useState(1);
  const [gridFactor, setGridFactor] = useState(level + level);
  const [grid, setGrid] = useState(2);
  const [amount, setAmount] = useState(Math.pow(grid, 2));
  const [newColors, setNewColors] = useState(randomRgbaString(amount));
  const [retries, setRetries] = useState(amount - 1);
  const [warning, setWarning] = useState(false);
  const [score, setScore] = useState(0);

  const getSelectedColor = (index: number) => {
    return newColors[index];
  };

  const _updateGrid = () => {
    let newAmount = amount;
    if (level === gridFactor) {
      setGridFactor((_factor) => _factor + _factor);
      const newGrid = grid + 1;
      newAmount = Math.pow(newGrid, 2);
      setAmount(newAmount);
      setGrid(() => newGrid);
      setRetries(newAmount - 1);
    }

    setNewColors(() => [...randomRgbaString(newAmount)]);
  };

  const validateIfDifferent = (index: number) => {
    const selectedColor = getSelectedColor(index);
    const selected = newColors.filter((color) => color === selectedColor);

    setWarning(false);

    if (selected.length === 1) {
      _updateGrid();
      setScore((_score) => _score + (grid - 1) * 10);
      setLevel(level + 1);
    } else {
      setWarning(true);
      setRetries((_retries) => _retries - 1);
      setScore((_score) => _score - 10);
    }
  };

  useEffect(() => {
    if (retries === 0) {
      alert("You failed!");
      setWarning(false);
    }
  }, [retries]);

  return (
    <div className="App">
      <h1>Hello Dotsy</h1>
      <h2>
        Level: {level}, Score: {score}
      </h2>
      <h3>Retries {retries}</h3>
      <DotsContainer
        disabled={retries === 0}
        amount={amount}
        colors={newColors}
        grid={grid}
        validateIfDifferent={validateIfDifferent}
        warning={warning}
      />
    </div>
  );
}
