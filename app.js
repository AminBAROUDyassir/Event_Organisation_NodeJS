const express = require("express");
require('express-group-routes');
const mogoose = require("mongoose");
require('dotenv').config();

const app = express();

const User = require("./model/user");
const userController = require("./controller/userController");
const serviceController = require("./controller/serviceController");
const wilayaController = require("./controller/wilayaController");
const communeController = require("./controller/communeController");
const categoryController = require("./controller/categoryController");
const demandeController = require("./controller/demandeController");
const noteController = require("./controller/noteController");
const photoController = require("./controller/photoController");

app.use(express.json());

app.use((req, res, next) => {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,Origin, Content-Type, X-Auth-Token');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

app.group("/api/v1", (router) => {


    router.post("/login", userController.login);
    router.post("/signup", userController.signup); // /api/v1/signup 

});

app.group("/api/v1/user", (router) => {
    router.post("/create", userController.create);
    router.get("/get_by_id/:id", userController.get_by_id); // /api/v1/login 
    router.post("/get_by_email", userController.get_by_email); // /api/v1/signup 
});

app.group("/api/v1/service", (router) => {

    router.get("/get_by_id/:id", serviceController.get_service_by_id);
    router.post("/create", serviceController.create);
    router.get("/all", serviceController.get_all_service);

});

app.group("/api/v1/wilaya", (router) => {

    router.get("/get_by_id/:id", wilayaController.get_by_id);
    router.get("/get_by_code/:code", wilayaController.get_by_code);
    router.post("/create", wilayaController.create);
    router.get("/all", wilayaController.get_all);

});


app.group("/api/v1/commune", (router) => {
    router.get("/get_by_wilaya/:id", communeController.get_by_wilaya);
    router.get("/get_by_id/:id", communeController.get_by_id);
    router.post("/create", communeController.create);
    router.get("/all", communeController.get_all);

});

app.group("/api/v1/category", (router) => {

    router.get("/get_by_id/:id", categoryController.get_by_id);
    router.post("/create", categoryController.create);
    router.get("/all", categoryController.get_all);

});

app.group("/api/v1/demande", (router) => {

    router.get("/get_by_id/:id", demandeController.get_by_id);
    router.post("/create", demandeController.create);
    router.get("/all", demandeController.get_all);

});

app.group("/api/v1/note", (router) => {

    router.get("/get_by_id/:id", noteController.get_by_id);
    router.get("/get_by_user/:id", noteController.get_by_user);
    router.post("/create", noteController.create);
    router.get("/all", noteController.get_all);

});


app.group("/api/v1/photo", (router) => {

    router.get("/get_by_id/:id", photoController.get_by_id);
    router.get("/get_by_service/:id", photoController.get_by_service);
    router.post("/create", photoController.create);
    router.get("/all", photoController.get_all);

});



app.post('/login', userController.login);
app.post('/signup', userController.signup);



app.get('/', (req, res) => {
    console.log('we are here ');

    res.send("je suis dans cette page 12");

});

mogoose.connect(
    process.env.DB_CONNECTION_STRING,
    { useUnifiedTopology: true, useNewUrlParser: true },

    (req, res) => {

        console.log("db connected");
    });


app.listen(3001, () => {

    console.log("listinig to 3001 ");
});
