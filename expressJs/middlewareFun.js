const middleware = (req, res, next) =>{
    console.log('middlewareFun is use in middleware.js file');
    next();
}

module.exports = middleware;