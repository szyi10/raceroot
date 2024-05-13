# Raceroot Backend 
Raceroot MERN stack project.
- [Frontend Repository](https://github.com/szyi10/raceroot-frontend)
- [Backend Repository](https://github.com/szyi10/raceroot-backend)

## Demo link:
Access raceroot site at [raceroot.vercel.app](https://raceroot.vercel.app/)


## Table of Content:
- [About The App](#about-the-app)
- [API Endpoints](#api)
- [Technologies](#technologies)
- [Setup](#setup)


## About The App
The backend of [Raceroot](https://github.com/szyi10/raceroot-frontend) application is responsible for connecting the database with the frontend and providing essential API functionality.


<a name="api"></a>
## API Endpoints
https://documenter.getpostman.com/view/19180706/2sA2rFTLw2

## Technologies
The app is built using `Node.js`, `Express.js`, `Mongoose`.


<a name="setup"></a>
## [Client Setup](https://github.com/szyi10/raceroot-frontend?tab=readme-ov-file#raceroot-frontend) & Server Setup
1. Download all modules
```
$ npm i
$ npm start
```

2. Create and configure `config.env` file in root folder:
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
For client setup check README here: [Client Setup](https://github.com/szyi10/raceroot-frontend?tab=readme-ov-file#raceroot-frontend)


## License
MIT License @ [szyi](https://www.szyi.xyz)
