const dotenv = require('dotenv');
dotenv.config();


const GlobalError = (err,req, res, next) =>{
    err.statuscode =  err.statuscode || 500;
    err.status = err.status|| 'error';
    if(process.env.NODE_ENV == 'development'){
        sendErroForDev(err, res);
    }else{
        sendErroForProd(err, res);
    }
}

const sendErroForDev = (err ,res ) => {
    return res.status(err.statuscode).json({
        status: err.status,
        errror : err ,
        message: err.message,
        stack : err.stack
    });
}  
const sendErroForProd = (err ,res ) => {
    return res.status(err.statuscode).json({
        status: err.status,
        message: err.message,
    });
}  


module.exports = GlobalError;

