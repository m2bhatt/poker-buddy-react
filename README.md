# Poker Buddy

## Overview
This app is a poker trainer that helps new players check the probability of their hands against the ranked Poker hands set. The user can select the cards they're dealt with, and check their odds of creating a specific Poker hand against the cards on the board. 
<!--What is your app? Brief description in a couple of sentences.-->

### Problem
As a new poker player, it can be overwhelming to understand the different Poker hands and their order of winning. It's also hard to calculate the probability of the different Poker hands in a short span of time since generally you only have a few seconds to decide if you want to bet, fold or raise during your turn. 
<!--Why is your app needed? Background information around any pain points or other reasons.-->

### User Profile
Users who enjoy playing poker online and are continuing to learn the order of Poker hands, and the probability of hands possible given what's in their hand vs what's on the board, and the potential hands of other players given the cards on the board. 
<!--Who will use your app? How will they use it? Any special considerations that your app must take into account.-->

### Features
1. As a user, I should be able to sign up. 
2. As a user, I should be able to login if I already have an account. 
2. As a user, I should be able to see all the cards in a deck. 
2. As a user, I should be able to see the order of the different Poker hands.
3. As a user, I should be able to select which cards are in my hand, and which cards are on the board. 
4. As a user, I should be able to see the probability of Poker hands once I have selected the cards in my hand, and the first draw of 3 hands on the board. 
5. As a user, I should be able to see the probability of Poker hands once other cards are revealed. 
6. As a user, I should be able to select the outcome of my play (fold, win, draw). 

### Stretch Goals   
7. As a user, I should be able to save my hand, hands on the board, and the outcome of my play.
8. As a user, I should be able to reset the board before each round. 
9. As a user, I should be able to delete a previously saved round from my accounts page. 

## Implementation

### Tech Stack
1. React 
2. Sass 
2. Express
3. MySQL
4. JWT
5. Client Libraries - react, react-router, axios
6. Server libraries - knex, express, dotenv, bcryptjs
7. Poker probability library (researching)

### APIs
No external APIs will be used in the MVP. The app will use local server to fetch data from mySQL databases. 

### Sitemap
1. Signup Page  
This page allows user to sign up to save their plays. 

2. Login Page  
This page allows users to login if they have an existing account. 

3. Poker Trainer Page  
This is the main page of the app, with the functionality to review their probability.

4. Account page that stores all the saved plays.  
This page saves all your played hands if you chose to save them from the poker trainer page. 

<!--List the pages of your app with brief descriptions. You can show this visually, or write it out.-->

### Mockups

![Sign up Page](/readme_images/Signup_Page.png)

![Trainer Page](/readme_images/wip.png);


### Data

![Data Structure](/readme_images/Data_Structure.png)

The `playing_cards` and `table_cards` will store an array of objects with the keys: `value`, `suit` and `inHand`. 

### Endpoints
Users:
1. GET endpoint to retrieve the user information for logging in. 

Hands:
1. GET endpoint to retrieve the array of saved hands. 
2. POST endpoint to save the data to the user's account. 
3. DELETE endpoint to delete saved hands from user's account. 

<!--List endpoints that your server will implement, including HTTP methods, parameters, and example responses.-->

### Auth

1. JWT for client and server side authentication.

## Roadmap

### Foundations
1. Create client side directory with React, set up routes and boiletplate pages and components. 
2. Create server side directory with Express, set up routes and seed data for users and hands.
3. Create and run migrations using the seed data. 
4. Create and initialize both client and server side Github repos. 
5. Create a chart to outline states, component relationships, and API requests. 

### Feature Build

1. **Sign Up / Login Functionality** (~3 days)
* Implement SWT to add authentication for users to sign up and login.
* Create and style the signup and login page. 
* Create and style the navigation section. 

2. **Build: Poker Trainer Page** (~4 days)
* Build components to render the Poker Hands, Board, and Deck sections. 
* Style components for the page. 
* Implement active state and styling to reflect the active styling. 
* Implement functionality to calculate the probability of poker hands given the player's hand, and cards on the board. 
* Add axios requests to post data to user's account. 

3. **Build: Account Page** (~3 days)
* Create the account page components
* Implement end point to retrieve saved cards. 
* Style the Account Page 

4. **Bug Fixes** (~3 days)
* Test all functionality with different test cases 
* Fix all styling issues 

5. **Presentation**
* Create assets for demo day
* Upload assets for demo day 
* DEMO DAY!

## Nice-to-haves
1. Animation on cards when they're saved. 
2. Add other players to the board
3. Ability to write notes 
4. Ability to sort your saved plays by date and outcome 
5. Ability for the user to retrieve cards from their account to the poker trainer page to review the probability 


