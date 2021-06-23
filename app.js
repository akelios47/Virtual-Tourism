const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const mongoose = require('mongoose');
const passport = require('passport');
const flash = require('connect-flash');
const session = require('express-session');
const cors = require('cors');
const http = require('http');

const app = express();

// Passport Config
require('./config/passport')(passport);

// DB Config
const db = require('./config/keys').mongoURI;

// Connect to MongoDB
mongoose
  .connect(
    db,
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

// EJS
app.use(expressLayouts);
app.set('view engine', 'ejs');
app.use(express.static("public"));

// Express body parser
app.use(express.urlencoded({ extended: true }));

// Express session
app.use(
  session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
  })
);

// CORS (cross-domain requests)
app.use(cors());
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());

// Connect flash
app.use(flash());

// Global variables
app.use(function (req, res, next) {
  res.locals.success_msg = req.flash('success_msg');
  res.locals.error_msg = req.flash('error_msg');
  res.locals.error = req.flash('error');
  next();
});

// Routes
app.use('/', require('./routes/index.js'));
app.use('/users', require('./routes/users.js'));

//const PORT = process.env.PORT || 8080;

//app.listen(PORT, console.log(`Server running on  ${PORT}`));

server = http.createServer(app);
const instance = app.listen(8084, "0.0.0.0", () => { console.log('WARNING: HTTPS not running, Virtual Tourism API is running on port ' + instance.address().port); });

// Create HTTP or HTTPS server
/*let server = null;
try {
    const passphrase = 'keyPass';  // The password of the private key
    const config = { key: fs.readFileSync(key_file), cert: fs.readFileSync(cert_file), passphrase: passphrase };
    server = https.createServer(config, app );
    const instance = server.listen(443, () => { console.log('Virtual Tourism API is running on port ' +  instance.address().port); });
}
catch(err) {
    server = http.createServer(app);
    const instance = app.listen(8084, "0.0.0.0", () => { console.log('WARNING: HTTPS not running, Virtual Tourism API is running on port ' +  instance.address().port + ' (' + err + ')'); });
}*/