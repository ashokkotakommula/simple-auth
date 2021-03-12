# simple-auth
Demo: https://authen-basic.herokuapp.com/

this project consists of client and server. server contains model, controller, router and server file. 
client consists of components and pages, all pages are included in Mainpage.js.

Initially in homepage contains signup and signin buttons, when user clicks on buttons it will navigate to respecive route, when user fills email and passowrd in signup it gives successful signup if email and passowrd valid and this email should be unique otherwise it throws error "email alredy exist".
when click on login a token will set in localstorage so we can not navigate to previous pages and we can not relogin many times. when click on logout button in welcome page token will be cleared from localstorage and it will navigate home page. 



*Fetching user data from mongodb giving error, when hosted in heroku. most people faced this issue, I'll try to fix this issue. It works perfectly in locally.
