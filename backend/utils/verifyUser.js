import jwt from 'jsonwebtoken';
import { errorHandler } from './error.js';

export const verifyToken = (req, res, next) => {
    const token = req.cookies.access_token;
    if (!token) {
        return next(errorHandler(401, 'Unauthorized - No token provided'));
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if (err) {
            if (err.name === "TokenExpiredError") {
                return next(errorHandler(401, 'Token expired. Please log in again.'));
            }
            return next(errorHandler(403, 'Unauthorized - Invalid token'));
        }

        req.user = user;
        next();
    });
};
