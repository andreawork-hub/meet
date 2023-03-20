📗 Table of Contents
------
📖 About the Project
🛠 Built With
🚀 Live Demo
💻 Getting Started
👥 Authors

📖 [Meet App]
------
[Meet App] is a serverless, progressive web application (PWA) build with React using a test-driven development (TDD) technique. The application uses the Google Calendar API to fetch upcoming events.

🛠 Built With
------
Key Features - user scenarios

As a user I should be able to “filter events by city” So that I can see the list of events that take place in that city.

FEATURE 1: FILTER EVENTS BY CITY

Scenario 1: When user hasn’t searched for a city, show upcoming events from all cities.
Given user hasn’t searched for any city
When the user opens the app
Then the user should see a list of all upcoming events

Scenario 2: User should see a list of suggestions when they search for a city.
Given the main page was open
When user starts typing in the city textbox
Then the user should see a list of cities (suggestions) that match what they’ve typed.

Scenario 3: User can select a city from the suggested list.
Given the user was typing “Berlin” in the city textbox
And the list of suggested cities is showing
When the user selects a city (e.g., “Berlin, Germany”) from the list
Then their city should be changed to that city (i.e., “Berlin, Germany”)
And the user should receive a list of upcoming events in that city
*
As a user I should be able to “expand and collapse event element” So that I can see and hide details of the events I am interested in.

FEATURE 2: SHOW/HIDE AN EVENT'S DETAILS

Scenario 1: An event element is collapsed by default
Given the page with the upcoming events was loaded 
When user receives a list of upcoming events  
Then the event details are not visible.

Scenario 2: User can expand an event to see its details
Given the user received a list of upcoming events
When user pushes the Button + (expand) 
Then user will see the details of the upcoming event.

Scenario 3: User can collapse an event to hide its details
Given the user is finished reading the details of the event 
When user pushes the Button - (collapse) 
Then the details of the event will collapse
*
As a user I should be able to “specify number of events per page” So that I can deside upon quantity of shown events.

FEATURE 3: SPECIFY NUMBER OF EVENTS

Scenario 1: When user hasn’t specified a number, 32 is the default number
Given the page with the upcoming events was loaded,
When user dosn’t specify otherwise,
Then 32 events per page will be showed by default.

Scenario 2: User can change the number of events they want to see
Given the page with the upcoming events was loaded,
When user changes the number of events he wants to see 
Then selected number of events per page will appear.
*
As a user I should be able to “see the data offline” So that I can use the app when there is no internet connection.

FEATURE 4: USE THE APP WHEN OFFLINE

Scenario 1: Show cached data when there’s no internet connection
Given there was no internet connection,
When user opens the app,
Then he will see his last search. 

Scenario 2: Show error when user changes the settings (city, time range)
Given there was no internet connection,
When user changes the settings when offline,
Then the app will show the error.
*
As a user I should be able to “see the chart with the number of upcoming events” So that I know how many events are planned in each city. 

FEATURE 5: DATA VISUALIZATION

Scenario 1: Show a chart with the number of upcoming events in each city
Given the user received a list with upcoming events in each city,
When user pushes Button Events Chart,
Then he will see the chart with the number of upcoming events per city. 

🚀 Live Demo
------
Add a link to your deployed project.
Live Demo Link: https://andreawork-hub.github.io/meet/

💻 Getting Started
------
To install packages: See package.json file.

To run the project, execute the following command: npm run start

- unit testing
- made use of a free, open-source JavaScript framework called Cucumber.js, which allows to connect each step of the Gherkin-based scenarios to JavaScript tests.
- made use of Puppeteer framework for end to end testing
- used Atatus tool to monitor the application performance  

You can deploy this project using: GitHub Pages.

👥 Authors
-------
👤 Andrea V.

GitHub: @andreawork-hub

