interface ChildProps {
  color: string;
  onClick: () => void;
  //* Required because without this prop(children) inside the Parent file will be an error because everything added to <Child> required to be defined in the interface ChildProps.
  children?: React.ReactNode;
}

//* Option 1
export const Child = ({ color, onClick }: ChildProps) => {
  return (
    <div>
      {color}
      <button onClick={onClick}>Click Me</button>
    </div>
  );
};

//* Option 2
export const ChildAsFC: React.FunctionComponent<ChildProps> = ({ color, onClick, children }) => {
  return (
    <div>
      {color}
      {children}
      <button onClick={onClick}>Click Me</button>
    </div>
  );
};
