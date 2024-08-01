# Raceroot

## Overview

This repository contains the code for the Raceroot application, including frontend and backend. <br>
**Raceroot** is fullstack application for online forum & blog for racing community.

Access raceroot site at [raceroot.vercel.app](https://raceroot.vercel.app/)

![Images](/client/public/images/feed.jpg)


## Project Structure

```bash
/raceroot
    /client     # React + Tailwind CSS
    /backend    # Node.js + Express + MongoDB
```

## Technologies

- **Frontend:** React, Tailwind CSS, React Hook Form, React Router
- **Backend:** Node.js, Express.js, PostgreSQL, MongoDB
- **Hosting:** Vercel, Render

## Installation

### Frontend

1. Navigate to the frontend directory:

```bash
cd client
```

2. Install dependencies:

```bash
npm install
```

3. Configure enviroment variables: <br>
    Create a `.env` file based on `.env.exmaple` and configure the variables.

4. Start the development server:

```bash
npm run dev
```

### Backend

1. Navigate to the frontend directory:

```bash
cd server
```

2. Install dependencies:

```bash
npm install
```

3. Configure enviroment variables: <br>
    Create a `.env` file based on `.env.exmaple` and configure the variables.

4. Start the development server:

```bash
node index.js
```

## Scripts

Each subproject (frontend, backend) has its own set of scripts for development, building and testing. Refer to their respective README.md files for more details.
