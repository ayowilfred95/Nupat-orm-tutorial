please check the Project.md file for project details and description.


To start this project
## Run "npm install" to install all the dependencies

### Elephantsql is used in place of docker to connect postgresql

#### check the  .env file, this file shows the database set-up parameters in the database.js file in config folder


### After installing the dependencies

1.  create a .env file and paste these variables into it
PORT=5000
DB_PASSWORD=
DB_USER=
DB_NAME=
DB_PORT=5432
DB_HOST=
JWT_SEC=mysecretjwtcodethatiwishtoused

// if you are using docker, replace your DB_HOST=localhost
// i.e DB_HOST=localhost

2.  head on to supabase.com and create a new project after signing up, create a database and replace the .env variables with the database parameters you created on supabase


3  run npm start to start the project after all these configuration


4.  In your controller handler file. create a delete user ,update user and get all users functions and route

