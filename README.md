# Electrician Overseer - Frontend (WIP)
## Table of contents
* [General info](#general-info)
* [Technologies](#technologies)
* [Setup](#setup)

## General info
This is my very first own project made for job-seeking purpose. Electrician Overseer is the pet-project that allows me to use my Java (and Spring) and TypeScript (and Angular) knowledge to build a business app.
EO is an application that allows us to create, delete and manage workers in an electrician business company.

This is front-end part of a project (RESTful API)

Basic plan of functionality:
- Home page with an explanation of what is this project about. Later it will receive some features like calendar, chatBox with workers or some sort of Agile table maybe. In the basic version, it should say WHO IS LOGGED IN for role testing purposes.

- Employee pages: CRUD with employee credentials. This will have 2 parts Employee form for creating new employees and Employee List for overseeing those already included in database

- Order page: This should allow us to Create, overlook and edit orders. It should allow setting info like Task ordered, task time started, task time finished, deadline, localization, and workers assigned. Still, try to keep it simple SQL at first and add features later.

Documentation: Should keep documentation in it categorized by locations. Probably classic CRUD grid bonded with PDFs.

Locations: Basic concept is to use some external map API to save localisations of tasks and bind documentation with them
	
## Technologies
 Project is created with:
* Angular
* Angular Material
* Protractor
* HTML, CSS, TypeScript
* (Unit tests- one day ! but I'm focused more on becoming back-end develper and my time is sadly finite)

## Live 

Soon...
	
## Setup
To run this project, install it locally using npm:
```
$ cd ../eoFrontend
$ npm install
$ npm start
```
To work with data You need to run back-end part as well.
