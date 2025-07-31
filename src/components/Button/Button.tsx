type ButtonPropsType = {
  label: string;
};

const Button = ({ label }: ButtonPropsType) => {
  return <button type="button">{label}</button>;
};

export default Button;
