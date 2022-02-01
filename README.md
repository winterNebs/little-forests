# Little Forests


Server boilerplate generated from: https://www.npmjs.com/package/express-generator-typescript

Client boilerplate generated from: https://create-react-app.dev/

## Getting started:

    install node 16.13.1 (I suggest using [nvm](https://github.com/nvm-sh/nvm) for linux or [nvm-windows](https://github.com/coreybutler/nvm-windows) for windows)
```
nvm install 16.13.1
nvm alias default 16.13.1
```

install packages for client and server
```
cd client
npm i
cd ..
cd api
npm i
```
## Run
client
```
cd client
npm run start   
```
server
```
cd api
npm run start:dev
```
run local database (you need to install mongodb)
create a folder and the run the command: 
```
mongod -dbpath <FOLDER NAME>
```
