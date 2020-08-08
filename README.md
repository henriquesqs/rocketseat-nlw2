![App interface](https://i.imgur.com/caFl24m.jpg)

<p align="center">
  <img src="https://github.com/henriquesqs/rocketseat-nlw2/workflows/Deploy%20Proffy/badge.svg">
</p>

# Rocketseat NLW 2
**[Next-level week](https://nextlevelweek.com/) 2** was a course provided by [Rocketseat](https://rocketseat.com.br/) in order to teach their students how to code using **react.js** with **node.js**. On this course, we've created **Proffy** to web (with responsive design) and mobile platforms. Proffy is a fictional service that allows teachers to offer lectures to students who are searching for online lessons.

# Summary
1. [Requisites](https://github.com/henriquesqs/rocketseat-nlw2#requisites)
2. [Instructions (server)](https://github.com/henriquesqs/rocketseat-nlw2#instructions-server)
3. [Instructions (web)](https://github.com/henriquesqs/rocketseat-nlw2#instructions-web)
4. [Instructions (mobile)](https://github.com/henriquesqs/rocketseat-nlw2#instructions-mobile)
5. [Notes](https://github.com/henriquesqs/rocketseat-nlw2#notes)

## Requisites
- You must have [npm](https://nodejs.org/en/) or [yarn](https://yarnpkg.com/) package manager in order to install the required packages. 
- Open a terminal and run `npm install` or `yarn install` to install dependencies.

## Instructions (server)
- Go to *server* folder;
- Run the app by using `npm start` or `yarn start`.
- **(IMPORTANT)** This server must be running on the same network as you're going to run web or mobile applications. By default, running this server on your machine on port 3333 and openning the [gihub-page of this repository](https://henriquesqs.github.io/rocketseat-nlw2/#/) will allow you to run the application with a server connection. 

## Instructions (web)
- Go to *web* folder;
- Run the app by using `npm start` or `yarn start`.

## Instructions (mobile)
- Download *expo* app from Play Store ou Apple Store;
- Go to *mobile* folder;
- Run the app by using `npm start` or `yarn start`. This shall starts *expo web DevTools*. Use your phone camera to scan the QR Code or connect your phone via adb to use the app on your cellphone.

## Notes
- This repo is automated with Github Actions. On every push and PR to master branch with changes on **web or server folder** (and only on these folder), github-pages is auto deployed and updated;
- To see the full behavior of this application, clone this folder and follow the instructions [above](https://github.com/henriquesqs/rocketseat-nlw2/#instructions-server) to start the local server. This app was made using port 3333 so be sure that this port is open on your firewall.
- By default, running the server on Windows Subsystem for Linux (WSL) **WON'T** allow you to run the mobile application with server connection, only offline version.
