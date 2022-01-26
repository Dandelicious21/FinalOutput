require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const usersRouter = require('./routes/users');
const plantsRouter = require('./routes/plants');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri,{useNewUrlParser:true,useUnifiedTopology:true,useCreateIndex: true});

const connection = mongoose.connection;
connection.once('open', () => {
	console.log(`Connected in ${port}`);
});

app.listen(port, () => {
	console.log(`Eden server is running on port ${port}`);
});

app.use('/users',usersRouter);
app.use('/plants',plantsRouter);
app.use('/uploads',express.static('uploads'));





