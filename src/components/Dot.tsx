type IDot = {
  baseColor: string;
  onClick: () => void;
  disabled?: boolean;
} & React.PropsWithChildren;

export const Dot = (props: IDot) => {
  return (
    <button
      disabled={props.disabled}
      onClick={props.onClick}
      className="dot"
      style={{
        backgroundColor: props.disabled ? "grey" : props.baseColor
      }}
    >
      {props.children}
    </button>
  );
};
