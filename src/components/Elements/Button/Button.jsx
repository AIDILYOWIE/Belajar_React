const Button = (props) => {
  const { children, variant = "bg-black" } = props;

  return (
    <>
      <button className={`h-10 px-6 font-semibold rounded-md ${variant} text-white mt-5`} type="submit">
        {children}
      </button>
    </>
  );
};

export default Button;