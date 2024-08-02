class ApiError extends Error {
    constructor(message , statuscode){
        super(message)
        this.statuscode=statuscode;
        this.Error = `${statuscode}`.startsWith(4) ? 'failed' : 'error';
        this.isOperational =true;
    }
}

module.exports = ApiError;