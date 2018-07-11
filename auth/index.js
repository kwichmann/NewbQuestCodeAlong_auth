// Load dependencies
const express = require("express");
const Joi = require("joi");
const bcrypt = require("bcryptjs");

// Connect to database
const db = require("../db/connect.js");
const users = db.get("users");

// Make username a unique index
users.createIndex("username", {unique: true});

// Schema for input validation
const schema = Joi.object().keys({
    username: Joi.string().regex(/(^[a-zA-Z0-9_]*$)/).min(3).max(30).required(),
    password: Joi.string().min(10).required(),
});

// Create router
const router = express.Router();

// Vanilla GET route
router.get("/", (req, res) => {
    res.json({
        message: "Router called"
    });
});

// CREATE route
router.post("/signup", (req, res, next) => {
    
    // Validate input
    const result =  Joi.validate(req.body, schema);
    if (result.error === null) {
        
        // Search database for username
        users.findOne({
            username: req.body.username
        }).then(user => {
            
            // Check if username is alrady in use
            if (user) {
                
                // If yes, throw error
                const error = new Error("Username is already in taken.");
                next(error);
            } else {
                
                // Encrypt password
                bcrypt.hash(req.body.password, 12).then(hashedPassword => {
                    
                    // Create new user
                    const newUser = {
                        username: req.body.username,
                        password: hashedPassword
                    }
                    
                    // Insert into database
                    users.insert(newUser).then(insertedUser => {
                        res.json(insertedUser);
                    });
                });
            }
        });
    } else {
        
        // Search query error handling
        next(result.error);
    }
});

// Export router
module.exports = router;
