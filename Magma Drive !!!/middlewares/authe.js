const jwt = require('jsonwebtoken');



function authenticate(req, res, next){
    const token = req.cookies.token;
    if(!token){
        return res.redirect('/user/login');
    }
    try {
        const decoded  = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        return next();
    } catch (err) {
        return res.redirect('/user/login');
    }
}

module.exports = authenticate;