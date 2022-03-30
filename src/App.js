import './App.css';
import React from 'react'

const api = {
  key: 'beeff04c2d7634dde414fdaace9bca74',
  base: 'http://api.openweathermap.org/data/2.5/'
}

function App() {
  const dateBuilder = (d) => {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`
  }
  return (
    <div className="app">
      <main>
        <div class = "search-box">
          <input 
          type = "text"
          className="search-bar"
          placeholder = "Search..."
          />
        </div>
        <div className="location-box"> 
          <div className="location"> NYC, US</div>
          <div className="date">{ dateBuilder(new Date()) }</div>
        </div>
        <div className="weather-box"></div>
      </main>
    </div>
  );
}

export default App;
