import React from 'react';
import './App.css';
import Title from './Title';
import User from './User';
import Form from './Form';
import data from './data';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [...data]
    }
  }

  addNewUser =(first_name) => {
    this.setState({data: [...this.state.data, 
      {
        first_name, 
        last_name: "", 
        avatars: [{
          url: "https://picsum.photos/128?random="+ Math.floor(Math.random() * 100)
        }]
      }
    ]
  })
  }
  render(){
  return (
    <div className="App">
       <Title content="Employees"/>
       <Form addNewUser={this.addNewUser} />
       <div className="userList">
       {
         this.state.data.map((product, index)=>{
           const {first_name, last_name, avatars} = product;
           return <User 
              key={index} 
              name={first_name + " " + last_name} 
              avatar={avatars[0].url} />
         })

       }
       </div>
    </div>
  );
}

  async componentDidMount() {

    let response =  await fetch('https://tinyfac.es/api/users');
    let users = await response.json();
    this.setState({users});

  }


  /*componentDidMount() {
    fetch('https://tinyfac.es/api/users')
      .then((response) => {
        return response.json();
      })
      .then((users) => {
        this.setState({users})
      });
    }*/
}

export default App;
