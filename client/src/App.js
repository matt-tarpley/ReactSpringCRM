import './App.css';
import Contacts from './components/contacts';

function App() {
  return (
    <div className="container-fluid">
      <nav>
        <div className="nav-wrapper center-align">
          <a href="/" className="brand-logo">Contacts</a>
        </div>
      </nav>
      <div className="row">
        <Contacts/>
      </div>      
    </div> 
  );
}

export default App;
