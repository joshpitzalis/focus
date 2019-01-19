import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Input from './Input'
import { Query } from "react-apollo";
import gql from "graphql-tag";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
      
          
          <Query
    query={gql`
      {
        tasks {
          title
          completed
          _id
          created
        }
      }
    `}
  >
    {({ loading, error, data, refetch }) => {
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error :(</p>;

    

      
       return  <div><Input refetch={refetch}></Input>
       <h1>{data.tasks.filter( task => task.completed === "false").length}</h1>
       {data.tasks
      .filter(task => task.completed === "false")
      .sort( (a, b) => new Date(b.created ) - new Date(a.created ))
      .map(({ title, _id }) => (
        <div key={_id}>
          <p>{title}</p>
        </div>
      ))
      }
       </div>  

  
    }}
  </Query>
        </header>
      </div>
    );
  }
}

export default App;
