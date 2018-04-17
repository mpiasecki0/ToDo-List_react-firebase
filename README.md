# ToDo-list with React + Firebase
This project is a simple todo-list made with react that provides synchronized realtime data through the firebase-DB back-end.

# Why React and Firebase?
Firebase is a "free" cloud-based realtime database hosted by Google. It not only synchronizes the data for all of your clients but also has tools for authorization and high scalability ($$$!) as most cloud-based systems do. Since my main goal was to make a simple synchronized todo-/ shopping list, I had two options: I either code the synchronization myself with javascript which is very complicated and time-consuming ```OR``` I use a tool which does it for me. Firebase meets that criteria and is also fairly simple to use and has a great documentation (as expected from Google) with many tutorials which was also one of the main reasons why I chose it.

As for React... well, I needed some sort of declarative "front-end, simple to create and render data to the UI"-Library which fortunately enough, fits Reacts description perfectly. Since React is declarative the code is fairly clear and also simple to understand and debug which helps a lot throughout development.

# Prerequisites
You need Node.js 6 or higher for this project to function properly. You can get it for free from here: https://nodejs.org/en/

# Getting the Project up and running
First of all, you need to install all the dependencies and packages that are essential for the program to run. Therefore, you need to use  ```npm install``` to initialize the project with all its resources. Afterwards, you can use ```npm start``` to start your web service and access it via ```localhost:3000```. Remember that you don't need to worry about anything that is back-end reliant since Firebase is hosted by Google through the cloud and does everything for you.

# Building and customizing
To edit any front-end visuals you just need to edit the respective .css File. The css files usually have the same name as the .js File that handles most of the logic and data transfer.

You can also customize the fonts of the website and make it more fancy by updating the index.css file and providing a valid google fonts link, the rest is done automatically for you. To generate a font-link use this website: https://fonts.google.com/

To add even more functionalities you can look up the firebase documentation: https://firebase.google.com/docs/. I myself used many of the provided code snippets and tutorials to build and personalize this application.
