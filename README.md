# JourneyGenie
Webapp recommending personalized travel recommendations based on the traveler's preferences and interests. Built in the scope of LA Hacks 2023.

## Demo
There is a demo website that is accessible [here](https://journey-genie-72d0c.web.app/). It contains the entire project.

## Table of Contents
This serves as a general guide for navigating the repository! Feel free to PR if you see something missing.

- [Introduction](#introduction)
- [Use Cases](#use-cases)
- [Getting Setup](#getting-setup)
- [API Keys](#api-keys)
- [Disclaimers](#disclaimers)
- [License](#license)

## Introduction
With an overwhelming amount of information available online, travelers often struggle to decide on the best activities, attractions, and destinations to visit. With JourneyGenie, travelers can save time and reduce the stress of trip planning, while also ensuring that they make the most of their time and have a memorable experience. By incorporating both practical recommendations and creative visuals, we strive to create an unforgettable travel planning experience that caters to the diverse needs and preferences of every traveler.

## Use Cases
JourneyGenie solves these problems by providing personalized recommendations for each day of the trip based on the traveler's preferences and interests. The data collected from user's response is analyzed using natural language processing algorithms powered by Cohere to create customized recommendations that include the best activities and attractions. We also provide artistic images of the locations, designed to help travelers visualize the destinations in a way that resonates with their unique preferences and interests.

## Getting Setup
This project assumes that you already have `Node ^14.17.6` & `npm ^6.14.15`. If you do not, please download them from [the official website](https://nodejs.org/en/download/)
Here are a couple of steps that you can follow to quickly get started with the project.

1. Clone the repository: `git clone https://github.com/mike1572/journey-genie`
2. Install the project dependencies by running `npm install` inside the cloned directory
3. Run `npm start` to start your own local development environment! Alternatively, here are some more commands available:

| Commands        | Output
|-----------------|-------------------------------------------------------------------|
| `npm run build` | Creates a production-ready build of the project, ready for deployment |
| `npm update`    | Updates dependencies that require newer versions to keep functioning correctly|
| `serve -s`      | You *must* install serve (`npm install -g serve`) before running this command. This command makes the project accessible both locally and on your network, in the event that you want to test it on different devices or share it with your entourage.|

There are many more commands, which you can familiarise yourself with on the [Create a React App](https://create-react-app.dev/) website, or in [npm's](https://docs.npmjs.com/) documentation.

## API Keys
Please not that there are several API keys you will need to have in a .env file placed in the root of this project to get the code running properlly. This includes OpenAI's REACT_APP_DALLE_API_KEY, Cohere's REACT_APP_API_KEY_COHERE, and Twilio's REACT_APP_TWILIO_SID, REACT_APP_TWILIO_AUTH_TOKEN, and REACT_APP_FROM_PHONE_NUMBER. All these variables need to be present in your .env file.

## Disclaimers
You are required to provide your own API keys, as the file will not be provided. This is for privacy & security reasons. This may or may not be updated further down the road if there is interest.

## License
This project or parts of its code are licensed under AGPLv3. Furthermore, npm libraries are subject to their own copyright.
