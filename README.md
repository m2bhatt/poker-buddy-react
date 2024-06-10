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

## Demo 

![video](public/demo.gif)

## Screenshots

| ![Sign up Page](/readme_assets/register_page.png) |
| :--: |
| *Sign Up Page* |



| ![Trainer Page](/readme_assets/initial_state_loggedin.png) |
| :--: |
| *Trainer Page* |
| This is the main page of the site in its initial state. |

| ![Trainer Page](/readme_assets/user_input_state_loggedin.png) |
| :--: |
| *Trainer Page* |
| This is the main page after user interaction. |

| ![Account Page](/readme_assets/account_page.png) |
| :--: |
| *Account Page* |
| This is the account page displaying user's saved hands. |

## API References
### Users

```http
  POST /users/signup
```


| Parameter | Type | Description |
| --------- | ---- | ----------- |
| `username` | `varchar` | **Required**. Your username. |
| `password` | `varchar` | **Required**. Your password. |

```http
  POST /users/login
```


| Parameter | Type | Description |
| --------- | ---- | ----------- |
| `username` | `varchar` | **Required**. Your username. |
| `password` | `varchar` | **Required**. Your password. |
| `token` | `string` | **Required**. Bearer token. |

```http
  GET /users/account
```


| Parameter | Type | Description |
| --------- | ---- | ----------- |
| `token` | `string` | **Required**. Bearer token. |

### Hands

```http
  GET /hands
```


| Parameter | Type | Description |
| --------- | ---- | ----------- |
| `token` | `string` | **Required**. Bearer token. |

```http
  POST /hands
```


| Parameter | Type | Description |
| --------- | ---- | ----------- |
| `token` | `string` | **Required**. Bearer token. |
| `player_cards` | `json` | **Required**. Value and suit keys object. |
| `table_cards` | `json` |  **Required**. Value and suit keys object. |
| `outcome` | `integer` | **Required**. Your outcome of the round. |

## Installation 
In order to run this project on developer environment, install [this project](https://github.com/m2bhatt/poker-buddy-react) for the front end. 

```bash 
npm install poker-buddy-react 
cd poker-buddy-react
cp .env.sample .env
npm run dev
```

For the backend, install [Poker Buddy Server](https://github.com/m2bhatt/poker-buddy-server). 

```bash
npm install poker-buddy-server
cd poker-buddy-server
cp .env.sample .env
```

After copying the env file, replace all the expected values. 

```bash
npm run start 
```

## Next Steps
1. Animate cards when they're added to the Pocket Hand, and Table Cards. 
2. Animate card when they're saved to the account. 
3. Add other players to the board, including the chance of winning when additional players are added. 
4. Ability to write notes when saving each round. 
5. Ability to sort your saved plays by date and outcome.
6. Paginate the front end and API calls in the back end to only display 10 saved hands at a time. 
7. Ability for the user to retrieve cards from their account to the poker trainer page to review the probability 


