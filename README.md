# Poker Buddy

## Overview
Poker Buddy is a poker trainer app designed to help new players understand the ranking of Poker Hands and their chances of winning against one opponent. Users can select and save their dealt cards, the table cards, and the outcome of each round.

## Features
1. Register and sign in to your account. 
2. Select hand cards and table cards. 
3. Calculate chance of your Poker Hand winning against one opponent. 
4. Save your hand cards, table cards, and outcome of each round. 
5. Reset the hand cards, table cards, outcome, and winning chances. 
6. Review saved hands on the account page. 

## Implementation

### Tech Stack

#### Front End 
- React 
- Sass 

#### Back End 
- Express
- MySQL

#### Authentication
- JWT


#### Client Libraries:  
- react  
- react-router  
- axios

#### Server libraries  
- knex  
- express  
- dotenv  
- bcryptjs

#### External Packages
- [Poker odds calculator package](https://www.npmjs.com/package/unknown-poker)

## Demo 

[Watch the demo](https://github.com/m2bhatt/poker-buddy-react/blob/main/public/demo.mov)

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

After copying the env file, replace all the expected values, and run the server using the following. 

```bash
npm run start 
```

## Next Steps
1. Add support for multiple opponents and calculate winning chances based on number of opponents. 
2. Add pagination on the frontend and in API calls to display 10 saved hands at a time.
3. Animate cards when added to the Pocket Hand and Table Cards. 
4. Animate cards when saved to the account.
5. Enable users to write notes when saving each round. 
6. Implement sorting of saved plays by date and outcome.
7. Allow users to retrieve saved cards from their account to the poker trainer page for review. 
