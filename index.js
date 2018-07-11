// Dependencies
const express = require("express");
const volleyball = require("volleyball");

// Make app
const app = express();

app.use(volleyball);
app.use(express.json());

// Vanilla GET route
app.get("/", (req, res) => {
    res.json({
        message: "Hello World!"
    });
});

// Require and mount /auth route
const auth = require("./auth");
app.use("/auth", auth);

// Error handling
function notFound(err, req, res, next) {
    res.status(404);
    const error = new Error("Not found - " + req.originalUrl);
    next(error);
}

function errorHandler(err, req, res, next) {
    res.status(res.statusCode || 500);
    res.json({
        message: err.message,
        stack: err.stack
    });
}

app.use(notFound);
app.use(errorHandler);

// Find port and listen
const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log("Listening on port " + port);
});
