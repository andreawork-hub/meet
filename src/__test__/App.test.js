import React from 'react';
import { shallow, mount } from 'enzyme';
import { mockData } from '../mock-data';
import { extractLocations, getEvents } from '../Api';
import App from '../App';
import EventList from '../EventList';
import CitySearch from '../CitySearch';
import NumberOfEvents from '../NumberOfEvents';
//import NumberOfEvents from '../NumberOfEvents'

describe('<App/> component', () => {
    let AppWrapper;
    beforeAll(() => {
        AppWrapper = shallow(<App />);
    });

    test('render list of events', () => {
        expect(AppWrapper.find(EventList)).toHaveLength(1);
    });

    test('render CitySearch', () => {
        expect(AppWrapper.find(CitySearch)).toHaveLength(1);
    });

    test("<NumberOfEvents> component", () => {
        expect(AppWrapper.find(NumberOfEvents)).toHaveLength(1);
    })

});

describe('<App /> integration', () => {
    test('App passes "events" state as a prop to EventList', () => {
        const AppWrapper = mount(<App />);
        const AppEventsState = AppWrapper.state('events');
        expect(AppEventsState).not.toEqual(undefined);
        expect(AppWrapper.find(EventList).props().events).toEqual(AppEventsState);
        AppWrapper.unmount();
    });

    test('App passes "locations" state as a prop to CitySearch', () => {
        const AppWrapper = mount(<App />);
        const AppLocationsState = AppWrapper.state('locations');
        expect(AppLocationsState).not.toEqual(undefined);
        expect(AppWrapper.find(CitySearch).props().locations).toEqual(AppLocationsState);
        AppWrapper.unmount();
    });



    test('get list of events matching the city selected by the user', async () => {
        const AppWrapper = mount(<App />);
        const CitySearchWrapper = AppWrapper.find(CitySearch);
        const locations = extractLocations(mockData);
        CitySearchWrapper.setState({ suggestions: locations });
        const suggestions = CitySearchWrapper.state('suggestions');
        const selectedIndex = Math.floor(Math.random() * (suggestions.length));
        const selectedCity = suggestions[selectedIndex];
        await CitySearchWrapper.instance().handleItemClicked(selectedCity);
        const allEvents = await getEvents();
        const eventsToShow = allEvents.filter(event => event.location === selectedCity);
        expect(AppWrapper.state('events')).toEqual(eventsToShow);
        AppWrapper.unmount();
    });

    test('get list of all events when user selects "See all cities"', async () => {
        const AppWrapper = mount(<App />);
        const suggestionItems = AppWrapper.find(CitySearch).find('.suggestions li');
        await suggestionItems.at(suggestionItems.length - 1).simulate('click');
        const allEvents = await getEvents();
        expect(AppWrapper.state('events')).toEqual(allEvents);
        AppWrapper.unmount();
    });
    /*
        test('app changes NOE to new state when user changes input NOE', async () => {
            const AppWrapper = mount(<App />);
            const NOEWrapper = AppWrapper.find(NumberOfEvents);
            const EventListWrapper = AppWrapper.find(EventList);
            await NOEWrapper.instance().handleInputChange({ target: { value: 16 } });
            expect(AppWrapper.state('NOE')).toEqual(16);
            expect(AppWrapper.state('events')).toHaveLenght(16);
            AppWrapper.unmount();
        });
    
        test("when user updates city search, last state of NOE will be rendered", async () => {
            const AppWrapper = mount(<App />);
            const CitySearchWrapper = AppWrapper.find(CitySearch);
            const NOEWrapper = AppWrapper.find(NumberOfEvents);
            // simulation 
            const eventObject = { target: { value: 10 } }
            await NOEWrapper.instance().handleInputChange(eventObject);
            const locations = extractLocations(mockData);
            CitySearchWrapper.setState({ suggestions: locations });
            const suggestions = CitySearchWrapper.state('suggestions');
            const selectedIndex = Math.floor(Math.random() * suggestions.length);
            const selectedCity = suggestions[selectedIndex];
            await CitySearchWrapper.instance().handleItemClicked(selectedCity);
            //expect that selectedCity gets stored in App state variable 'selectedLocation'
            expect(AppWrapper.state("selectedLocation")).toEqual(selectedCity);
            //NOE rendered doesnt change
            expect(AppWrapper.state('events')).toHaveLength(eventObject.target.value);
            AppWrapper.unmount();
        })
    */

});

