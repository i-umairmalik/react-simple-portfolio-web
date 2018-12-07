import React, { Component } from 'react';
import './resources/styles.css';
import Header from "./Components/Header-Footer/Header";
import Featured from './Components/features';
class App extends Component {
  render() {
    return (
     <div style={{height:"1000px", backgroundColor:"cornflowerblue"}}>
       <Header/>
       <Featured/>
     </div>
    );
  }
}

export default App;
