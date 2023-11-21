# Forkify API
## Table of Contents
1. [Introduction](#introduction)
2. [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)
3. [API Endpoints](#api-endpoints)
    - [User Endpoints](#user-endpoints)
        - [Signup](#signup)
        - [Login](#login)
    - [Recipe Endpoints](#recipe-endpoints)

---
## Introduction
This is the API for the Forkify application. It is built using Node.js, Express.js, and MongoDB.

---
## Getting Started
### Prerequisites
- [Node.js](https://nodejs.org/en/)

### Installation
1. Clone the repository
```git clone https://github/Fadyy22/forkify_node_api.git```
2. Navigate to the project directory
```cd forkify_node_api```
3. Install dependencies
```npm install```
4. Create a config.env file in the root directory and add the following:
```Contact for the config.env file```
5. Start the server
```npm start```

---
## API Endpoints
### User Endpoints

#### Signup
- **URL:** `/signup`
- **Method:** `POST`
- **Description:** Creates a new user.
- **Request Body:**
    - `name`: String
    - `email`: String
    - `password`: String
- **Response Body:**
    - `userId`: String
    - `message`: String

#### Login
- **URL:** `/login`
- **Method:** `POST`
- **Description:** Logs in a user.
- **Request Body:**
    - `name`: String
    - `email`: String
- **Response Body:**
    - `userId`: String
    - `token`: String


### Recipe Endpoints
