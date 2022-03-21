# Little Forests

## Production

### Production build and run
in the root folder run:
``` 
npm run build
npm run start 
```

### env variables
the following environment variables need to be set:
```
DATABASE=<Mongodb database URL>
REACT_APP_API=
```
**Note** REACT_APP_API is left blank intentionally

### CI with heroku or similar platforms:
Simply use github integration and set the main branch of this repository as the target.

`npm run build` then `npm run start` should be ran automatically

## Development 

Server boilerplate generated from: https://www.npmjs.com/package/express-generator-typescript

Client boilerplate generated from: https://create-react-app.dev/

### Getting started:

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
### Run
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
### Build 

```
cd client
npm run build
```
Copy `build` to `api\src`
