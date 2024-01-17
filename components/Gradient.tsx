const Tabs: JSX.Element = (
  <>
    <div>ok </div>
  </>
);

export default function Gradient({ ...props }): React.ReactNode {
  return (
    <>
      <div
        className=" w-screen h-screen bg-[conic-gradient(at_bottom,_var(--tw-gradient-stops))] from-white via-lime-800 to-gray-500 "
        {...props}
      ></div>
    </>
  );
}
