# Raceroot

## Demo link:

Access raceroot site at [raceroot.vercel.app](https://raceroot.vercel.app/)

## Table of Content:

- [About The App](#about-the-app)
- [Screenshots](#screenshots)
- [Technologies](#technologies)
- [API Endpoints](#api)
- [Setup](#setup)
- [Status](#status)

## About The App

Raceroot is a lively online forum created for lively conversations and quick sharing of brief messages in a friendly digital community. The platform is designed to be user-friendly, allowing users to easily take part in discussions. Additionally, Raceroot includes authentication features, ensuring a secure and personalized experience for users.

## Screenshots

![Images](/frontend/screenshots/raceroot.png)

## Technologies

Client: `React`, `Axios`, `Vite`, `ESLint`, `React Hook Form`, `React Toasitfy`, `React Router`, `Tailwind CSS`, `Tailwind Merge` <br>
Server: `Node.js`, `Express.js`, `Mongoose` <br>
Database: `MongoDB`

<a name="api"></a>

## API Endpoints

https://documenter.getpostman.com/view/19180706/2sA2rFTLw2

<a name="setup"></a>

## Setup

### Client Setup

1. Download all modules

```
$ cd frontend
$ npm i
$ npm run dev
```

### Server Setup

1. Download all modules

```
$ cd backend
$ npm i
$ npm start
```

2. Create and configure `config.env` file in backend folder:

```env
NODE_ENV=development
PORT=3000

DATABASE=
DATABASE_LOCAL=
DATABASE_PASSWORD=

JWT_SECRET=
JWT_EXPIRES_IN=            // 90d is recommended
JWT_COOKIE_EXPIRES_IN=     // 90 is recommended
```

## Status

Raceroot is still in progress. Many features are still to come like:

- Liking / disliking posts & comments
- Private Messages
- Searchbar

## License

MIT License @ [szyi](https://www.szyi.xyz)
