# SW Mini Project
Objective: Create a chat app using react

Team members: Khang Le and Marybel Boujaoude

Technologies used: React, Visual Studio Code, JavaScript, .css styling files 

## Description
The Chat App with React is a real-time messaging application that facilitates seamless user communication. Built using the power of React, this app offers a user-friendly interface to make online conversations effortless and enjoyable.

### Sign-in page: 

<img width="800" alt="Screenshot 2023-09-19 at 11 18 27 AM" src="https://github.com/Khangxlei/EC463_Mini_Project/assets/91172956/cfd8b377-ca91-4af4-9de4-e298b227dd47">

### Main chat page: 

<img width="800" alt="Screenshot 2023-09-19 at 12 58 41 AM" src="https://github.com/Khangxlei/EC463_Mini_Project/assets/91172956/caf8b2a4-b276-4125-a3b7-d77666e293c2">

### Link to [demo video](https://drive.google.com/file/d/10pgVwTI59t4mTIqQv7qtJ8Ed07rdz_gs/view?usp=sharing)


## Design Decisions

### Purpose

The purpose of Chat App is to create a messaging platform that allows users to have a safe and secured experience of messaging with other people. The constraints we had was to allow users to create and log into an account through their Gmail, and once logged in, are able to search for different users within the system via their name or email, and have a private messaging conversation with them in real-time. 

### Architecture

Application utilizes Firebase that offers a couple of RESTful API's that stores users' data, such as their email, UID, and private messages (limited to timestamps of their most recent messages and the recepient for security purposes). For more details on how we implemented Firebase, please check the Github Wiki page. 
* Front-end languages: React, Javascript and CSS (Sass).
* Back-end languages: Python
* Databases: Firestore Realtime Database

### User Interface Design 

We decided to make the app predominantly light blue, as that is a nice, eye-pleasing color that separates our app from other popular chat applicaations such as Whatsapp and Facebook Messenger. For user-friendly designs, the Sidebar is located to the left, with the search bar on top of it, and the chat messaging window consists of 75% of the application window for ease of messaging, with the name of the recipient on top. 

### Chat Features

We incorporated image transfers within users' conversations, which can be simply done by clicking the attachment icon and select an image from your local desktop. Real-time messaging is also a feature in our app, as we utilized Firestore Realtime Database which updates user's messages within the database in real-time. Users are also able to search for other users in the system and select whom they would like to talk to. For more information on Firebase Console, please refer to our Github Wiki page. 


## Testing and Results

An advantage of working with React.js is the live preview on your browser. This enables us to whenever we change our code, even without saving it, React.js will automatically identify the changes in code and update it accordingly on the live preview. This tremendously helped out with testing and debugging. By thoroughly checking the live preview website, we exercised rigorous tests by:

- Making sure all routes to different pages worked seamlessly.
- Ensure all functions are working as intended (i.e. search bar searches for people, clicking on a user on the sidebar opens up the conversation, send button sends the message to the user and have it displayed as your own dark blue message compared to the other person which has a white bubble message)
- Search drop-down: the drop-down should display all people with the same name as the user’s search query, and that it displays their profile picture as well.
