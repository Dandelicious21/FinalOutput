const router = require('express').Router();
let Plant = require('../models/plant.model');
const {v4} = require('uuid');
const multer = require('multer');
const fs = require('fs');
const { promisify } = require('util');
const unlinkAsync = promisify(fs.unlink);

const storage = multer.diskStorage({
	destination: function(req, file, cb){
		cb(null,'./uploads/');
	},
	filename: function(req, file, cb){
		cb(null, v4() +"."+ file.originalname);
	}
});

const fileFilter = (req, file, cb) => {
	cb(null,true);
};

const upload = multer(
	{
		storage: storage, 
		limits: {
			fileSize: '20mb'
		},
		fileFilter:fileFilter
	}
);


router.post('/add',upload.fields([{ name: 'imgLink', maxCount: 1 }]),(req, res,next) => {
	let {userID,name,species,dateAcquired,description} = req.body;
	const imgInd = (req.files.imgLink[0].path).split("\\");
	let imgLink = imgInd[1];
	const newPlant = new Plant({userID,name,species,imgLink,dateAcquired,description});
	newPlant.save()
	.then((response) => {
		res.json({status:"ok",plant:response})
	})
	.catch(err => {
		res.json({status:"error",message:err.message})
	});

});

router.get('/test',(req,res) => {
	res.json({status:"Plant route test is functioning !"});
});

router.get('/',(req,res) => {
	Plant.find()
		.then(users => res.json(users))
		.catch(err => res.json({status:"ok",message:err.message}));
});

//Search with filter
router.route('/search/:id').post((req,res) => {
	Plant.find({userID:req.params.id,
		name:{
			$regex:".*"+req.body.name+".*",
			$options:'i'
		}}).sort( 
		{ createdAt: req.body.sortType } 
	)
	 .then((response) => {
	 	res.json({status:"ok",message:response})
	 })
	 .catch((err) => {
	 	res.json({status:"error",message:err.message})
	 })
});

router.post('/add',(req,res) => {
	const {userID,name,species,imgLink,dateAcquired,description} = req.body;
	const newPlant = new Plant({userID,name,species,imgLink,dateAcquired,description});

	newPlant.save()
	.then((response) => {
		res.json({status:"ok",plant:response})
	})
	.catch(err => {
		res.json({status:"error",message:err.message})
	});
});

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

//update specific plant w/o image
router.post('/updateImage/:id',upload.fields([{ name: 'imgLink', maxCount: 1 }]),(req,res) => {
	Plant.findById(req.params.id)
	.then((plant) => {
		unlinkAsync('./uploads/'+plant.imgLink);
		const imgInd = (req.files.imgLink[0].path).split("\\");
		plant.imgLink = imgInd[1];
		
		plant.save()
		.then((response) => res.json({status:"ok",message:response}))
		.catch(err => res.json({status:"error",message:err.message}))
	})
	.catch(err => {

	});
});

router.post('/update/:id',(req,res) => {
	Plant.findById(req.params.id)
	.then((plant) => {

		for(let z in req.body){
			if(plant[z] !== req.body[z]){
				plant[z] = req.body[z];
			}
		}

		plant.save()
		.then((response) => res.json({status:"ok",message:response}))
		.catch(err => res.json({status:"error",message:err.message}))

	})
	.catch(err => {

	});
});

//delete specific plant
router.delete('/:id', (req,res) => {
	Plant.findByIdAndDelete(req.params.id)
		.then((response) => {
			unlinkAsync('./uploads/'+response.imgLink);
			res.json({status:"ok",message:"plant deleted"})
		})
		.catch(err => res.json({status:"error",message:err.message}));
});

module.exports = router; 