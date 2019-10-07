# ToDo-list with React & Firebase
This project is a simple todo-list made with React that provides synchronized realtime data through the Firebase-DB back-end.

# Why React and Firebase?
Firebase is a "free" cloud-based realtime database hosted by Google. It not only synchronizes the data for all of your clients but also has tools for authorization and high scalability ($$$!) as most cloud-based systems do. Since my main goal was to make a simple synchronized todo-/ shopping list, I had two options: I either code the synchronization myself with javascript which is very complicated and time-consuming ```OR``` I use a tool which does it for me. Firebase meets that criteria and is also fairly simple to use and has a great documentation (as expected from Google) with many tutorials which was also one of the main reasons why I chose it.

As for React... well, I needed some sort of robust front-end technology and I wanted to try something new so I went with React. Integrating Firebase is also a child's play. You only need to import the Firebase API and use it's self explandatory commands such as bind/push/pull etc. 

# Data Interaction and Application Structure & Firebase Project Setup
This application structure should be familiar. The front- and back-end .js files are in separate directories. You can find all the code in the ```src``` Folder although the front-end files are in separate directories inside of it. The ```App.js``` is the "Database-Handler" which connects the front-end to the Database back-end and holds all your CRUD-Operations while allocating all the necessary data from one place to the other. Next off there is a Config directory which holds the very important ```config.js```. This file initializes your Firebase-DB project (it includes your database) which you first have to create through the official firebase website. Don't worry, it's free! https://firebase.google.com/products/realtime-database/ After you created your realtime database you will get access to an API Key and some other credentials. You need to paste those infos into the ```config.js``` to let Firebase know, where the data needs to go. Last but not least, all the other front-end files are located in separate folders like for example ```Note```. This directory will hold a ```Note.js``` and ```Note.css``` file which handles all the front-end interactions like user-input and saving data inside of variables that are then passed onto the ```App.js``` file. Finally, there is a ```static``` directory which holds all the images used on the website.

# Prerequisites
You need Node.js 6 or higher for this project to function properly. You can get it for free from here: https://nodejs.org/en/

# Getting the Project up and running
First of all, you need to install all the dependencies and packages that are essential for the program to run. Therefore, you need to use  ```npm install``` to initialize the project with all its resources. Afterwards, you can use ```npm start``` to start your web service and access it via ```localhost:3000```. Remember that you don't need to worry about anything that is back-end reliant since Firebase is hosted by Google through the cloud and does everything for you.

# Building and customizing
To edit any front-end visuals you just need to edit the respective .css File. The css files usually have the same name as the .js File that handles most of the logic and data transfer.

You can also customize the fonts or containers of the website and make it more fancy or personal by updating the index.css file and providing a valid google fonts link, the rest is done automatically for you. To generate a font-link use this website: https://fonts.google.com/

To add even more functionalities you can look up the firebase documentation: https://firebase.google.com/docs/. I myself used many of the provided code snippets and tutorials to build and personalize this application.
