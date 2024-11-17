/* eslint-disable react/prop-types */
function Button({ children, ...props }) {
  const { className } = props;

  return (
    <button
      className={`${className} p-4 rounded-lg relative after:absolute after:h-full after:w-full after:bg-grey/30 after:top-1.5 after:left-0 after:rounded-lg after:-z-10`}
    >
      {children}
    </button>
  );
}

export default Button;
