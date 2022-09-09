### Dixit Fullstack challenge

# Log of decisions and relevant info

by Pablo Luciano Panza\
pablolucianop@gmail.com

I had a lot of software maintenance to do for Aecom S.A., the company where I work at the moment. I used any spare time I had left to complete this challenge. I learned a few things along the way, I hope you like it.

## Check it out

Public repository
https://github.com/pablolucianop/login-plp

download the entire proyect here:
https://drive.google.com/file/d/12tazSwSB-DSQgPfrAchDXla47nMwQ2PR/view?usp=sharing

It runs in an Express server.
Run the server in /api, port 9000

## How it was made

I created a React app and some basic components, then created a server with Express and connected them.\
Used bcrypt and jsonwebtoken and dotenv for authentication and authorisation purposes.\
React Router v6 for url management.

## First page: /login

✔️ If the user enters a valid mail, then the password input shows up. \
✔️ If the email and password are valid, this endpoint ‘/api/v0/authenticate’ returns a working jwt token \
✔️Decided to modify the passwords in users.js to hashed ones, and compare them with bcrypt.\
🔲 Didn’t implement mongodb databada, the users are stored in ‘devMockup’ folder, in api/ .

## Second page: /user-info

✔️ Use the token to fetch the user info and show the user info in a new page using ‘/api/v0/users/me’ endpoint.\
✔️ Implemented React Router v6 to mangare urls.\
✔️ Validate email vs password, and to fetch the user info with function ‘getUserData’

## Bonus points

✔️ Create a basic node app with two endpoints and the users.js file to validate the front-end requests. \
✔️ Handle errors in both front pages\
 Wrong email / password\
 Get user info with an invalid token (i.e. token="not-a-valid-token")\
🔲 Didn’t store the user token so if the user refresh the page there is no need to log in again.\

## Extra Bonus Points\

✔️Use jwt.io to generate valid tokens for the user.\
🔲 Didn’t use mongodb to store the users.

## Github repo

You can check the repository at:\
https://github.com/pablolucianop/login-plp/
