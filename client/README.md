# About Client:
This is a simple Angular JS 1.x client web app that gets served by a lightweight grunt web server. This app was designed to perform CRUD operations with the Rails api under the timer/api/ directory.
# Running Client:
Follow these steps to get the server running:
* **Step 1:** Install npm:
   *   By going to [nodejs.org](https://nodejs.org) and downloading the installer. Instructions on how to install using a package manager are under the Download page.
   *   Recommended: setup an npm virtual environment or follow [THIS](https://github.com/sindresorhus/guides/blob/master/npm-global-without-sudo.md) tutorial so you can install npm dependencies globally without sudo.
* **Step 2:** Install grunt cli:
```
npm install -g grunt-cli
```
* **Step 3:** Install the npm dependencies listed under package.json:
```
npm install
```
* **Step 4:** Spin up the grunt web server:
```
grunt connect
```
* **Step 5:** By default, the server runs on http://localhost:9000
