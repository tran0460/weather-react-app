import './App.css';
import React from 'react'

const api = {
  key: 'beeff04c2d7634dde414fdaace9bca74',
  base: 'http://api.openweathermap.org/data/2.5/'
}

function App() {
  return (
    <div className="App">
      <main>
        <div class = "search-box">
          <input 
          type = "text"
          className="search-bar"
          placeholder = "Search..."
          />
        </div>
      </main>
    </div>
  );
}

export default App;
