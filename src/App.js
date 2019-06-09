import React from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
import Routes from './Routes';
import Header from './components/common/Header';
import Sidebar from './components/common/Sidebar';

function App() {
  return (
    <Router>
      <Header />
      <div id="wrapper" class="d-flex">
        <Sidebar />
        <Routes />  
      </div>
    </Router>
  );
}

export default App;
