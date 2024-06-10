# Poker Buddy

## Overview
This app is a poker trainer that helps new players understand the rank of Poker Hands, the chace of winning against one opponent with specific Poker Hand. The user can select the cards they're dealt with, and check their odds of creating a specific Poker hand against the cards on the board. 

## Features
1. Ability to register and sign in to your account. 
2. Select hand cards and table cards. 
3. Calculate chance of the Poker Hand winning against one opponent. 
4. Save your hand cards, table cards, and outcome of each round. 
5. Reset the hand cards, table cards, outcome, and chances of winning. 
6. Review your saved hands in your account page. 

## Implementation

### Tech Stack
1. React 
2. Sass 
2. Express
3. MySQL
4. JWT
5. Client Libraries:  
a. react  
b. react-router  
c. axios 
6. Server libraries  
a. knex  
b. express  
c. dotenv  
d. bcryptjs
7. Poker probability library

### Screenshots

| ![Sign up Page](/readme_images/register_page.png) |
| :--: |
| *Sign Up Page* |



| ![Trainer Page](/readme_images/initial_state_loggedin.png) |
| :--: |
| *Trainer Page* |
| This is the main page of the site in its initial state. |

| ![Trainer Page](/readme_images/user_input_state_loggedin.png) |
| :--: |
| *Trainer Page* |
| This is the main page after user interaction. |

| ![Account Page](/readme_images/account_page.png) |
| :--: |
| *Account Page* |
| This is the account page displaying user's saved hands. |

### Data

![Data Structure](/readme_images/Data_Structure.png)

The `playing_cards` and `table_cards` will store an array of objects with the keys: `value`, `suit` and `inHand`. 

### Endpoints
#### Users

**POST /users/signup**  
- Add a user account  

Parameters:  
- username   
- password 

Response  
201 status with a success response. 
```
Success! 
```

**POST /users/login**  
- Login a user  

Parameters:  
- username   
- password 

Response
```
{
	"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
}
```

2. GET endpoint to retrieve the user information for logging in. 

#### Hands
**GET /hands/:username** 
- Retrieve user's saved hands from the hands table 
Parameters:
- user id 

``` 
[
  {
    "username": "testname", 
    "player_cards" : {
      "cards": [
        {"suit": "hearts", "value": "7", "inHand": true},
        {"suit": "hearts", "value": "8", "inHand": false}
      ]
    },
    "table_cards" : {
      "cards": [
        {"suit": "hearts", "value": "9", "inHand": false}, 
        {"suit": "spades", "value": "7", "inHand": true}, 
        {"suit": "hearts", "value": "7", "inHand": true}, 
        {"suit": "hearts", "value": "7", "inHand": true}, 
        {"suit": "hearts", "value": "7", "inHand": true}
      ]
    },
    "outcome" : 1,
    "hand_name: 1
  },
  {
    "username": "testname", 
    "player_cards" : {
      "cards": [
        {"suit": "hearts", "value": "7", "inHand": true},
        {"suit": "hearts", "value": "8", "inHand": false}
      ]
    },
    "table_cards" : {
      "cards": [
        {"suit": "hearts", "value": "9", "inHand": false}, 
        {"suit": "spades", "value": "7", "inHand": true}, 
        {"suit": "hearts", "value": "7", "inHand": true}, 
        {"suit": "hearts", "value": "7", "inHand": true}, 
        {"suit": "hearts", "value": "7", "inHand": true}
      ]
    },
    "outcome" : 1,
    "hand_name: 1
  }
]
```
_The outcome and hand_name will be decoded in the front end to return the appropriate string._

**POST /hands/:username**   
Save user's cards from the current round to the hands table.

Parameters:
- username 
- Player cards
- Table cards
- Outcome 
- Hand Name 

```
"Sucess! Round saved!"
```

### Auth

1. JWT for authentication. Once logged in, users will be able to see their saved hands within their account. 

<!-- ## Roadmap

### Foundations
1. Create client side directory with React, set up routes and boiletplate pages and components. 
2. Create server side directory with Express, set up routes and seed data for users and hands.
3. Create and run migrations using the seed data. 
4. Create and initialize both client and server side Github repos. 
5. Create a chart to outline states, component relationships, and API requests.  -->

<!-- ### Feature Build

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
* DEMO DAY! -->

## Next Steps
1. Animate cards when they're added to the Pocket Hand, and Table Cards. 
2. Animate card when they're saved to the account. 
3. Add other players to the board, including the chance of winning when additional players are added. 
4. Ability to write notes when saving each round. 
5. Ability to sort your saved plays by date and outcome.
6. Paginate the front end and API calls in the back end to only display 10 saved hands at a time. 
7. Ability for the user to retrieve cards from their account to the poker trainer page to review the probability 


