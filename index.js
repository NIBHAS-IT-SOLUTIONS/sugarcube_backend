const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
const bodyParser = require('body-parser');
const helmet=require('helmet')
const morgan=require('morgan')

const app = express();
const port = process.env.PORT || 5000;
const configDatabase=require('./database/database')

const userRouter=require('./routes/Userroutes')

app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
configDatabase()


app.use('/api/user',userRouter)


 

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
  });
