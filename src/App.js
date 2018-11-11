import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Button from '@material-ui/core/Button';
import InteractionSender from './InteractionSender.js';
import JokePaper from './JokePaper';

export default function App() {
   const apiUrl = 'https://08ad1pao69.execute-api.us-east-1.amazonaws.com';

   return (
      <div className="App">
         <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <JokePaper url={apiUrl}/>
         </header>
      </div>
   );
};
