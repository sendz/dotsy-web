import { Dot } from "./Dot";
type IDotsContainer = {
  amount: number;
  colors: string[];
  validateIfDifferent: (index: number) => void;
  grid: number;
  warning: boolean;
  disabled?: boolean;
};

export const DotsContainer = ({
  amount,
  colors,
  grid,
  disabled,
  warning,
  validateIfDifferent
}: IDotsContainer) => {
  return (
    <div
      className="grid-container"
      style={{
        padding: 4,
        width: "auto",
        display: "inline-grid",
        columnGap: 4,
        rowGap: 4,
        gridRow: grid,
        gridTemplateColumns: `${[...Array(grid)].map(() => "auto").join(" ")}`,
        border: "1px solid transparent",
        borderColor: `${warning ? "red" : "transparent"}`
      }}
    >
      {[...Array(amount)].map((_, index) => (
        <Dot
          disabled={disabled}
          key={index}
          baseColor={colors[index]}
          onClick={() => validateIfDifferent(index)}
        />
      ))}
    </div>
  );
};
