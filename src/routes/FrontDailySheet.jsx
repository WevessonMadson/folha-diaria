import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Focus from '../components/Focus';
import Priorities from '../components/Priorities';
import Ignore from '../components/Ignore';
import Button from '../components/Button';
 
const FrontDailySheet = () => {
    return (
      <div className="app">
        <Header/>
        <Focus />
        <Priorities />
        <Ignore />
        <Link to="/verse">
          <Button label="Avaliar dia"/>
        </Link>
      </div>
    );
  };
  
  export default FrontDailySheet;