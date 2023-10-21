const express = require('express');
const router = express.Router();


router.get('/greet', async(req, res) => {
	try{
		res.status(200).send({success: true, message:'Hi'});
	}catch(error){
		console.error(error);
		res.status(500).send(error);
	}
})



module.exports = router