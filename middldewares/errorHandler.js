function errorHandler(err,req,res,next) {
    console.log(err)
    res.status(500).json({
        error: 'qualcosa è andato storto, riprova più tardi'
    });
};

export default errorHandler;