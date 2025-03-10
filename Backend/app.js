const express = require('express');
const bodyParser = require('body-parser');

// import route
const userRoute = require('./routes/User/user');
const NGORoute = require('./routes/NGO/user');
const auth = require('./routes/auth')

// app
const app = express();

// to enable CORS
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// middleware
app.use(bodyParser.json());

//routes middleware
app.use("/api", userRoute);
app.use("/api", NGORoute);
app.use("/api", auth);

const port = process.env.PORT || 8000

// app starts from here
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})

module.exports = app;
