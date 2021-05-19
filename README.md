# React-Helmes

A simple React helmes app that displays user information.


## Getting started

- Run the helmes spring boot application locally. The project should start in http:localhost:8080/
- Run `npm install` then `npm start` command in your terminal.
- The project will start in http://localhost:3000 and UI page will pop-up.
- That's all!, now enter details of user information.

## Assumptions

- The ui will only store and update records in the table.
- In order to update the record, the name should be same, the sector can change. If the name is      different, then new record will be entered in the database.

## .env.local

In this file, I configured the URL of helmes api spring boot project. Whichever the port you are using to run spring boot project, please configure this file accordingly.

```sh
REACT_APP_API_URL = 'http://localhost:8080'
```

