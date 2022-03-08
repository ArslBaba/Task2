
import './App.css';

import { BrowserRouter as Router , Route , Switch , Link } from 'react-router-dom';

import Navbar from './components/navbar/index'

import Cases from './components/Casestudies/cases'

import Inner from './components/case_inner/inner'

import Faq from './components/Pricing/faq'

import Head from './components/Head/Header'

function App() {
  return (
    <Router>
      <div className='App'>
        
        <Switch>
          <Route exact path="/" component={ Navbar }/>
          <Route path="/faq" component={ Faq }/>
          <Route path="/cases" component={ Cases }/>
          <Route path="/inner" component={ Inner }/>           
          
        </Switch>
      </div>
     </Router>
    
  );
}



export default App;
