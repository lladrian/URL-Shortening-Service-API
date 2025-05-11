# API Expense Tracker

A simple RESTful API that allows users to shorten long URLs. The API provide 
endpoints to CRUD operation for short URLs. It also provide statistics on the number 
of times a short URL has been accessed.


## Features
 The API should allow users to perform the following operations:
  - Create a new short URL
  - Retrieve an original URL from a short URL
  - Update an existing short URL
  - Delete an existing short URL
  - Get statistics on the short URL (e.g., number of times accessed)

## Tech Stack
  - Node.js with Express.js

## What I installed to this app

1. npm install express mongoose dotenv nodemon moment-timezone  express-async-handler shortid

## Installation

1. Make sure you have [Node.js](https://nodejs.org) installed.

2. Clone or download this project.

3. First you need to install using **`npm i`** in terminal.

4. To run use this command : **`npm start`**
    - Usage:  `http://localhost:4000/shorten`
      - Search via Web: 

          ## USER
          - **POST** - **`http://localhost:4000/shorten`** to add new user.
          - **GET** - **`http://localhost:4000/shorten/:short_code`** to get all users.
          - **GET** - **`http://localhost:4000/shorten/:short_code/stats`** to get all users.
          - **PUT** - **`http://localhost:4000/shorten/:short_code`** to get the untokenized data from the user.
          - **DELETE** - **`http://localhost:4000/shorten/:short_code`** to get all users.


5. https://roadmap.sh/projects/url-shortening-service

