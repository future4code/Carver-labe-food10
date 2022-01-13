import React, {useState} from 'react';
import Router  from './routes/Router';
import { GlobalState } from './global/GlobalState';

const App = () => {
  

  return (
    <div>
        <GlobalState>
          <Router/>
        </GlobalState>
    
    </div>
  );
}

export default App;
