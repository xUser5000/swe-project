import jwt from 'jsonwebtoken'


export const authorizationMiddleware = (req , res , next ) => {
    try {
        const {token} = req.cookies;
        const decoded = jwt.verify(token , process.env.JWT_SECRET);
        req.user = decoded;
        next();
    } catch(error){
        console.error(error);
        return res.redirect('/');
    }
};
