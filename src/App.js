import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Bench} from './layout/Bench';
import {Field} from './layout/Field';
import {Shop} from './layout/Shop';

const UserContext = React.createContext();

function App() {
  const user = User();
  const [stage, setStage] = React.useState(0);

  React.useEffect(function() {
    console.log(`New Stage: ${stage}`);
    shop.reroll();

  }, [stage]);

  return (
    <div className="App">
      <UserContext.Provider value={user}>
        <div className="left-pane">
          <Field/>
          <Bench/>
        </div>
        <div className="right-pane">
          <Shop shop={shop}/>
        </div>
      </UserContext.Provider>
    </div>
  );
}

const User = function() {
  return {
    name: 'User',
    gold: 0,
    units: [],
    getInterest: function() {
      this.gold += Math.floor(this.gold / 10)
    }
  }
}

const shop = {
  units: [],
  reroll: function() {
    console.log("rerolling units");
    this.units = 
  },
}

export default App;
