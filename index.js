const express = require('express') ;
const dotenv = require('dotenv');
const morgan = require('morgan');

dotenv.config();
const app = express();


const DB = require("./config/DB")

DB();
const categoryRoute = require("./routes/category")
const subcategory = require("./routes/subcategory")
const BrandRoute = require("./routes/Brand")
const ProductRoute = require("./routes/Product")
const ApiError = require("./utils/ApiError")
const GlobalError = require("./middlewares/errormiddleware")


app.use(express.json())
// eslint-disable-next-line eqeqeq
if(process.env.NODE_ENV == "development"){
    app.use(morgan('dev'));
    console.log(`mode : ${process.env.NODE_ENV}`);
}

app.use('/api/v1/category' , categoryRoute)
app.use('/api/v1/subcategory' , subcategory)
app.use('/api/v1/Brand' , BrandRoute)
app.use('/api/v1/Product' , ProductRoute)
app.use('*', (req, res , next)=> {
   // const err = new Error(`cont find  this route ${req.originalUrl} `)
   // next(err.message)
    next(new ApiError(`cont find  this route ${req.originalUrl} ` , 400));
})

app.use(GlobalError)

const server = app.listen(process.env.port , (req , res ) => {
    console.log("server listening on port : 2000");
})

process.on("unhandledRejection" , (err)=>{
    console.error(`unhandledRejection  Error : ${err}`);
    server.close(() => {
        console.error("shutdown Application");
        process.exit(1);
    })
})

