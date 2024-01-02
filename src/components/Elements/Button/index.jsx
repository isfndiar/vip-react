import PropTypes from "prop-types";
function Button(props) {
  const { children, classname = "bg-black", onClick, type } = props;
  return (
    <button
      type={type}
      onClick={onClick}
      className={`h-10 px-6 font-semibold rounded-md   hover:bg-blue-500 ${classname} text-white`}
    >
      {children}
    </button>
  );
}

Button.propsTypes = {
  variant: PropTypes.string,
};

export default Button;
