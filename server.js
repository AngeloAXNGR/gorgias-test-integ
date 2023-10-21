const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser')

// routes
const testRoute = require('./routes/test');

// express app
const app = express();
const PORT = process.env.PORT || 8000

app.use(cors())
app.use(cookieParser())

// Setup routes
app.use('/test', testRoute)

app.get('/api/users', (req, res) => {
  // const email = req.query.email;
  // Your code here
	// console.log(email)
	console.log("a");
});

// listen for requests
app.listen(PORT, () => {
	console.log(`Listening on Port: ${PORT}`)
})