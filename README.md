## CabinGo
## Table of Contents

1. [General Info](#general-info)
2. [Wiki-Documentation](#wiki-documentation)
3. [Technologies](#technologies)
4. [Installation](#installation)
5. [Collaboration](#collaboration)
6. [Images](#images)



### General Info
***
# CabinGo
CabinGo is an application where users can post spots to host or book spots.
* Link to live  [CabinGo](https://cabingo.herokuapp.com/) project.



#### CabinGo Home page
![CabinGo HomePage](https://user-images.githubusercontent.com/30273596/149457758-9b84a182-42e1-4d08-9f08-0a09b11f1d5c.PNG)


#### Spot Details
![CabinGo SpotDetails](https://user-images.githubusercontent.com/30273596/149457787-e8d90fe0-a39e-4a72-9764-8d6f9da0ee9e.PNG)


#### All Spots
![CabinGo AllSpots](https://user-images.githubusercontent.com/30273596/149457768-1f6cd13e-a586-4b78-82ff-e7a9f4227974.PNG)


#### CabinGo Login page
![CabinGoLoginPage](https://user-images.githubusercontent.com/30273596/149457777-c6b7b653-df4e-4587-a406-be0824e46746.PNG)


#### CabinGo Sign up page
![CabinGoSignUpPage](https://user-images.githubusercontent.com/30273596/149457784-7132be64-1a4f-4018-9c45-e00f9140244e.PNG)


## Wiki Documentation:
***
* [Home](link)
* [Database Schema](link)
* [MVP Feature List](link)

## Technologies
***
Technologies used within the project:
* [bcryptjs](https://www.npmjs.com/package/bcrypt): Version 2.4.3
* [cookie-parser](https://www.npmjs.com/package/cookie-parser): Version 1.4.6
* [csurf](https://www.npmjs.com/package/csurf): Version 1.11.0
* [cors]() Version 2.8.5
* [debug](https://www.npmjs.com/package/debug): Version 2.6.9
* [express](https://expressjs.com/en/4x/api.html#express): Version 4.17.2
* [express-validator](https://express-validator.github.io/docs/): Version  6.14.0
* [express-async-handler]() Version 1.2.0
* [helmet](): Version 5.0.1
* [jsonwebtoken]() Version 8.5.1
* [morgan](https://www.npmjs.com/package/morgan): Version 1.10.0
* [per-env](): Version 1.0.2
* [pg](https://www.npmjs.com/package/pg): Version 8.7.1
* [sequelize](https://sequelize.org/master/class/lib/sequelize.js~Sequelize.html): Version 5.22.5
* [sequelize-cli](https://sequelize.org/master/class/lib/sequelize.js~Sequelize.html): Version 5.5.1
* [dotenv](https://www.npmjs.com/package/dotenv): Version 10.0.0
* [dotenv-cli](https://www.npmjs.com/package/dotenv-cli): Version 4.1.1
* [nodemon](https://www.npmjs.com/package/nodemon): Version 2.0.15
* React
* Redux
* Postgres
* Sequelize
* SQL
* Heroku

## Languages
***
* JavaScript
* CSS


## Installation
To install CabinGo on your local machine please clone the project repository. Once the project has been cloned run ```npm install``` in your terminal to install dependencies.
```
 git clone https://github.com/GoodWillHunting11/CabinGo.git
 cd backend
 npm install
 npm start
```
 Once the project has been clonde cd into the frontend and run ```npm install``` in your terminal to install the frontend dependencies.
```
 cd frontend
 npm install
 npm start

```

To use the application in a development environment use ```npm start``` in the frontend and the backend to start the application..


## Collaboration
  This project was developed by Aaron Short. Below are the top two features of the project and a brief descriptions of challenges faced during the one week developmet cycle.
#### Highlight features:
* Rendering Amenities: The implementation of rendering amenities displays only the amenities that return true for the spot that was created. This feature was implemented using optional chaining and a few nested ternarys.
* Edit Spot Form: The edit spot form allows you to edit details of a certain spot only if the logged in user who created that spot is logged in. This feature was implemented using redux and local storage to keep state on a refresh.  Every detail of the spot can be updated without a rerender using react.

#### Challenges:
* This project did not require me to keep state on refreshes but I decided for better user experiments to implement it. For this I had to do some research into optional chaining on components that depended on state and local storage.
* During the styling phase it was a little more difficult to style elements that were using state and learning their behaviors to flow smoothly with the normal elements.
* Correlating the backend with the store and the frontend. There was a learning curve for how the data flowed and learning the pattern of this flow. Ultimatley it came down to using console.log to understand how each section communicated with eachother.

## Images
#### Using Local Storage to Persist State
![CabinGo localstorage](https://user-images.githubusercontent.com/30273596/149392084-185d183d-9381-432f-ba3f-7dec4953f0c7.PNG)


#### Rendering Certain Amenities
![CabinGo ternary](https://user-images.githubusercontent.com/30273596/149392100-f2d1d3a6-4367-4114-9ee9-8238ad64ea42.PNG)


#### Thunks Used For Edit, Delete, and Post
![CabinGo Thunk](https://user-images.githubusercontent.com/30273596/149392144-022ffb6b-0fd1-426c-9629-236f5c93fc47.PNG)
