# Name of Project

π  Sign Up Form by Jessy π 

## Table of contents

- [The assignment](#the-assignment)
- [My process](#my-process)
  - [Built with](#built-with)
  - [Run the app](#run-the-app)
  - [Continued development](#continued-development)

### The assignment

The assignment was to build out a sign up form that could do the following:

=> Build a production ready sign-up form page.
β’ The form should allow users to enter first name, last name, email, and password.
β’ All fields are required and validated.
β’ Password validation:
β’ Should be a minimum of 8 characters,
β’ Should contain lower and uppercase letters
β’ Should not contain userβs first or last name.
β’ The valid form should send two sequential requests:
β’ POST form data to https://demo-api.now.sh/users
β’ Wait 4 seconds
β’ GET from https://demo-api.now.sh/users

## My process

Steps I've taken to build this sign up form:

Step 1) Writing down the steps (15-20 mins)
A) I discovered that the app has the following phases:
π input field validation
π form validation upon submit
π posting form data to api
π getting from data from api
π navigate the user a succesful sign up

B) Decided what the MVP would be for me, important points:
π Look and feel of Rabobank
π Signup user and giving errors if input was not correct
π Being referred to the next stage when all fields + form are valid

C) Wrote down a list of things to research for phases

Step 2) Started building the layout + styling

Step 3) Research and building Fields validation

Step 4) Research and building Form validation

Step 5) Research and building Post / Get data functionality with axios

Step 6) Research and building routing with react-router-dom to next page.

Step 7) Finish everything and looking where to clean up / prioritse things.

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- [React](https://reactjs.org/) - JS library
- axios
- react-router-dom

### Run the App

By using the command `npm start`

### Continued development

For future release or next stage, I'd suggest to:

π Better separate of concerns at field validation functionality
π Consider making own custom React Hook to make things easier
π Considering more regarding user's privacy and data, since this site is for a bank
π Example: "This email already exists"

- that would be relevant for (future) field validation but is user data sensitive
  π Am curious about the GET request, since I only got Jane Doe out of it - even though I successfully posted my own user.

### End

Thank you!
