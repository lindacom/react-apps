About this project
==================

Dependencies: NPM, Express, REACT-DOM

This project has a CI/CD pipeline using Github actions to deploy to Github pages.

Master branch - used for development code
Main branch - used for deployments to github pages

The deployment configuration file is located in .github/workflows
The homepage is specified in the package.json file

Developments
==============
1. Clone the repo
2. Add project files and push to master branch

Deployments
===========
To trigger the workflow:
1. Git pull main and master branch to get the latest updates
2. Add project files and push to master branch
3. Switch to main branch - git checkout -b main
4. Merge project files from master to main - git merge master
5. Push files to repo - git push -u origin main
6. Go to the actions tab to see the workflow and see project at lindacom.github.io/react-apps

