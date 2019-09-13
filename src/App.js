import React from 'react';
import './App.css';
import Title from './Title';
import User from './User';
import data from './data';
function App() {

  return (
    <div className="App">
       <Title content="Employees"/>
       <div className="userList">
       {
         data.map((product, index)=>{
           const {first_name, last_name, avatar} = product;
           return <User key={index} name={first_name + " " + last_name} avatar={avatar} />
         })

       }
       </div>
    </div>
  );
}

export default App;
