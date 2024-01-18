**DO NOT ADD ANY OTHER PROJECTS TO THIS REPO - CREATE A NEW REPO**

**N.B. GITHUB PAGES CURRENTLY DISPLAYS BLANK PAGE**

About this project
==================

Dependencies: NPM, Express, REACT-DOM

frontend - React
Backend - node and express server

This project has a CI/CD pipeline using Github actions to deploy to Github pages.

Master branch - used for development code
Main branch - used for deployments to github pages

The deployment configuration file is located in .github/workflows
The homepage is specified in the package.json file

Developments
==============
1. Clone the repo
2. Add project files
3. To run the project locally cd to react-apps\todos-back-end and run node src/server.js
4. Open project in the browser at localhost:8080/todos
5. push files to master branch

Deployments
===========
Commits to main branch will trigger the ci/cd pipeline (workflow).

To trigger the workflow:
1. Git pull main and master branch to get the latest updates
2. Add project files and push to master branch
3. Switch to main branch - git checkout -b main
4. Merge project files from master to main - git merge master
5. Push files to repo - git push -u origin main
6. Go to the actions tab to see the workflow and see project at lindacom.github.io/react-apps

