import "./Header.css";

type HeaderPropsType = {
  date: string;
};

const Header = ({ date }: HeaderPropsType) => {
  return (
    <div className="header">
      <p>Folha Diária</p>
      <p className="date">{date}</p>
    </div>
  );
};

export default Header;
