import React, { useState } from 'react';
import './App.css';
import List from './components/List'
import AddToList from './components/AddToList';

export interface IState {
  people: {
    name: string
    age: number
    url: string
    note?: string
  }[]
}

function App() {

  const [people, setPeople] = useState<IState['people']>([
    {
      name: "Linn Htet Naing",
      url: "https://media.giphy.com/media/wHKHezP0pmjbSMyaVT/giphy.gif",
      age: 20,
      note: "A young tall handsome burmese boy"
    },
    {
      name: "Min Khant Kyaw",
      url: "https://media.giphy.com/media/AqEIYwlsJzUac2DyMe/giphy.gif",
      age: 19,
      note: "A young medium-height burmese boy"
    }
  ])


  return (
    <div className="App">
       <h1 className="title">People Invited to My Party</h1>
       <List people={people}/>
       <h2 className="sub-title">Add More People Here</h2>
       <AddToList people={people} setPeople={setPeople}/>
    </div>
  );
}

export default App;
