import jwt from 'jsonwebtoken'
import { InvalidToken } from './invalid_token.js';


export const authorizationMiddleware = (req , res , next ) => {
    console.log(req.cookies);
    try {
        const {token} = req.cookies;
        const decoded = jwt.verify(token , process.env.JWT_SECRET);
        const invalid_token = InvalidToken.find({ content: token }).lean();
        if (invalid_token.count() > 0) {
            return res.redirect("/");
        }
        req.user = decoded;
        next();
    } catch(error){
        console.error(error);
        return res.redirect('/');
    }
};
