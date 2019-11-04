// Check is going to help us validate and sanitize the request body
const {check} = require('express-validator');

const toLowerCase = (value)=>{
  // return the sanitized value  
  return value.toLowerCase();
};

exports.validators = [
    // array of validation chains for various fields in our form
    check('name', 'Please enter a valid name.') // check the name 
    // get rid of any excess spaces 
    .trim()
    // checking to see if the field empty
    .not().isEmpty()
    // Convert HTML characters into entities < > - we don't want the input to be interpreted as HTML when displayed on a page.
    .escape(),
    
    check('type', 'please enter a valid type')
    .trim()
    .not().isEmpty()
    .customSanitizer(toLowerCase)
    .escape()
    
    
    ];
