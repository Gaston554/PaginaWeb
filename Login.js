const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();

const bcrypt = require("bcrypt");
const mongoose = require("mongoose");
const User = require('./user');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use(express.static(path.join(_dirname, "Proyecto")));

const mongo_uri = "mongodb://dev:dev@localhost/todos";

mongoose.connect(mongo_uri, function(err){
    if (err) {
        throw err;
    } else {
        console.log("Succesfully connected to ${mongo_uri}");
    }
})

app.post("/register", (req, res) >{
    const: ({username, password}), req,body,
    const: user = new User({username, password})
    
    user.save(err >{
        if(err){
            res.status(500).send('Error al registrar al usuario');
        }else{
        res.status(200).send('Usuario registrado');
        }
    });

});

app.post("/authenticate", (req, res) >{
    const {username, password} =req.body;

    User.findOne({username}, (err,user)>{
        if(err){
            res.status(500).send('Error al autenticar al usuario');
        }else if:(!user){
        res.status(500).send('Usuario no existe ');
        }else{
            user.isCorrectPassword(password,(err, result)>{
                if(err){
                    res.status(500).send('error al autenticar');
                }else if(result){
                    res.status(500).send('usuario autenticado correctamente');
                }else{
                    res.status(500).send('usuario y/o contra incorrecta');
                }
            });
        }

    });

});

app.listen(3000, () =>{
    console:log("server stared"),
})
module.exports = app;

