const router = require('express').Router();
let User = require('../models/users.model');

router.get('/test',(req,res) => {
	res.json({status:"If this text appears, user route is working !"});
});

router.get('/',(req,res) => {
	User.find()
		.then(users => res.json(users))
		.catch(err => res.json({status:"error",message:err.message}));
});

router.post('/login', async(req,res) => {
	try{
		const user = await User.findOne({
			username:req.body.username,
			password:req.body.password
		})
		if(user){
			res.json(user)
		}else{
			res.json({status:"error",message:"Incorrect credentials"})
		}
	}catch(err){
		res.json({status:"error",message:err.message})
	}
});

router.route('/:id').get((req,res) => {
	User.findById(req.params.id)
		.then((user) => res.json(user))
		.catch(err => res.json({status:"error",message:err.message}));
});

router.post('/add', async(req,res) => {
	const {username,name, password} = req.body;
	const newUser = new User({username,name,password});

	const flag = (username.trim() != "") 
			&& (name.trim() != "") 
			&& (password != "");

	if(flag){ 
		newUser.save()
		.then((response) => {
				res.json({status:"ok",user:response})
			})
		.catch(err => {
			if(err.code == "11000"){
				res.json({status:"error",message:"Username exists"})			
			}else{
				res.json({status:"error",message:err.message});
			}
		});
	}else{
		if(password.length < 8){
			res.json({status:"error",message:"Minimum password length is 8 characters."});					
		}else{
			res.json({status:"error",message:"Please fill all fields."});	
		}
	}
});

router.route('/:id').delete((req,res) => {
	User.findByIdAndDelete(req.params.id)
		.then(() => res.json({status:"ok",message:"user deleted"}))
		.catch(err => res.json({status:"error",message:err.message}));
});

router.route('/update/:id').post((req,res) => {
	User.findById(req.body.id)
		.then((user) => {
			if(req.body.oldPassword != user.password){
				res.json({status:"error",message:"Incorrect old password"})
			}else{
				if(req.body.newPassword == user.password){
					res.json({status:"error",message:"Old password cannot be used"})
				}else{
					user.password = req.body.newPassword;
					user.save()
						.then(() => res.json({status:"ok",message:"Password has been changed"}))
						.catch(err => res.json({status:"error",message:err.message}))
				}
			}		
		})
		.catch(err => res.json({status:"error",message:err.message}));
});

module.exports = router; 