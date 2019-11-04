const express = require("express");
const app = express(); 
const {validationResult} = require('express-validator');


// distructure is the reason we have curly brace 
const {validators} = require(__dirname + "/validators.js");

const {connectionPool} = require(__dirname + "database/connection.js");

app.use(express.static('public'));
// This middleware is used for parsing the body of the request

app.use(express.urlencoded({extended:true}));

const data = [
    {
        name:"Rover",
        type:"chihuahua"
    },
    {
        name:"Scuffles",
        type:"dachshund"
    }
    ];


app.post('/dogs', validators, (req,res)=>{
   // Handle form the data 
//   res.send(req.body);
    // Get validation errors, if there are any. Convert to array.  
    const valErrors = validationResult(req).array();
    
    if(valErrors.length !=0) {
        res.send(valErrors);
    }
    else {
        // data.push(req.body);
        // res.send(req.body); 
        connectionPool.query(`INSERT INTO dogs (name, type) VALUES ('${req.body.name}','${req.body.type}');`,(error,results)=>{
            
            if(error){
                console.log(error);
            }
            else {
                console.log(results);
             }
            res.send(results);
        });
    }
});

// REMEMBER : the query parameters are not being validated or sanitized. 
app.get('/dogs', (req,res)=>{
    
    
    // Get query parameters 
    let type = req.query.type;
    
    // Create a new array with only dogs of the given type, send it back. Hint: use filter()
    let retrievedDogs = data.filter(dog=>dog.type ===type);
   
   res.send(retrievedDogs); 
});
const server = app.listen(8080, ()=>{
console.log("listening");
    
});
