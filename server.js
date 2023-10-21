// const express = require('express');
// const cors = require('cors');
// const cookieParser = require('cookie-parser')

// // routes
// const testRoute = require('./routes/test');

// // express app
// const app = express();
// const PORT = process.env.PORT || 8000

// app.use(cors())
// app.use(cookieParser())

// // Setup routes
// app.use('/test', testRoute)

// app.get('/api/users', (req, res) => {
//   // const email = req.query.email;
//   // Your code here
// 	// console.log(email)
// 	console.log("a");
// });

// // listen for requests
// app.listen(PORT, () => {
// 	console.log(`Listening on Port: ${PORT}`)
// })


// https://gorgias-test-integ.onrender.com/api/customers/?email={{ticket.customer.email}}

const express = require('express');
const app = express();
const axios = require('axios');

app.get('/api/customers', async (req, res) => {
  const email = req.query.email;
	console.log(email);
  const url = `https://gorgias-test-integ.onrender.com/api/customers?email=${email}`;
  try {
    const response = await axios.get(url);
		console.log(response);
    res.send(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal server error');
  }
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});
