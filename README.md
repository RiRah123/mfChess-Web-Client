# mfChess Web Frontend
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)]()
[![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=white)]()
[![HTML](https://img.shields.io/badge/HTML-E34F26?style=for-the-badge&logo=HTML5&logoColor=white)]()
[![CSS](https://img.shields.io/badge/CSS-1572B6?style=for-the-badge&logo=CSS3&logoColor=white)]()

## ♟️ What is the mfChess?

<div style="text-align: center;">
  <div style="display: flex; justify-content: flex-end; align-items: center;">
    <img src="mfChess-front-page" alt="Image 1" style="margin-right: 10px;">
    <img src="mfChess-profile-page" alt="Image 2">
  </div>
  <div style="margin-top: 10px;">
    <img src="mfChess-board-page" alt="Image 3">
  </div>
</div>


Introducing mfChess, a cutting-edge React application designed to revolutionize the world of online chess. Built with Typescript, HTML, and CSS on the frontend, mfChess offers a seamless and immersive chess experience for players of all levels.

The repo serves as the frontend interface of mfChess, which presents a user-friendly page where chess enthusiasts can indulge in thrilling gameplay or effortlessly sign in using their Google account. By integrating with Google authentication, mfChess ensures convenient access while securely storing all user profile information.

One of the standout features of mfChess is its elo-based worldwide chess matchmaking system, allowing players to compete against opponents of similar skill levels. Engage in the classic standard rating chess game type and discover exciting challenges that push your strategic prowess to new heights.

Furthermore, mfChess incorporates a remarkable in-game analysis feature powered by Stockfish. Players can delve into the intricacies of their moves as well as their opponent's, enhancing their understanding of the game and sharpening their skills.

To personalize the experience, mfChess offers customizable user profiles where players can set their preferred profile picture, display name, and description. Additionally, these profiles act as a comprehensive repository, storing past games and providing a captivating narrative of one's chess journey.

mfChess is currently live at mfchess.com, offering a seamless and captivating online chess experience. The backend repository, which handles server-client handling and web socketing for the React app, can be found at the <a href="https://github.com/RiRah123/mfChess-Server">`mfChess-Server`</a> repo. Developers can explore the backend codebase and contribute to the project's growth.

## Dependencies
1. `NodeJS v18.13.0`
2. [`Better Comments VSCode Extension`](https://marketplace.visualstudio.com/items?itemName=aaron-bond.better-comments)

## Conventions
1. Use functional components and hooks
2. Minimize the amount of states
3. Use TypeScript
4. Use fragments instead of divs
5. See Comments tab below

## Comments
We'll use the Better Comments extension to write comments. Below is an example.
```
/**
 * updateUserElo
 * * Important information is highlighted.
 * ! Deprecated method, do not use.
 * ? Should this method be exposed in the public API?
 * TODO: refactor this method.
 @prop userID the logged in user's ID
 @prop gameID the ID of the match the user just played
 */
 const updateUserElo = function (userID: number, gameID: number): void {
  // ! Old method is deprecated. In process of changing
  ////let eloChange: number = oldGetEloFromGame(gameID);
  
  // * new method uses Glicko-2 rating system
  // TODO: write tests for elo function
  let eloChange: number = getEloFromGame(gameID);
  
  // * User interface defined in /schemas
  let userObject: User = getUserObject(userID);
  userObject.elo += eloChange;
  
  // ? Should we console.log the new elo afterwards?
 }
```

## Scripts

1. `yarn start`
  - Runs the app in the development mode.
  - Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

2. `yarn test`
  - Launches the test runner in the interactive watch mode.\

3. `yarn build`
  - Builds the app for production to the `build` folder.\
