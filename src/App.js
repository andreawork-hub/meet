import React, { Component } from 'react';
import './App.css';
import './nprogress.css';

import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import WelcomeScreen from './WelcomeScreen';
import EventGenre from './EventGenre';
import { getEvents, extractLocations, checkToken, getAccessToken } from './Api';
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
//import { mockData } from './mock-data'

class App extends Component {
  state = {
    events: [],
    locations: [],
    seletedLocation: 'all',
    NOE: 32,
    showWelcomeScreen: undefined
  }

  async componentDidMount() {
    this.mounted = true;
    const accessToken = localStorage.getItem('access_token');
    const isTokenValid = (await checkToken(accessToken)).error ? false :
      true;
    const searchParams = new URLSearchParams(window.location.search);
    const code = searchParams.get("code");
    this.setState({ showWelcomeScreen: !(code || isTokenValid) });
    if ((code || isTokenValid) && this.mounted) {
      getEvents().then((events) => {
        if (this.mounted) {
          events = events.slice(0, this.state.NOE); //will slice to 2 locations
          this.setState({ events, locations: extractLocations(events) });
        }
      });
    }
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  updateEvents = (location, inputNumber) => {
    const { NOE, selectedLocation } = this.state;
    if (location) {
      getEvents().then((events) => {
        const locationEvents = (location === 'all') ?
          events :
          events.filter((event) => event.location === location);
        const eventsToShow = locationEvents.slice(0, NOE);
        this.setState({
          events: eventsToShow,
          selectedLocation: location,
        });
      });
    } else {
      getEvents().then((events) => {
        const locationEvents = (selectedLocation === 'all') ? events :
          events.filter((event) => event.location === selectedLocation);
        const eventsToShow = locationEvents.slice(0, inputNumber);
        this.setState({
          events: eventsToShow,
          NOE: inputNumber
        });
      })
    };
  }

  getData = () => {
    const { locations, events } = this.state;
    const data = locations.map((location) => {
      const inputNumber = events.filter((event) => event.location === location).length
      const city = location.split(', ').shift()
      return { city, inputNumber };
    })
    return data;
  };


  render() {
    if (this.state.showWelcomeScreen === undefined)
      return <div
        className="App" />
    return (
      <div className="App" >
        <h1>Meet App</h1>
        <h4>Choose your nearest city</h4>
        <CitySearch locations={this.state.locations} updateEvents={this.updateEvents} />
        <h4>Events in each city</h4>
        <NumberOfEvents events={this.state.events} updateEvents={this.updateEvents} />
        <div className="data-vis-wrapper">
          <EventGenre events={this.state.events} />
          <ResponsiveContainer height={400} >
            <ScatterChart
              //width={800}
              //height={400}
              margin={{
                top: 20, right: 20, bottom: 20, left: 20,
              }}
            >
              <CartesianGrid />
              <XAxis type="category" dataKey="city" name="city" />
              <YAxis type="number" dataKey="number" name="number of events" allowDecimals={false} />
              <Tooltip cursor={{ strokeDasharray: '3 3' }} />
              <Scatter data={this.getData()} fill="#ff8c00" />
            </ScatterChart>
          </ResponsiveContainer>
        </div>
        <EventList events={this.state.events} />
        <WelcomeScreen showWelcomeScreen={this.state.showWelcomeScreen}
          getAccessToken={() => { getAccessToken() }} />
      </div >
    );
  }
}

export default App;

/**/