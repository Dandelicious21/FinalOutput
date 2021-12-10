const router = require('express').Router();
let Plant = require('../models/plant.model');

router.get('/test',(req,res) => {
	res.json({status:"If this text appears, plant route is working !"});
});

router.get('/',(req,res) => {
	Plant.find()
		.then(users => res.json(users))
		.catch(err => res.json({status:"ok",message:response}));
});

router.post('/add',(req,res) => {
	const {userID,name,species,dateAcquired,description} = req.body;
	const newPlant = new Plant({userID,name,species,dateAcquired,description});

	newPlant.save()
	.then((response) => {
		res.json({status:"ok",plant:response})
	})
	.catch(err => {
		res.json({status:"error",message:err.message})
	});
});


//get all plants of specific user
router.get('/findPlants/:id',(req,res) => {
	Plant.find({userID:req.params.id})
	.then((response) =>{
		res.json({status:"ok",message:response});
	})
	.catch(err => {
		res.json({status:"error",message:err.message});
	});
})

//get specific plant by id
router.get('/:id',(req,res) => {
	Plant.findById(req.params.id)
	.then((response) => {
		res.json({status:"ok",message:response});
	})
	.catch(err => {
		res.json({status:"error",message:err.message});
	});
})

//update specific plant
router.post('/update/:id',(req,res) => {
	Plant.findById(req.params.id)
	.then((plant) => {
		plant.name = req.body.plantName;
		plant.species = req.body.species;
		plant.dateAcquired = req.body.dateAcquired;
		plant.description = req.body.description;

		plant.save()
		.then(() => res.json({status:"ok",message:"Plant has been updated"}))
		.catch(err => res.json({status:"error",message:err.message}))
	})
	.catch(err => {

	});
});
//delete specific plant
router.delete('/:id', (req,res) => {
	Plant.findByIdAndDelete(req.params.id)
		.then(() => res.json({status:"ok",message:"plant deleted"}))
		.catch(err => res.json({status:"error",message:err.message}));
});

module.exports = router; 