# Northcoders News Site

---

Project Overview

This project is a deloyed site to match and work with my own Northcoders News API (https://github.com/BrandonSeed/backend-project-nc-news).

This project gives the backend API a frontend to allow users to interact with the API in a user friendly maner similar to many popular social media sites.  

Minimum Node version: v22.9.0

---

Deployed Site

https://brandons-nc-news.netlify.app/

---

Instructions for Site use

At the moment of deployment, the site doesn't allow a user to log in so one has been hard coded in for purposes that require user validation.

Homepage -

-The Homepage displays all articles with most recently posted at default.

-Pressing the Home link will bring you back to this page and reset the topic, sort and order to this default.


-This page also includes dropdown menus for topics and sorts, selecting any of these will change the listed articles by the selection.

-Topics will limit the listed articles to the topic selected.

-Sort will change the listed articles to display in order of the sort selected.

-Clicking the order button will switch between 'Desc', descending, or 'ASC', ascending.

-Clicking on any of the the 'Go to Article' links will load a new page with a more detailed display of the selected article.

Article Page -

-This page will display more details of the selected article mainly including the body of the article along with comments made on the article from other users.

-The 'Up votes' and 'Lower Votes' buttons can be clicked to increase or decrease the votes of the article respectively.

-A comment can be posted to the article by entering anything into the textbox and clicking the 'Post my comment' button, this can only be done with a logged in user and with something entered into the textbox.

-Comments by the logged in user can be deleted by pressing the 'Delete Comment' button, this can only be done on the comments made by the logged in user. 

---

Locally running

To run this project locally, clone and open up the code in your chosen editor.

Run 'npm install' or 'npm i' in ther terminal to insatll the necessary packages to run the project.

Run 'npm run dev' to locally host the project and then click the link shown in the terminal to view the site.

---

This portfolio project was created as part of a Digital Skills Bootcamp in Software Engineering provided by [Northcoders](https://northcoders.com/)