const {check,validationResult} = require("express-validator");

const addUserValidators = [
    check('name')
    .isLength({ min: 1 })
    .withMessage('Name is required'),
    check('email')
    .isEmail()
    .withMessage('Email not valid'),
    check('password')
    .isStrongPassword()
    .withMessage("Password must be at least 8 characters long & should contain at least 1 lowercase, 1 uppercase, 1 number & 1 symbol")
   
];

const addUserValidationHandler = (req,res,next) =>{
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({
            errors: errors.array()
        });
    }else{
        next();
    }
}

module.exports = {addUserValidators,addUserValidationHandler};