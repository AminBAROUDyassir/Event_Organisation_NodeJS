
const User = require("../model/user");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');



exports.login = function (req, res) {

    let myPlaintextPassword = req.body.MotDePasse;
    let Email = req.body.Email;

    console.log("Compare password with Password :", req.body);
    console.log("Compare password with Email :", Email);

    User.findOne({ Email: Email }).then((data) => {
        if (data) {
            console.log("Erreur from server ", data.MotDePasse);
            bcrypt.compare(myPlaintextPassword, data.MotDePasse, (err, result) => {

                console.log("Compare password with res bcrypt", result);
                if (result == true) {

                    res.send({ token: data.Token });

                }
                else {
                    res.send({ token: 0, expire_date: new Date() });

                }


            });
        } else { res.send({ token: 0, expire_date: new Date() }); }






    });

}

exports.signup = function (req, res) {
    // these emailFromSignupForm and passwordFromSignupForm are coming from your frontend
    const { Nom, Email, MotDePasse, Telephone, Adresse, Wilaya, Type_user } = req.body;
    const token = crypto.randomBytes(16).toString('hex');
    var myCurrentDate = new Date();
    var date = new Date(myCurrentDate);
    var newDate = new Date(date.setMonth(date.getMonth() + 1));
    //creating a new user on our database
    const newUser = new User({
        Nom: Nom,
        Email: Email,
        Telephone: Telephone,
        Adresse: Adresse,
        Wilaya: Wilaya,
        Type_user: Type_user,
        MotDePasse: bcrypt.hashSync(MotDePasse, bcrypt.genSaltSync()),
        Token: token,
    });
    newUser.save();

    //sending back the newUser to the frontEND
    res.json(newUser);


}

exports.create = function (req, res) {
    // these emailFromSignupForm and passwordFromSignupForm are coming from your frontend
    const { Nom, Email, MotDePasse, Telephone, Adresse, Wilaya, Type_user } = req.body;
    const token = crypto.randomBytes(16).toString('hex');
    var myCurrentDate = new Date();
    var date = new Date(myCurrentDate);
    const newUser = new User({
        Nom: Nom,
        Email: Email,
        Telephone: Telephone,
        Adresse: Adresse,
        Wilaya: Wilaya,
        Type_user: Type_user,
        MotDePasse: bcrypt.hashSync(MotDePasse, bcrypt.genSaltSync()),
        Token: token,
    });
    newUser.save();

    //sending back the newUser to the frontEND
    res.json(newUser);

}

exports.get_by_id = function (req, res) {

    let Id_user = req.params.id;
    User.findOne({ Id_user: Id_user }).then((data) => {
        if (data) {
            res.send(data);
        }
        else
            res.send(null);
    });
}

exports.get_by_email = function (req, res) {
    let Email = req.body.Email;
    User.findOne({ Email: Email }).then((data) => {
        if (data) {
            res.send(data);
        }
    });

}