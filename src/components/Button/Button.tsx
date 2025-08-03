type ButtonPropsType = {
  label: string;
};

const Button = ({ label }: ButtonPropsType) => {
  return (
    <button className="button" type="button">
      {label}
    </button>
  );
};

export default Button;
