# Mini Project - Movie Town Review 
    A user-friendly platform for movie enthusiasts to share their reviews and for admins to manage movie listings

    FrontEnd - React MUI
    BackEnd - Express JS, Maria DB
    Integration - Axios, React Query

This repository contain backend and frontend

# Movie Town Review

### All of the responses will be wrapped with this data before sending
| Parameter | Type | Description |
|-----|:----:|:-----|
| success| boolean | the status of request|
| message | string | message for each request |
| data | JSON | the actual data |

## Database schema
![Database schema](https://i.pinimg.com/originals/0c/6e/29/0c6e2916892b204fed2b4a062b10705d.png)


## To run the frontend and backend in developmode 
use
```
    npm run start
```


## Key Features

- **User Registration and Authentication**: Users can create accounts and log in to the application to access the full range of features.

- **Movie Listings**: The application provides a comprehensive collection of movies, including details such as title and description.

- **User Reviews**: Registered users can share their thoughts and write reviews for movies they have watched. 


- **Admin Functionality**: Administrators have special privileges to manage the movie listings. They can add new movies, update existing movie details, and delete movies if necessary. 

- **Search and Filtering**: Users can search for specific movies based on keywords making it easier to find movies of interest.

- **User-Friendly Interface**: The application features an intuitive and responsive user interface, making it easy for users to navigate, explore movies, read and write reviews.

## Project Structure

### User

- `src/`: Contains the source code files for the application.
  - `components/`: Contains React components used in the application.
    - `Register.jsx`: Component for user registration.
    - `Login.jsx`: Component for user authentication.
    - `Home.jsx`: Homepage component.
    - `MovieDetail.jsx`: Component for displaying details of a movie.
    - `MovieList.jsx`: Component for displaying a list of movies based on search criteria.
    - `NewRelease.jsx`: Component for displaying a list of recently released movies.
    - `TopMovie.jsx`: Component for displaying a list of top-viewed movies.
    - `AllMovie.jsx`: Component for displaying all movies.
    - `UserProfile.jsx`: Component for user profile information.
    - `FileNotFound.jsx`: Component for rendering a "404 Not Found" page.


# Admin
- `AdminHome.jsx`: Dashboard component for administrative tasks.
- `AdminAdd.jsx`: Component for adding new movies to the system.
- `AdminUpdate.jsx`: Component for updating the details of a specific movie.
- `AdminRegister.jsx`: Component for registering new administrators.
- `AdminLogin.jsx`: Component for authentication.

## Available Endpoints/Routes

- `/`: Renders the `Home` component.
- `/login`: Renders the `Login` component for user authentication.
- `/register`: Renders the `Register` component for user registration.
- `/detail`: Renders the `MovieDetail` component, possibly for displaying details of a specific movie.
- `/search`: Renders the `MovieList` component, which displays a list of movies based on search criteria.
- `/profile`: Renders the `UserProfile` component for viewing and editing user profile information.
- `/adminHome`: Renders the `AdminHome` component, a dashboard for administrative tasks.
- `/adminAdd`: Renders the `AdminAdd` component for adding new movies to the system.
- `/adminUpdate/:movieId`: Renders the `AdminUpdate` component for updating the details of a  movie.
- `/adminRegister`: Renders the `AdminRegister` component for registering new administrators.
- `/adminLogin`: Renders the `AdminLogin` component for  authentication.
- `/newRelease`: Renders the `NewRelease` component, a list of recently released movies.
- `/top`: Renders the `TopMovie` component, a list of top-rated movies.
- `/all`: Renders the `AllMovie` component, displaying all movies in the system.
- `/*`: Renders the `FileNotFound` component for any undefined routes.




