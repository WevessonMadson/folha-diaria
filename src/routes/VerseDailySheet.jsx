import { Link } from 'react-router-dom'; 
import Header from '../components/Header';
import Learnings from '../components/Learnings';
import Gratitude from '../components/Gratitude';
import Button from '../components/Button';
import Note from '../components/Note';
 
const VerseDailySheet = () => {
    return (
      <div className="app">
        <Header/>
        <Note />
        <Learnings />
        <Gratitude />
        <Link to="/">
          <Button label="Finalizar"/>
        </Link>
      </div>
    );
  };
  
  export default VerseDailySheet;