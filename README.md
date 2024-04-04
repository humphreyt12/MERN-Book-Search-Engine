# MERN-Book-Search-Engine

## Table of Contents
 * [Description](#Description)
 * [User-Story](#User-Story)
 * [Website-Link](#Website-Link)
 * [Installation](#Installation)
 * [Usage](#Usage)
 * [License](#License)

# Description

Refactor  starter code with a fully functioning Google Books API search engine built with a RESTful API, and refactor it to be a GraphQL API built with Apollo Server. The app was built using the MERN stack with a React front end, MongoDB database, and Node.js/Express.js server and API. 

## User Story

```md
AS AN avid reader
I WANT to search for new books to read
SO THAT I can keep a list of books to purchase
```

# Website-Link

This project was deployed using Render. ([Click here to view the webiste](https://mern-book-search-engine-txq7.onrender.com))

## Installation

Run the following command to install the dependencies, `npm i` in the root folder, server folder, and client folder:

root:
    "@apollo/react-hooks"

client:
    "bootstrap"
    "jwt-decode" 
    "react"
    "react-bootstrap"
    "react-dom"
    "react-router-dom"

server:
    "@apollo/server"
    "bcrypt"
    "express"
    "graphql"
    "jsonwebtoken"
    "mongoose"

## Usage

To use this application run the following command, `npm run build`, then follow the criteria: 

```md
GIVEN a book search engine
WHEN I load the search engine
THEN I am presented with a menu with the options Search for Books and Login/Signup and an input field to search for books and a submit button
WHEN I click on the Search for Books menu option
THEN I am presented with an input field to search for books and a submit button
WHEN I am not logged in and enter a search term in the input field and click the submit button
THEN I am presented with several search results, each featuring a book’s title, author, description, image, and a link to that book on the Google Books site
WHEN I click on the Login/Signup menu option
THEN a modal appears on the screen with a toggle between the option to log in or sign up
WHEN the toggle is set to Signup
THEN I am presented with three inputs for a username, an email address, and a password, and a signup button
WHEN the toggle is set to Login
THEN I am presented with two inputs for an email address and a password and login button
WHEN I enter a valid email address and create a password and click on the signup button
THEN my user account is created and I am logged in to the site
WHEN I enter my account’s email address and password and click on the login button
THEN I the modal closes and I am logged in to the site
WHEN I am logged in to the site
THEN the menu options change to Search for Books, an option to see my saved books, and Logout
WHEN I am logged in and enter a search term in the input field and click the submit button
THEN I am presented with several search results, each featuring a book’s title, author, description, image, and a link to that book on the Google Books site and a button to save a book to my account
WHEN I click on the Save button on a book
THEN that book’s information is saved to my account
WHEN I click on the option to see my saved books
THEN I am presented with all of the books I have saved to my account, each featuring the book’s title, author, description, image, and a link to that book on the Google Books site and a button to remove a book from my account
WHEN I click on the Remove button on a book
THEN that book is deleted from my saved books list
WHEN I click on the Logout button
THEN I am logged out of the site and presented with a menu with the options Search for Books and Login/Signup and an input field to search for books and a submit button  
```

## License

This project uses a MIT license