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
    - [Category Endpoints](#category-endpoints)
        - [Get All Categories](#get-all-categories)
        - [Get Category](#get-category)
        - [Create Category](#create-category)
        - [Update Category](#update-category)
        - [Delete Category](#delete-category)
    - [Subcategory Endpoints](#subcategory-endpoints)
        - [Get All Subcategories](#get-all-subcategories)
        - [Get Subcategory](#get-subcategory)
        - [Create Subcategory](#create-subcategory)
        - [Update Subcategory](#update-subcategory)
        - [Delete Subcategory](#delete-subcategory)S
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


### Category Endpoints

#### Get All Categories
- **URL:** `/categories`
- **Method:** `GET`
- **Description:** Gets all categories.
- **Response Body:**
    - `categories`: Array of category objects
        - `id`: String
        - `name`: String
        - `description`: String

#### Get Specific Category
- **URL:** `/categories/{id}`
- **Method:** `GET`
- **Description:** Gets a category by id.
- **Response Body:**
    - `category`: Array with one category object
        - `id`: String
        - `name`: String
        - `description`: String

#### Create Category
- **URL:** `/categories`
- **Method:** `POST`
- **Description:** Creates a new category.
- **Request Headers:**
    - `Authorization`: Bearer {jwt token}
- **Request Body:**
    - `name`: String
    - `description`: String
    - `image`: Image file
- **Response Body:**
    - `message`: String
    - `category`: Object
        - `id`: String
        - `name`: String
        - `description`: String

#### Update Category
- **URL:** `/categories/{id}`
- **Method:** `PUT`
- **Description:** Updates a category by id.
- **Request Headers:**
    - `Authorization`: Bearer {jwt token}
- **Request Body:**
    - `name`: String
    - `description`: String
    - `image`: Image file or same image path if no change
- **Response Body:**
    - `message`: String
    - `category`: Object
        - `id`: String
        - `name`: String
        - `description`: String
        - `image`: String

#### Delete Category
- **URL:** `/categories/{id}`
- **Method:** `DELETE`
- **Description:** Deletes a category by id.
- **Request Headers**
    - `Authorization`: Bearer {jwt token}
- **Response Body:**
    - `message`: String
    - `category`: Object
        - `id`: String
        - `name`: String
        - `description`: String
        - `image`: String


### Subcategory Endpoints

#### Get All Subcategories
- **URL:** `/subcategories`
- **Method:** `GET`
- **Description:** Gets all subcategories.
- **Response Body:**
    - `subcategories`: Array of subcategory objects
        - `id`: String
        - `name`: String
        - `description`: String
        - `category`: String


#### Get Specific Subcategory
- **URL:** `/subcategories/{id}`
- **Method:** `GET`
- **Description:** Gets a subcategory by id.
- **Response Body:**
    - `subcategory`: Array with one subcategory object
        - `id`: String
        - `name`: String
        - `description`: String
        - `category`: String


#### Create Subcategory
- **URL:** `/subcategories`
- **Method:** `POST`
- **Description:** Creates a new subcategory.
- **Request Body:**
    - `name`: String
    - `description`: String
    - `category`: String
- **Response Body:**
    - `message`: String
    - `subcategory`: Object
        - `id`: String
        - `name`: String
        - `description`: String
        - `category`: String


#### Update Subcategory
- **URL:** `/subcategories/{id}`
- **Method:** `PUT`
- **Description:** Updates a subcategory by id.
- **Request Body:**
    - `name`: String
    - `description`: String
    - `category`: String
- **Response Body:**
    - `message`: String
    - `subcategory`: Object
        - `id`: String
        - `name`: String
        - `description`: String
        - `category`: String


#### Delete Subcategory
- **URL:** `/subcategories/{id}`
- **Method:** `DELETE`
- **Description:** Deletes a subcategory by id.
- **Response Body:**
    - `message`: String
    - `subcategory`: Object
        - `id`: String
        - `name`: String
        - `description`: String
        - `category`: String
