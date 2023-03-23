# Angular-test-GHrepo-search

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.2.4.

With this app, you can search for a repository on GitHub and see a list of the first 30 repositories with that name. You'll see a collection of cards with the repository title, the owner's username, and a short description. If you click on the "View Details" button, you'll be redirected to the repository details page where you can see the repository name and creation date, owner data including their name, avatar, and a link to their profile. You'll also see the full repository description with a button to the repository on GitHub.

## App demo:

![searcher](/demo-img/app-001.png)
![repo-cards](/demo-img/app-002.png)
![repo-details](/demo-img/app-003.png)

## How to install the app

* Clone the repository to your computer
* Install the dependencies with 
```bash
npm install
```
* run the app localy with the command: 
```bash 
ngserve
```
* The app with be compiled and ran in a local server at: http://localhost:4200/

## Some possible improvements:
* Authenticate with the GitHub token to access more information
* Add pagination to the search to display more repositories.
* Display the repository's Readme.md file on the details screen
