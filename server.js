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
// This url should be the endpoints indicated in the API Reference Docs
// const url = `https://gorgias-test-integ.onrender.com/api/customers?email=${email}`;

const express = require('express');
const app = express();
const axios = require('axios');
require('dotenv').config();

// app.get('/api/customers', async (req, res) => {
//   const email = req.query.email;
// 	console.log(email);
//   console.log(process.env.GORGIAS_API)


//   try {
// 		const response = await axios
// 		.request(options)
// 		.then(function (response) {
// 			// console.log(response.data);
// 			res.send(response.data);
// 		})
// 		.catch(function (error) {
// 			console.error(error);
// 		});
//   } catch (error) {
//     // console.error(error);
//     res.status(500).send('Internal server error');
//   }
// });

app.get('/api/ticket/:id', async(req, res) => {
  const id = req.params.id;
  const options = {
    method: 'GET',
    url: `https://chirpish.gorgias.com/api/tickets/${id}`,
    headers: {
      accept: 'application/json',
      authorization: process.env.GORGIAS_API
    }
  };

  try{
    const response = await axios
      .request(options)
      .then(function(response){
        res.send(response.data)
      })
      .catch(function(error){
        console.error(error)
      })
  }catch(error){
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
})

// encode @ into %40 in email address
// url: 'https://chirpish.gorgias.com/api/customers?email=angelo.s%40chirpish.co',

// const options = {
//   method: 'GET',
// 	url: 'https://chirpish.gorgias.com/api/tickets/91320528',
//   headers: {
//     accept: 'application/json',
// 		// BE CAREFUL WITH THIS
//     authorization: process.env.GORGIAS_API
//   }
// };


app.listen(4000, () => {
  console.log('Server started on port 4000');
});
