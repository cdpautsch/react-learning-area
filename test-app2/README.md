<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*

- [TEST-APP2](#test-app2)
- [Running the App](#running-the-app)
- [Sub-Apps](#sub-apps)
  - [Cards](#cards)
  - [Hangman](#hangman)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

# TEST-APP2

This is simply a platform for me to learn the ReactJS library. The term "Test-App2" came because this was the second app I created, after creating the first with Create React App, and at this point I've become too attached to the name to change it.

# Running the App
To run the app:
* With `webpack-dev-server`:
    `npm start`
* With `nodemon`:
    `npm start-node`
* With `node`:
    `npm build`
    `npm run start-prod`
* With Docker:
    `docker build -t test-app2 .`
    `docker run -p 3000:3000 -it --name myApp test-app2`

# Sub-Apps
## Cards
A simple Solitaire-type cards game where the goal is to remove all cards.

## Hangman
A game of Hangman with a library of animal names.