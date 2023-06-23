# 🎬 Movie Ticket Booking App

![App Screenshot](screenshot.png)

This is a movie ticket booking application built with React. Users can log in using Auth0 with Google 📧 and GitHub 🐙 accounts. Once logged in, they can view their ticket if it is available. Otherwise, they can see their user details fetched from Auth0 and book a new ticket.


## Technologies Used

- React ⚛️
- HTML/CSS 🎨    
- JavaScript 🚀
- Auth0 for authentication 🔐
- React Router for routing 🌐


## Screenshots

Include a screenshot of your application here to give users a visual representation of the project.

## Getting Started


To run the application locally, follow these steps:

1. Clone the repository:

   bash
   git clone https://github.com/your-username/movie-ticket-booking-app.git



2. Install the dependencies:

   bash
   cd movie-ticket-booking-app
   npm install




3. Set up Auth0:

   - Create an account on the Auth0 website.
   - Configure your Auth0 application with the necessary settings for Google and GitHub login providers.
   - Obtain the required client credentials (client ID and client secret) and configure them in the application.

4. Set up the API:

   - The application uses an API hosted at https://my-json-server.typicode.com/nileshkr17/api-bookmyshowSELF.
   - Make sure the API is up and running before starting the application.



5. Start the development server:

   bash
   npm start
   

6. Open the application in your browser:

   bash
   http://localhost:3000
   

## Features

- User authentication with Auth0 🔒
- Movie selection based on user location 🌍
- Ticket generation with seat details 🎟
- Ability to download the ticket with a user-friendly UI 💻
