import React from 'react';
import { Home } from './components/home';
import { Card } from './components/card';
import "./app.css";
function App() {
  return (
    <div className = "homeDasboard" style={{overflow:"auto"}}>
        <div>
          <Home/>
          <Card/>
        </div>
     </div>
  );
}
export default App;
