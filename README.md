# Start

you need to install mongodb , and create a db with a selected name
after that you need to change the value of DB_CONNECTION_STRING in .env file

example : my db has the name of organiser , and my mongodb is installed in local instance

```bash
DB_CONNECTION_STRING=mongodb://localhost:27017/organiser
```


## Installation of mongodb

Use this link [mongodb](https://www.mongodb.com/) to install mongodb.


## Usage
After installing mongodb , making a clone of the project . got the root of you project and execute the following command 

```bash
npm install
```
Or if you user yarn

```bash
yarn
```

After that you can execute the server in port 3001 

using this command


```bash
npm run watch
```
Or if you user yarn

```bash
yarn watch
```
the server will get started with the following screen 

```zsh
yarn run v1.22.5
$ nodemon app.js
[nodemon] 2.0.7
[nodemon] to restart at any time, enter `rs`
[nodemon] watching path(s): *.*
[nodemon] watching extensions: js,mjs,json
[nodemon] starting `node app.js`
listinig to 3001 
```


## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.
